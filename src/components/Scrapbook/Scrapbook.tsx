"use client";

import React from "react";
import { motion } from "framer-motion";

type StickerItem = {
  src: string;
  alt: string;
  message: string;
  x: number; // starting left position
  y: number; // starting top position
  rotate?: number;
  width?: number;
};

interface ScrapbookProps {
  stickers: StickerItem[];
}

const Sticker: React.FC<StickerItem> = ({
  src,
  alt,
  message,
  x,
  y,
  rotate = 0,
  width = 120,
}) => {
  return (
    <motion.div
      className="group absolute select-none cursor-grab active:cursor-grabbing"
      drag
      dragMomentum={false}
      dragSnapToOrigin
      whileDrag={{ scale: 1.05 }}
      style={{
        left: x,
        top: y,
        rotate: `${rotate}deg`,
        willChange: "transform",
      }}
    >
      <div className="relative inline-block">
        <img
          src={src}
          alt={alt}
          style={{
            width,
            height: "auto",
            border: "6px solid white",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
            backgroundColor: "white",
          }}
          className="pointer-events-none"
        />
        {/* Tooltip */}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-zinc-900 text-white text-xs px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {message}
        </span>
      </div>
    </motion.div>
  );
};

const Scrapbook: React.FC<ScrapbookProps> = ({ stickers }) => {
  return (
    <section className="w-full rounded-2xl border border-zinc-200 bg-white shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Scrapbook</h2>
      <div
        className="relative w-full rounded-xl overflow-hidden border border-zinc-200"
        style={{
          height: 300,
          backgroundImage:
            "radial-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(180deg, #fafaf9, #ffffff)",
          backgroundSize: "18px 18px, 100% 100%",
        }}
      >
        {stickers.map((s, i) => (
          <Sticker key={`${s.alt}-${i}`} {...s} />
        ))}
      </div>
    </section>
  );
};

export default Scrapbook;
