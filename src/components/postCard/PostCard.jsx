import Link from "next/link";
import Image from "next/image";
import "./postcard.css";
const PostCard = () => {
  return (
    <div className="postCard">
      <div className="top">
        <div className="imgContainer order-1">
          <Image
            src="/noavatar.png"
            alt="Post-Img"
            fill
            sizes="100vw"
            className="img-cover"
          />
        </div>
        <span className="postDate order-2">03.23.24</span>
      </div>
      <div className="bottom">
        <h5 className="title">Title</h5>
        <p className="desc">description</p>
        <Link href="/blogs/post" className="link">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
