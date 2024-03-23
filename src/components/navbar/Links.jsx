import Link from "next/link";
import NavLink from "./NavLink";
import "./navbar.css";

const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
  { path: "/blogs", title: "Blogs" },
];

const Links = () => {
  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <>
      {links.map((link) => (
        <NavLink item={link} key={link.path} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ path: "/admin", title: "Admin" }} />}
          <hr className="d-lg-none" />
          <NavLink item={{ path: "/login", title: "Log out" }} />
        </>
      ) : (
        <>
          <NavLink item={{ path: "/login", title: "Log in" }} />
        </>
      )}
    </>
  );
};

export default Links;
