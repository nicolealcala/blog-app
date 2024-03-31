import { getUser } from "@/lib/data";
import Image from "next/image";
import { options } from "@/lib/utils";

const Author = async ({ userId, date }) => {
  // FETCH DATA WITHOUT API
  const user = await getUser(userId);
  console.log(userId);

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
          src={user?.img}
          alt="Author Image"
          fill
          sizes="100vw"
          className="img-cover"
        />
      </div>
      <div className="col-8 d-flex flex-column justify-content-center">
        <h6 className="txt-weight-mid">{user?.username}</h6>
        <p className="txt-color-soft txt-size-small my-0">
          {new Date(date).toLocaleDateString("en-US", options)}
        </p>
      </div>
    </div>
  );
};

export default Author;
