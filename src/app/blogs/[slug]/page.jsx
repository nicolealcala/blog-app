import Image from "next/image";
import styles from "./blog.module.css";
import Author from "@/components/postAuthor/Author";
import { Suspense } from "react";
import { getBlog } from "@/lib/data";

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

  return (
    <div className="row mx-0">
      <div className="col-3 d-none d-lg-flex p-0">
        <div className={styles.postImg}>
          <Image
            src={blog.img ? blog.img : "/blog.png"}
            alt="Post Image"
            fill
            className="img-cover"
          />
        </div>
      </div>
      <div
        className={`col-lg-9 d-flex flex-column justify-content-start align-items-start py-5 ${styles.content}`}
      >
        <h2>{blog.title}</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <Author userId={blog.userId} />
        </Suspense>
        <p className="mt-5">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
