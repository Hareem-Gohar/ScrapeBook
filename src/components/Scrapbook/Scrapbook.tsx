"use client";

import { useRef } from "react";
import ScrapbookItem from "./ScrapbookItem";
import { scrapbookItems } from "./scrapbookData";

export default function Scrapbook() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] overflow-hidden rounded-xl border border-gray-200"
      style={{
        backgroundImage:
          "radial-gradient(#d1d5db 1px, transparent 1px), linear-gradient(#fafafa, #fff)",
        backgroundSize: "20px 20px, 100% 100%",
      }}
    >
      {scrapbookItems.map((item) => (
        <ScrapbookItem key={item.id} item={item} containerRef={containerRef } />
      ))}
    </div>
  );
}
