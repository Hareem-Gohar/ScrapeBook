"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ScrapbookItemType } from "./scrapbookData";

interface Props {
    item: ScrapbookItemType;
    containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function ScrapbookItem({ item, containerRef }: Props) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            className="absolute flex flex-col items-center select-none"
            drag
            dragConstraints={containerRef}
            dragElastic={0.15}
            dragMomentum={false}
            dragSnapToOrigin
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            style={{
                left: item.x,
                top: item.y,
                rotate: item.rotate,
                cursor: "grab",
            }}
        >
            <div>
                <Image
                    src={item.src}
                    alt={item.alt}
                    width={120}
                    height={120}
                    style={{
                        border: "6px solid white",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                        backgroundColor: "white",
                    }}
                />
            </div>

            {hovered && (
                <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="absolute top-[calc(100%+8px)] p-2 text-sm bg-black text-white rounded shadow-md whitespace-nowrap z-10"
                >
                    {item.message}
                </motion.div>
            )}
        </motion.div>
    );
}
