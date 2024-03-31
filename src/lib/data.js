import { connectToDb } from "./utils";
import { Blog, User } from "./models";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";

export const getBlogs = async () => {
    try {
        connectToDb();
        const blogs = await Blog.find({});
        return blogs;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

export const getBlog = async (blogId) => {
    try {
        connectToDb();
        const blog = await Blog.findOne({ slug: blogId });
        return blog;
    } catch (err) {
        console.log(err);
        return notFound;
    }
}

export const getUserByEmail = async (userEmail) => {
    noStore();
    try {
        connectToDb();
        const user = await User.findOne({ email: userEmail });
        return user;
    } catch (err) {
        console.log(err); throw new Error("Fetching user failed.");
    }
}

export const getUser = async (userId) => {
    noStore();
    try {
        connectToDb();
        const user = await User.findById(userId);
        return user;
    } catch (err) {
        console.log(err); throw new Error("Fetching user failed.");
    }
}

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err); throw new Error("Fetching post failed.");
    }
}