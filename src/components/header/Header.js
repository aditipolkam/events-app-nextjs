import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image src={"/qrate.png"} width={50} height={50} alt={"logo"} />

          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
