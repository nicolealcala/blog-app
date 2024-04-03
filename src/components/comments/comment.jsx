import { getUser } from "@/lib/data";
import Image from "next/image";
import styles from "./comment.module.css";

const CommentBox = async ({ session, comment, poster }) => {
  const user = await getUser(comment?.userId);

  return (
    <div className="d-flex commentForm" data-bs-theme="dark">
      <Image
        src={user?.img}
        width={35}
        height={35}
        alt="Commentor Image"
        className="rounded-pill"
      />
      <div className="d-flex flex-column w-100 ms-3">
        <p className="my-0 txt-color-soft txt-size-mid">
          <strong>{user?.username}</strong>
          {poster === comment.userId && <> &#x2022; Author</>}
        </p>
        <div className="col-12">
          <p className="form-control commentBox my-2">{comment?.content}</p>
          {session?.user.id === comment.userId && (
            <div className="d-flex align-items-center">
              <button
                className="bg-transparent border-0 txt-size-mid me-3"
                id={styles.edit}
              >
                Edit
              </button>
              <button
                className="bg-transparent border-0 txt-size-mid"
                id={styles.delete}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
