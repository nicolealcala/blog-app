import Image from "next/image";
import styles from "./blog.module.css";
import Author from "@/components/postAuthor/Author";
import { Suspense } from "react";
import { getBlog } from "@/lib/data";
import NotFound from "@/app/not-found";
import { createMarkup } from "@/lib/utils";

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

  return (
    <div className="row mx-0 pt-3 pb-5">
      <div className="col-12 d-flex p-0">
        <div className={styles.postImg}>
          <Image src={blog.img} alt="Post Image" fill className="img-cover" />
        </div>
      </div>
      <div className={`col-12 pt-4 ${styles.content}`}>
        <h2>{blog.title}</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <Author userId={blog.userId} date={blog.createdAt} />
        </Suspense>
        <div
          className="mt-5"
          dangerouslySetInnerHTML={createMarkup(blog.content)}
        ></div>
      </div>
    </div>
  );
};

export default BlogPost;
