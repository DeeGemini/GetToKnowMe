import Link from "next/link"
import React from "react";

const Header = () => {
  return (
    <header className="glass text-primary-foreground py-4 sticky top-0 z-10">
      <nav className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:underline">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/resume" className="hover:underline">
              Resume
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:underline">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
