import { getUser } from "@/lib/data";
import Image from "next/image";

const Author = async ({ userId }) => {
  // FETCH DATA WITHOUT API
  const user = await getUser(userId);

  return (
    <div className="row mx-0 mt-3 w-100 d-flex align-items-center">
      <div
        style={{
          position: "relative",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          overflow: "hidden",
          marginRight: "10px",
        }}
      >
        <Image
          src={user.img ? user.img : "/noavatar.png"}
          alt="Author Image"
          fill
          sizes="100vw"
          className="img-cover"
        />
      </div>
      <div className="col-8 d-flex flex-column justify-content-center">
        <h6 className="txt-weight-mid">{user.username}</h6>
        <p className="txt-color-soft txt-size-small my-0">March 24, 2024</p>
      </div>
    </div>
  );
};

export default Author;