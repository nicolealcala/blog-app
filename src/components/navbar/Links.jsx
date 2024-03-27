import NavLink from "./NavLink";
import { logout } from "@/lib/actions";
import "./navbar.css";
import { auth } from "@/lib/auth";

const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
  { path: "/blogs", title: "Blogs" },
];

const Links = async () => {
  // TEMPORARY
  const session = await auth();
  const isAdmin = true;

  return (
    <>
      {links.map((link) => (
        <NavLink item={link} key={link.path} />
      ))}

      {session?.user ? (
        <>
          {session.user?.isAdmin && (
            <NavLink item={{ path: "/admin", title: "Admin" }} />
          )}

          <hr className="d-lg-none" />

          <form action={logout}>
            <button id="logOut" className="txt-weight-mid">
              Log out
            </button>
          </form>
        </>
      ) : (
        <>
          <hr className="d-lg-none" />
          <NavLink item={{ path: "/login", title: "Log in" }} />
        </>
      )}
    </>
  );
};

export default Links;
