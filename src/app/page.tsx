import Image from "next/image";
import Scrapbook from "@/components/Scrapbook/Scrapbook";

const stickers= [
    {
      src: "/images/ExpressJS-logo.png",
      alt: "Camper",
      message: "I love camping!",
      x: 380,
      y: 60,
      rotate: -4,
    },
    {
      src: "/images/images-removebg-preview.png",
      alt: "C3 Dev Fest",
      message: "Spoke at C3 Dev Fest!",
      x: 550,
      y: 60,
      rotate: 3,
    },
    {
      src: "/images/node-js.png",
      alt: "Lord of the Rings",
      message: "My favorite movie",
      x: 900,
      y: 15,
      rotate: -2,
    },
    {
      src: "/images/react.png",
      alt: "Commit 24",
      message: "Code all day!",
      x: 670,
      y: 25,
      rotate: 5,
    },
];
export default function Home() {
  return (
    <>
 <Scrapbook stickers={stickers} />    </>
  );
}
