import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, max: 50 },
    password: { type: String },
    img: { type: String, default: "/noavatar.png" },
    isAdmin: { type: Boolean, default: false }
}, { timeStamps: true });

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true, },
    img: { type: String, default: "/blog.png" },
    userId: { type: String, requireD: true, },
    slug: { type: String, requireD: true, unique: true }
}, { timeStamps: true });

export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);