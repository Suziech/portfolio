"use client";

import { useResponsiveSize } from "@/utils/hooks/useResponsiveSize";

export default function Test() {
  const screenSize = useResponsiveSize();
  console.log("screenSize", screenSize);
  return <h1>Test</h1>;
}
