"use client";
import Link from "next/link";
import Links from "./Links";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
      <div className="container-fluid px-0 pt-2">
        <Link className="navbar-brand ms-3" href="/">
          Blob
        </Link>
        <button
          class="navbar-toggler me-3"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end linksDiv"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Blob
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body justify-content-end">
            <Links />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
