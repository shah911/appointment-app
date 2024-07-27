import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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

type Props = {
  data: {
    tag: string;
    name: string;
    img: string;
    description: string;
  };
};

function Card({ data }: Props) {
  const container = useRef(null);
  const isInView = useInView(container, { once: true });
  return (
    <div className="w-[90%] mx-auto">
      <div className="h-[700px] md:h-auto flex flex-col md:flex-row items-center justify-center overflow-hidden gap-6 2xl:gap-[2vw] my-20 2xl:my-[5vw]">
        <div
          ref={container}
          className="flex-[2] h-[400px] 2xl:h-[70vh] flex items-center justify-center overflow-hidden"
        >
          <motion.div
            variants={img}
            initial="initial"
            animate={isInView && "animate"}
            className="relative w-[90vw] md:w-full h-full"
          >
            <motion.div
              variants={bg}
              initial="initial"
              animate={isInView && "animate"}
              className="z-10 absolute top-0 left-0 bg-black h-full w-full"
            ></motion.div>
            <Image
              src={data.img}
              alt={data.name}
              priority={true}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        <motion.div
          variants={translate}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex-[3] h-[350px] 2xl:h-[60vh] flex flex-col gap-8 2xl:gap-[2.5vw] items-center md:items-end justify-center"
        >
          <h3 className="font-[400] text-xl w-[100%] md:w-[85%] 2xl:text-[1.35vw]">
            {data.tag}
          </h3>
          <h1 className="w-[100%] md:w-[85%] font-[600] text-4xl md:text-[4vw] leading-[100%] tracking-tight">
            {data.name}
          </h1>
          <p className="text-sm w-[100%] md:w-[85%] font-medium 2xl:text-[1vw] 2xl:leading-[150%]">
            {data.description}
          </p>
          {/* <Link
            target="_blank"
            className="w-fit 2xl:text-[1.25vw] 2xl:py-[0.75vw] 2xl:px-[1.5vw] font-medium bg-transparent px-6 py-3 border border-black uppercase transition-colors duration-300 hover:bg-black hover:text-white"
            href="https://squareup.com/appointments/book/ivkxn79kvn511x/LYKZSXD5KSSQ9/start"
          >
            Book Now
          </Link> */}
        </motion.div>
      </div>
    </div>
  );
}

export default Card;
