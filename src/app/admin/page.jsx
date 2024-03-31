import { addBlog } from "@/lib/actions";

export const metadata = {
  title: "Admin",
  description: "DreamLabs admin page",
};

const Admin = () => {
  return (
    <div>
      <form action={addBlog}>
        <input type="text" name="title" />
        <input type="text" name="content" />
        <input type="text" name="slug" />
        <input type="file" name="img" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Admin;
