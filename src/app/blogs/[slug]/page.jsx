import Image from "next/image";
import styles from "./blog.module.css";
import Author from "@/components/postAuthor/Author";
import { Suspense } from "react";
import { getBlog, getComments } from "@/lib/data";
import NotFound from "@/app/not-found";
import { createMarkup } from "@/lib/utils";
import { deleteBlog } from "@/lib/actions";
import { auth } from "@/lib/auth";
import CommentForm from "@/components/comments/commentForm";
import CommentBox from "@/components/comments/comment";

//Next.js only fetch data once even if its called by multiple functions (generateMetaData)
export const dynamicMetadata = async ({ params }) => {
  const { slug } = params;
  const blog = await getBlog(slug);

  return {
    title: blog.title,
    desc: blog.content,
  };
};

const BlogPost = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA WITHOUT API
  const blog = await getBlog(slug);
  if (!blog) return <NotFound />;

  const session = await auth();
  const comments = await getComments();

  return (
    <div className="row mx-0 pb-5">
      <div className="col-12 d-flex p-0">
        <div className={styles.postImg}>
          <Image src={blog.img} alt="Post Image" fill className="img-cover" />
        </div>
      </div>
      <div className={`row mx-0 pt-3 ${styles.content}`}>
        <div className="col-12">
          <h2>
            <strong>{blog.title}</strong>
          </h2>
        </div>
        <div className="col-12 col-lg-6">
          <Suspense fallback={<div>Loading...</div>}>
            <Author userId={blog.userId} date={blog.createdAt} />
          </Suspense>
        </div>
        {session?.user.id === blog.userId && (
          <div className="col-12 col-lg-6 d-flex justify-content-end align-items-center">
            <button className="btn btn-primary me-3">Edit</button>
            <form action={deleteBlog}>
              <button className="btn btn-danger">Delete</button>
            </form>
          </div>
        )}
        <div
          className="col-12 mt-5"
          dangerouslySetInnerHTML={createMarkup(blog.content)}
        ></div>
        <hr className="mt-4 mb-0" />
        <div
          className="row mx-0 pt-4 pb-2 rounded-bottom-2"
          style={{ backgroundColor: "var(--bg-dark)" }}
        >
          <div className="col-12">
            <CommentForm session={session} blogId={blog.id} />
          </div>

          {comments.length > 0 && (
            <>
              <div className="col-12 txt-color-soft my-3">
                {comments.length > 0
                  ? "Comments"
                  : "This post has no comments yet."}
              </div>
              {comments.map((comment) => (
                <>
                  <CommentBox comment={comment} key={comment.id} />
                  <hr className="mt-2" />
                </>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
