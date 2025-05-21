"use client";

import { useState, useRef, useEffect } from "react";
import {
  useParams,
  useRouter,
  useSelectedLayoutSegments,
} from "next/navigation";
import { GrLanguage } from "react-icons/gr";

export default function ChangeLocale() {
  const router = useRouter();
  const params = useParams();
  const urlSegments = useSelectedLayoutSegments();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLocaleChange = (newLocale: string) => {
    const updatedSegments = urlSegments.filter(
      (segment) => segment !== params.locale
    );
    router.push(`/${newLocale}/${updatedSegments.join("/")}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      onClick={() => setIsOpen(!isOpen)}
      className='cursor-pointer'>
      <GrLanguage className='text-[#002f7b]' size={40} />
      {isOpen && (
        <div className='absolute top-25 right-0 bg-white shadow-md text-black flex flex-col gap-2 p-5 rounded-md'>
          <button
            className='cursor-pointer text-left'
            onClick={() => handleLocaleChange("en")}>
            🇬🇧 English
          </button>
          <button
            className='cursor-pointer text-left'
            onClick={() => handleLocaleChange("fr")}>
            🇫🇷 Français
          </button>
          <button
            className='cursor-pointer text-left'
            onClick={() => handleLocaleChange("ko")}>
            🇰🇷 한국어
          </button>
        </div>
      )}
    </div>
  );
}
