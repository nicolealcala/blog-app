import PostCard from "@/components/postCard/PostCard";

const Blogs = () => {
  return (
    <div className="row mx-0">
      <div className="col-md-6 col-lg-4">
        <PostCard />
      </div>
      <div className="col-md-6 col-lg-4">
        <PostCard />
      </div>
      <div className="col-md-6 col-lg-4">
        <PostCard />
      </div>
    </div>
  );
};

export default Blogs;
