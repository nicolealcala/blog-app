import Link from "next/link";
import Image from "next/image";
import styles from "./postcard.module.css";

const PostCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={item.img ? item.img : "/blog.png"}
            alt="Post-Img"
            fill
            sizes="100vw"
            className="img-cover"
          />
        </div>
        <span className={styles.date}>{item.createdAt}</span>
      </div>
      <div>
        <h6 className={styles.title}>{item.title}</h6>
        <p className={styles.desc}>
          {item.content.slice(0, 80)}
          {item.content.length > 80 ? "..." : ""}
        </p>
        <Link href={`/blogs/${item.slug}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
