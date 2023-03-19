import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <nav>
        <Image></Image>
        <Link href="/" passHref>
          Home
        </Link>
        <Link href="/events" passHref>
          Events
        </Link>
        <Link href="/about" passHref>
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
