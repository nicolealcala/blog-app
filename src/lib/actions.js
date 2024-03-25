"use server"
import { revalidatePath } from "next/cache";
import { Blog } from "./models";
import { connectToDb } from "./utils";

export const addBlog = async (formData) => {
    const { title, content, img, slug } = Object.fromEntries(formData);
    try {
        connectToDb()
        const newBlog = new Blog({
            title, content, img, slug
        })
        await newBlog.save();

        //To refetch the blogs whenever a new post is added.
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

        //To refetch the blogs whenever a new post is deleted.
        revalidatePath("/blogs");
    } catch (err) {
        console.log(err)
        throw new Error(err);
    }
}