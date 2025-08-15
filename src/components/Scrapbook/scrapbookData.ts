export interface ScrapbookItemType {
  id: number;
  src: string;
  alt: string;
  message: string;
  x: number; // position from left
  y: number; // position from top
  rotate: number; // rotation in degrees
}

export const scrapbookItems: ScrapbookItemType[] = [
  {
    id: 1,
    src: "/images/ExpressJS-logo.png",
    alt: "ExpressJS",
    message: "Fast, unopinionated, minimalist web framework.",
    x: 40,
    y: 60,
    rotate: -5
  },
  {
    id: 2,
    src: "/images/node-js.png",
    alt: "Node.js",
    message: "JavaScript runtime built on Chrome's V8.",
    x: 200,
    y: 120,
    rotate: 4
  },
  {
    id: 3,
    src: "/images/react.png",
    alt: "React",
    message: "Library for building user interfaces.",
    x: 360,
    y: 80,
    rotate: -3
  },
  {
    id: 4,
    src: "/images/images-removebg-preview.png",
    alt: "Git",
    message: "Version control system.",
    x: 520,
    y: 140,
    rotate: 6
  }
];
