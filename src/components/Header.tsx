"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0); // the position of prev scroll

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        //when scrolling down
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 bg-[#b1ff87] z-10 shadow-md transition-transform duration-300 ${
        showHeader ? "transform-none" : "-translate-y-full"
      }`}>
      <div className='flex justify-around text-[#002f7b]'>
        <Link to='main' smooth={true} duration={500}>
          Main
        </Link>
        <Link to='aboutMe' smooth={true} duration={500}>
          About Me
        </Link>
        <Link to='experience' smooth={true} duration={500}>
          Experence
        </Link>
        <Link to='certification' smooth={true} duration={500}>
          Certification
        </Link>
        <Link to='projects' smooth={true} duration={500}>
          Projects
        </Link>
        <Link to='contact' smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </header>
  );
}
