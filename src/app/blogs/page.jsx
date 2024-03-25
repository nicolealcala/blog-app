import PostCard from "@/components/postCard/PostCard";
import { getBlogs } from "@/lib/data";

// FETCH DATA WITH AN API
// const getPosts = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!res.ok) {
//       throw new Error(`Network response failed. Status ${res.status}`);
//     }
//     return res.json();
//   } catch (error) {
//     console.log("Something went wrong");
//   }
// };
export const metadata = {
  title: "Blogs",
  description: "DreamLabs complete blog posts.",
};

const Blogs = async () => {
  // FETCH DATA WITH AN API
  // const posts = await getPosts();

  // FETCH DATA WITHOUT AN API
  const blogs = await getBlogs();

  return (
    <div className="row mx-0 py-5">
      {blogs.map((blog) => (
        <div className="col-md-6 col-lg-4 mb-5" key={blog.id}>
          <PostCard item={blog} />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
