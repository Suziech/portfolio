"use client";

import { useEffect, useState } from "react";
import throttle from "lodash.throttle";

export type ScreenSize = "mobile" | "tablet" | "desktop" | "wide";

export function useResponsiveSize(throttleDelay = 200): ScreenSize {
  const [size, setSize] = useState<ScreenSize>("mobile");

  useEffect(() => {
    const handleResize = throttle(() => {
      const width = window.innerWidth;
      if (width < 700) setSize("mobile");
      else if (width < 1440) setSize("tablet");
      else if (width < 1920) setSize("desktop");
      else setSize("wide");
    }, throttleDelay);

    // initial execution
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel(); // important!
    };
  }, [throttleDelay]);
  return size;
}
