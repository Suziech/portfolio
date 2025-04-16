"use client";

import { useState, useEffect, useRef } from "react";

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
      className={`sticky top-0 bg-white z-10 shadow-md transition-transform duration-300 ${
        showHeader ? "transform-none" : "-translate-y-full"
      }`}>
      <h1>헤더가 스크롤에 따라 나타났다가 사라집니다!</h1>
    </header>
  );
}
