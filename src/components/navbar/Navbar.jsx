"use client";
import Link from "next/link";
import Links from "./Links";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
      <div className="container-fluid px-0 pt-2">
        <Link className="navbar-brand ms-3" href="/">
          dreamlabs
        </Link>
        <button
          className="navbar-toggler me-3"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end linksDiv"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <Link href="/">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                dreamlabs
              </h5>
            </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body justify-content-end">
            <Links />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
