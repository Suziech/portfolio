"use client";

import { useResponsiveSize } from "@/utils/hooks/useResponsiveSize";

export default function Main() {
  const screenSize = useResponsiveSize();
  console.log("screenSize", screenSize);
  return <h1 className='min-h-screen bg-blue-500'>Main</h1>;
}
