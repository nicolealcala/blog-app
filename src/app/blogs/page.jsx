import PostCard from "@/components/postCard/PostCard";
import ToggleModal from "@/components/postModal/toggleModal";
import { auth } from "@/lib/auth";
import { getBlogs } from "@/lib/data";

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

  if (blogs.length === 0) {
    return (
      <div>
        <h2>No posts yet.</h2>
        {session?.user.isAdmin ? (
          <>
            {" "}
            <p>Come back later or create a new post.</p>
            <ToggleModal userId={session?.user.id} btnName="+ Create Blog" />
            {/* <Modal userId={JSON.parse(JSON.stringify(user._id))} /> */}
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
            <ToggleModal userId={session?.user.id} btnName="+ Create Blog" />
          </div>
        )}

        {blogs.map((blog) => (
          <div className="col-md-6 col-lg-4 mb-4" key={blog.id}>
            <PostCard item={blog} />
          </div>
        ))}
      </div>
      <div
        className="d-flex d-lg-none bg-light rounded-pill overflow-hidden"
        id="addBtn"
      >
        <ToggleModal userId={session?.user.id} btnName="+" />
      </div>
    </div>
  );
};

export default Blogs;
