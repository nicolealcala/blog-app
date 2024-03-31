import Link from "next/link";
import Image from "next/image";
import styles from "./postcard.module.css";
import { createMarkup } from "@/lib/actions";

const truncateContent = (content) => {
  if (content.length > 80) {
    return content.slice(0, 80) + "...";
  }
  return content;
};

const removeHtmlTags = (str) => {
  return str.replace(/<[^>]*>/g, "");
};
const PostCard = ({ item }) => {
  const options = { month: "long", day: "numeric", year: "numeric" };

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <Image
          src={item?.img}
          alt="Post-Img"
          fill
          sizes="100vw"
          className="img-cover"
        />
      </div>
      <div>
        <span className={styles.date}>
          {new Date(item.createdAt).toLocaleDateString("en-US", options)}
        </span>
        <h6 className={styles.title}>{item?.title}</h6>
        <p className={styles.desc}>
          {truncateContent(removeHtmlTags(item.content))}
        </p>

        <Link href={`/blogs/${item?.slug}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
