"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ScrapbookItemType } from "./scrapbookData";

interface Props {
  item: ScrapbookItemType;
}

export default function ScrapbookItem({ item }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col items-center"
      drag
      dragSnapToOrigin
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        rotate: Math.random() * 10 - 5 // random slight tilt
      }}
    >
      <div className="sticker-wrapper cursor-grab">
        <Image
          src={item.src}
          alt={item.alt}
          width={120}
          height={120}
          className="sticker-img"
        />
      </div>

      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full mt-2 p-2 text-sm bg-black text-white rounded shadow-md whitespace-nowrap z-10"
        >
          {item.message}
        </motion.div>
      )}
    </motion.div>
  );
}
