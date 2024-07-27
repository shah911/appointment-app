import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const img = {
  initial: {
    clipPath: "inset(100% 0 0 0)",
    scale: 1.5,
  },
  animate: {
    clipPath: "inset(0 0 0 0)",
    scale: 1,
    transition: {
      type: "tween",
      duration: 1.25,
      ease: [0.37, 0, 0.63, 1],
    },
  },
};

const bg = {
  initial: { top: "100%" },
  animate: {
    top: "-100%",
    transition: {
      type: "tween",
      duration: 1.25,
      ease: [0.37, 0, 0.63, 1],
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
      delay: 1.25,
      duration: 0.75,
    },
  },
};

function Train() {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });
  return (
    <div
      ref={container}
      className="relative bg-[#FAF7F2] h-[600px] 2xl:h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        variants={bg}
        initial="initial"
        animate={isInView && "animate"}
        className="z-10 absolute top-0 left-0 bg-black h-full w-full"
      ></motion.div>
      <motion.div
        variants={img}
        initial="initial"
        animate={isInView && "animate"}
        className="absolute h-full w-full"
      >
        <Image
          src="/dark gym.jpg"
          alt="gym interior"
          priority={true}
          fill
          className="object-cover"
        />
      </motion.div>
      <div className="z-10 text-white h-[75%] w-[75%] flex flex-col md:flex-row items-center justify-center">
        <div className="flex-[3] h-full flex items-center justify-center">
          <motion.p
            variants={translate}
            initial="initial"
            animate={isInView && "animate"}
            className="font-bold uppercase text-[7vw] md:text-[4vw] leading-[100%] tracking-tight"
          >
            The body achieves what the mind believes
          </motion.p>
        </div>
        <motion.div
          variants={translate}
          initial="initial"
          animate={isInView && "animate"}
          className="flex-[2] h-full flex flex-col gap-10 lg:gap-[5vw] items-center justify-center"
        >
          <p className="font-normal md:text-[1.5vw] lg:text-[1.15vw]">
            Unlock your best self with a personalized diet and training program
            crafted by certified dietitians and personal trainers. With expert
            guidance tailored to your unique needs, you will achieve your health
            and fitness goals faster and more effectively.
          </p>
          <Link
            href="https://squareup.com/appointments/book/ivkxn79kvn511x/LYKZSXD5KSSQ9/start"
            className="flex items-center justify-center w-full 2xl:text-[1.25vw] 2xl:py-[0.75vw] 2xl:px-[1.5vw] font-medium bg-transparent px-6 py-3 border border-white uppercase text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            learn more
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Train;
