"use server"
import { revalidatePath } from "next/cache";
import { Blog, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt"

export const addBlog = async (formData) => {
    const { title, content, img, slug } = Object.fromEntries(formData);
    try {
        connectToDb()
        const newBlog = new Blog({
            title, content, img, slug
        })
        await newBlog.save();
        console.log(title, content, img, slug);

        //In build mode, yuo cannot see changes immediately because of Next.js caching. To refetch the blogs whenever a new post is deleted:
        revalidatePath("/blogs");
    } catch (err) {
        console.log(err)
        throw new Error(err);
    }
}

export const updateBlog = async (id, formData) => {
    const { title, content, img, slug } = Object.fromEntries(formData);
    try {
        connectToDb()
        await Blog.findByIdAndUpdate(id, { title, content, img, slug });

        //In build mode, yuo cannot see changes immediately because of Next.js caching. To refetch the blogs whenever a new post is deleted:
        revalidatePath("/blogs");
    } catch (err) {
        console.log(err)
        throw new Error(err);
    }
}

export const deleteBlog = async (formData) => {
    const { id } = Object.fromEntries(formData);
    try {
        connectToDb()
        await Blog.findByIdAndDelete(id);

        //In build mode, yuo cannot see changes immediately because of Next.js caching. To refetch the blogs whenever a new post is deleted:
        revalidatePath("/blogs");
    } catch (err) {
        console.log(err)
        throw new Error(err);
    }
}

export const githubLogin = async () => {
    await signIn("github");
};

export const logout = async () => {
    await signOut();
}

export const register = async (prev, formData) => {
    const { username, email, password, cpassword } = Object.fromEntries(formData);

    if (password !== cpassword) {
        console.log('Passwords did not match');
        return { pwError: "Passwords did not match. Try again." }
    }

    try {
        connectToDb();
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return { unError: "Username already exists" }
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        await newUser.save();
        return { success: true }
    } catch (err) {
        return { error: "Failed to register account. Try again." }
    }
}

export const login = async (prevState, formData) => {
    const { email, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { email, password });
    } catch (err) {
        console.log(err);

        if (err.type === "CredentialsSignin") {
            return { error: "Invalid username or password" };
        }
        throw err;
    }
};