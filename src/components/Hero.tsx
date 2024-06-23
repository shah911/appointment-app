import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const enter = {
  initial: { clipPath: "inset(0 0 100% 0)", scale: 1.1 },
  animate: {
    clipPath: "inset(0)",
    scale: 1,
    transition: {
      type: "tween",
      duration: 1.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const translate = {
  initial: { opacity: 0, y: "100%" },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      type: "tween",
      ease: [0, 0.55, 0.45, 1],
      delay: 1,
      duration: 0.75,
    },
  },
};

const bg = {
  initial: { clipPath: "inset(0 100% 0 0)" },
  animate: {
    clipPath: "inset(0 0 0 0)",
    transition: {
      type: "tween",
      delay: 1,
      duration: 1,
      ease: [0.37, 0, 0.63, 1],
    },
  },
};

function Hero() {
  return (
    <div className="bg-[#FAF7F2] overflow-hidden">
      <motion.div
        variants={enter}
        initial="initial"
        animate="animate"
        className="relative h-[840px] 2xl:h-[150vh] w-full flex flex-col items-center gap-[5vw]"
      >
        <Image
          src="/pexels-leonardho-1552252.jpg"
          alt=""
          fill
          className="-z-10 object-cover"
        />
        <Navbar />
        <div className="w-[90%] h-[70%] md:h-[60%] md:w-[60%] relative flex flex-col-reverse md:flex-col items-center justify-center gap-6">
          <motion.div
            variants={translate}
            className="flex flex-col gap-10 2xl:gap-[3vw] md:absolute left-[-7.5%] top-[5%] z-10"
          >
            <h1 className="text-white capitalize w-fit leading-[100%] tracking-tight text-center md:text-left text-[12vw] md:text-[8vw] lg:text-[6vw] font-medium">
              Train <br /> to <br /> failure
            </h1>
            <Link
              href="/appointments"
              className="w-fit 2xl:text-[1.25vw] 2xl:py-[0.75vw] 2xl:px-[1.5vw] font-medium bg-transparent px-6 py-3 border border-white uppercase text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              book a session
            </Link>
          </motion.div>
          <motion.video
            variants={bg}
            className="h-full w-full object-cover bg-black"
            autoPlay
            loop
            muted
            src="/GET TO FAILURE (gym edit).mp4"
          ></motion.video>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
