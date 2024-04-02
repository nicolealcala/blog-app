import PostCard from "@/components/postCard/PostCard";
import Modal from "@/components/tiptap/Modal";
import { auth } from "@/lib/auth";
import { getBlogs, getUserByEmail } from "@/lib/data";

// FETCH DATA WITH AN API
// const getPosts = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/blogs");
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
  // const blogs = await getPosts();

  // FETCH DATA WITHOUT AN API
  const blogs = await getBlogs();

  const session = await auth();
  const user = await getUserByEmail(session.user.email);

  if (blogs.length === 0) {
    return (
      <div>
        <h2>No posts yet.</h2>
        {session?.user.isAdmin ? (
          <>
            {" "}
            <p>Come back later or create a new post.</p>
            <button
              className="btns border-0 text-dark txt-weight-mid"
              data-bs-toggle="modal"
              data-bs-target="#createBlog"
            >
              + Create blog
            </button>
            <Modal userId={JSON.parse(JSON.stringify(user._id))} />
          </>
        ) : (
          <>
            <p>Come back later.</p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="position-relative py-4">
      <div className="row mx-0 gx-5">
        <div
          className={`col-12 mb-3 d-flex align-items-center ${
            session?.user.isAdmin && "col-lg-6"
          }`}
        >
          <h4 className="my-0">All blogs</h4>
        </div>
        {session?.user.isAdmin && (
          <div className="d-none d-lg-flex justify-content-end col-6 mb-3">
            <button
              className="btns border-0 text-dark txt-weight-mid"
              data-bs-toggle="modal"
              data-bs-target="#createBlog"
            >
              + Create blog
            </button>
          </div>
        )}

        {blogs.map((blog) => (
          <div className="col-md-6 col-lg-4 mb-4" key={blog.id}>
            <PostCard item={blog} />
          </div>
        ))}
      </div>
      <button
        className="d-flex d-lg-none bg-light rounded-pill"
        id="addBtn"
        data-bs-toggle="modal"
        data-bs-target="#createBlog"
      >
        +
      </button>
      <h1></h1>
      <Modal userId={JSON.parse(JSON.stringify(user._id))} />
    </div>
  );
};

export default Blogs;
