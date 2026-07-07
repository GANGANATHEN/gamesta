"use client";

import { useEffect } from "react";
import { initLenis, destroyLenis } from "@/lib/lenis/lenis";

export default function ScrollWrapper({ children }) {
  useEffect(() => {
    initLenis();

    return () => destroyLenis();
  }, []);

  return children;
}