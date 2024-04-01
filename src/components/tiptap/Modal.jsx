"use client";
import { useEffect, useState } from "react";
import Tiptap from "./Tiptap";
import { addBlog } from "@/lib/actions";
import { useFormState } from "react-dom";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Modal = ({ userId }) => {
  const [content, setContent] = useState("");
  // const [title, setTitle] = useState("");
  // const [img, setImg] = useState("");
  const [state, setState] = useFormState(addBlog, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success &&
      Swal.fire({
        title: "Success",
        html: "<em>Blog has been posted!</em>",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      }).then(() => {
        const modal = document.getElementById("createBlog");
        modal.classList.remove("show");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        const backdrop = document.querySelector(".modal-backdrop");
        if (backdrop) backdrop.remove();
        router.push("/blogs");
      });
  });

  return (
    <div
      className="modal fade"
      id="createBlog"
      tabIndex="-1"
      data-bs-theme="dark"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div className="modal-content" style={{ height: "90vh" }}>
          <form
            action={setState}
            className="d-flex flex-column justify-content-between h-100"
          >
            <div className="modal-header">
              <h1 className="modal-title fs-4">Create a blog post</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row mx-0">
                <input type="hidden" name="userId" value={userId} />
                <div className="col-12 col-lg-6 h-50">
                  <label htmlFor="title" className="required">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control border border-secondary"
                    name="title"
                    // onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-lg-6 h-50">
                  <label htmlFor="img">Picture URL</label>
                  <input
                    type="text"
                    className="form-control border border-secondary"
                    name="img"
                    placeholder="https://example.com/image.png"
                    // onChange={(e) => setImg(e.target.value)}
                  />
                </div>
                <div className="col-12 mt-3 h-100">
                  <label htmlFor="content" className="required">
                    Content
                  </label>
                  <Tiptap
                    content={content}
                    onChange={(c) => setContent(c)}
                    name="content"
                  />
                  <input type="hidden" name="content" value={content} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-secondary"
                data-bs-dismiss="modal"
              >
                Discard
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!content}
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
