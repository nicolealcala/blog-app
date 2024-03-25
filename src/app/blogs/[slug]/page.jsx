import Image from "next/image";
import blog from "./blog.module.css";

const BlogPost = () => {
  return (
    <div className="row mx-0">
      <div className="col-3 d-none d-lg-flex p-0">
        <div className={blog.postImg}>
          <Image
            src="/noavatar.png"
            alt="Post Image"
            fill
            className="img-cover"
          />
        </div>
      </div>
      <div
        className={`col-lg-9 d-flex flex-column justify-content-start align-items-start py-5 ${blog.content}`}
      >
        <h2>Title here</h2>
        <div className="row mx-0 mt-3 w-100 d-flex align-items-center">
          <div className={blog.authorImg}>
            <Image
              src="/noavatar.png"
              alt="Author Image"
              fill
              sizes="100vw"
              className="img-cover"
            />
          </div>
          <div className="col-8 d-flex flex-column justify-content-center">
            <h6 className="txt-weight-mid">Nicole Alcala</h6>
            <p className="txt-color-soft txt-size-small my-0">March 24, 2024</p>
          </div>
        </div>
        <p className="mt-5">Lorem ipsum</p>
      </div>
    </div>
  );
};

export default BlogPost;
