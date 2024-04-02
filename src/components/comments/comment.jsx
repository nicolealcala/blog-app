import { getUser } from "@/lib/data";
import Image from "next/image";
const CommentBox = async ({ comment }) => {
  console.log(comment.userId);
  const user = await getUser(comment?.userId);
  return (
    <div className="d-flex">
      <Image
        src={user?.img}
        width={35}
        height={35}
        alt="Commentor Image"
        className="rounded-pill me-2"
      />
      <div className="">
        <p className="my-0 txt-color-soft txt-size-small">{user.username}</p>
        <p className="my-0">{comment?.content}</p>
      </div>
    </div>
  );
};

export default CommentBox;
