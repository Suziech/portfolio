"use client";

import { useState, useEffect, useRef } from "react";
import { useResponsiveSize } from "@/utils/hooks/useResponsiveSize";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLinks from "./NavLinks";
import ChangeLocale from "./ChangeLocale";

export default function Header() {
  const windowSize = useResponsiveSize();
  const [showHeader, setShowHeader] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`sticky top-0 bg-[#b1ff87] z-10 shadow-md transition-transform duration-300 text-[30px] font-bold ${
        showHeader ? "transform-none" : "-translate-y-full"
      } ${windowSize === "mobile" ? "p-[15px]" : "p-[30px]"}`}>
      <div className='flex justify-between items-center'>
        {windowSize === "mobile" ? (
          <RxHamburgerMenu
            className='text-black w-6 h-6 cursor-pointer'
            onClick={toggleMenu}
          />
        ) : (
          <div className='flex justify-around w-full text-[#002f7b]'>
            <NavLinks />
          </div>
        )}
        <ChangeLocale />
      </div>
      {windowSize === "mobile" && isMenuOpen && (
        <div className='h-lvh flex flex-col text-[#002f7b] pt-[100px]'>
          <NavLinks />
        </div>
      )}
    </header>
  );
}
