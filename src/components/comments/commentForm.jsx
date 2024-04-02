import { addComment } from "@/lib/actions";
import Image from "next/image";
const CommentForm = ({ session, blogId }) => {
  return (
    <form
      action={addComment}
      className="commentForm d-flex w-100"
      data-bs-theme="dark"
    >
      <div className="d-flex flex-grow-1">
        <Image
          src={session.user.img || session.user.image}
          width={35}
          height={35}
          alt="Commentor Image"
          className="rounded-pill me-2"
        />
        <textarea
          name="content"
          cols="30"
          rows="3"
          className="form-control border-secondary me-2"
          placeholder="Write a comment..."
          required
        ></textarea>
        <input type="hidden" name="userId" value={session?.user.id} />
        <input type="hidden" name="blogId" value={blogId} />
      </div>
      <div className="d-flex justify-content-end align-items-end">
        <button type="submit" className="btn primary-btn">
          &#10148;
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
