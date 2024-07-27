import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const bg = {
  initial: { left: "-100%" },
  animate: {
    left: "100%",
    transition: {
      type: "tween",
      duration: 1.25,
      ease: [0.37, 0, 0.63, 1],
    },
  },
};

const img = {
  initial: {
    clipPath: "inset(0 100% 0 0)",
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

const translate = {
  initial: { opacity: 0, y: "100%" },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      type: "tween",
      ease: [0, 0.55, 0.45, 1],
      duration: 0.75,
    },
  },
};

function Main() {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });
  return (
    <div className="bg-[#FAF7F2] flex flex-col items-center justify-evenly pb-20 2xl:pb-[5vw]">
      <motion.p
        variants={translate}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="my-20 2xl:my-[5vw] w-[90%] lg:w-[75%] text-center font-semibold lg:text-[1.75vw] tracking-tight"
      >
        A well built physique is a status symbol. It reflects you worked hard
        for it, no money can buy it. You cannot borrow it, you cannot inherit
        it, you cannot steal it. You cannot hold onto it without constant work.
      </motion.p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0">
        <div className="flex-[1] h-[500px] 2xl:h-[90vh] flex items-center justify-center">
          <div
            ref={container}
            className="h-[375px] lg:h-[75%] w-[90vw] md:w-[75vw] lg:w-[75%] overflow-hidden"
          >
            <motion.div
              variants={img}
              initial="initial"
              animate={isInView && "animate"}
              className="relative h-full w-full"
            >
              <motion.div
                variants={bg}
                initial="initial"
                animate={isInView && "animate"}
                className="z-10 absolute top-0 left-0 bg-black h-full w-full"
              ></motion.div>

              <Image
                src="/gym-locker-room.jpeg"
                alt="gym locker room"
                priority={true}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex-[1] h-[500px] 2xl:h-[90vh] flex items-center justify-center">
          <motion.div
            variants={translate}
            initial="initial"
            animate={isInView && "animate"}
            className="h-[375px] lg:h-[75%] w-[90%] md:w-[75%] flex flex-col justify-between"
          >
            <h1 className="font-semibold text-xl lg:text-[2vw] capitalize">
              locker rooms
            </h1>
            <p className="font-normal 2xl:text-[1.25vw]">
              The gym locker room embodies modern elegance and efficiency. Its
              spacious design and sleek lockers cater to practical storage
              needs, complemented by contemporary amenities like high-tech
              showers and comfortable seating. With minimalist decor and upscale
              finishes, it offers a stylish haven for post-workout rejuvenation.
            </p>
            <Link
              href="https://squareup.com/appointments/book/ivkxn79kvn511x/LYKZSXD5KSSQ9/start"
              className="flex items-center justify-center 2xl:text-[1.25vw] 2xl:py-[0.75vw] 2xl:px-[1.5vw] font-medium bg-transparent px-6 py-3 border border-black uppercase transition-colors duration-300 hover:bg-black hover:text-white"
            >
              book a Tour
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Main;
