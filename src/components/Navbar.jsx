import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar-nav">
      <ul>
        <li className="nav-item">
          <Link className="nav-link text-sm md:text-xl" href="./">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-sm md:text-xl" href="../events">
            Events
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-sm md:text-xl" href="../about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-sm md:text-xl" href="../contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
