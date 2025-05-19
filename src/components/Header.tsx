"use client";

import { useState, useEffect, useRef } from "react";
import { useResponsiveSize } from "@/utils/hooks/useResponsiveSize";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLinks from "./NavLinks";

export default function Header() {
  const windowSize = useResponsiveSize();
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
      className={`sticky top-0 bg-[#b1ff87] z-10 shadow-md transition-transform duration-300 p-[30px] text-[30px] font-bold cursor-pointer ${
        showHeader ? "transform-none" : "-translate-y-full"
      }`}>
      {windowSize === "mobile" ? (
        // <div className='min-h-screen text-[#002f7b]'>
        //   <NavLinks />
        // </div>
        <RxHamburgerMenu className='text-black w-6 h-6' />
      ) : (
        <div className='flex justify-around text-[#002f7b]'>
          <NavLinks />
        </div>
      )}
    </header>
  );
}
