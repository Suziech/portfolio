"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import me_image from "@/assets/images/suzie_image.png";
import { useResponsiveSize } from "@/utils/hooks/useResponsiveSize";

export default function Main() {
  const windowSize = useResponsiveSize();
  const lines = useMemo(
    () => [
      "Seulki Choi",
      "(a.k.a Suzie)",
      "Frontend Developer",
      "I enjoy turning ideas into elegant, responsive interfaces.",
    ],
    []
  );

  // 💡 useMemo - This way, the array won't be recreated every time the component re-renders; it will wonly be created once. using useMemo is a good habit to keep the code more stable and prevent unnecessary re-renders or effect executions as the code grows

  const [currentLine, setCurrentLine] = useState(0);
  const [displayedTexts, setDisplayedTexts] = useState(["", "", ""]);
  const [showCursor, setShowCursor] = useState(true); // 👈 커서 표시 여부
  const speed = 50;

  const iRef = useRef(0);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cursorIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    iRef.current = 0;

    const typeLine = () => {
      const line = lines[currentLine];
      if (iRef.current < line.length) {
        const char = line.charAt(iRef.current); // 안전하게 가져오기
        setDisplayedTexts((prev) => {
          const updated = [...prev];
          updated[currentLine] = (updated[currentLine] || "") + char;
          return updated;
        });
        iRef.current++;
        typingTimeoutRef.current = setTimeout(typeLine, speed);
      } else if (currentLine < lines.length - 1) {
        setTimeout(() => setCurrentLine((prev) => prev + 1), 1000);
      }
    };

    typeLine();

    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, [currentLine, lines]);

  useEffect(() => {
    cursorIntervalRef.current = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      if (cursorIntervalRef.current) clearInterval(cursorIntervalRef.current);
    };
  }, []);

  // 👇 커서 추가된 텍스트
  const renderTextWithCursor = (index: number) => {
    return currentLine === index
      ? displayedTexts[index] + (showCursor ? "|" : "\u00A0")
      : displayedTexts[index];
  };

  return (
    <div
      id='main'
      className={`flex min-h-screen bg-[#002f7b] ${
        windowSize === "mobile"
          ? "flex-col items-center justify-around"
          : "items-center justify-around"
      }`}>
      <div
        className={`flex flex-col border ${
          windowSize === "mobile" ? "w-full items-center" : "w-[60%] h-[500px]"
        }`}>
        <div
          className={`font-bold flex ${
            windowSize === "mobile" ? "text-[30px]" : "text-[100px]"
          }`}>
          {renderTextWithCursor(0)}
        </div>
        <div
          className={`${
            windowSize === "mobile" ? "text-[20px]" : "text-[50px]"
          }`}>
          {renderTextWithCursor(1)}
        </div>
        <div
          className={`${
            windowSize === "mobile" ? "text-[10px]" : "text-[40px]"
          }`}>
          {renderTextWithCursor(2)}
        </div>
        <div
          className={`${
            windowSize === "mobile" ? "text-[10px]" : "text-[40px]"
          }`}>
          {renderTextWithCursor(3)}
        </div>
      </div>
      <Image
        src={me_image}
        alt='me_image'
        width={500}
        height={500}
        className='rounded-2xl p-10'
      />
    </div>
  );
}
