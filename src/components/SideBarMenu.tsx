import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const qoute =
  "The first rule of success is to have a vision. If you have no goal or vision, you drift around and you won't end up anywhere.";
const itemC = ["1", "2"];

const data = [
  {
    id: "01",
    title: "Training Session",
    link: "/appointments",
  },
  {
    id: "02",
    title: "Diet Consultation",
    link: "/appointments",
  },
  {
    id: "03",
    title: "Gym Tour",
    link: "/appointments",
  },
  {
    id: "04",
    title: "location",
    link: "/location",
  },
];

const translate = {
  initial: { opacity: 0, y: "100%" },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      type: "tween",
      ease: [0, 0.55, 0.45, 1],
      delay: 0.75,
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: {
      type: "tween",
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const bg = {
  initial: { clipPath: "inset(0 0 0 100%)" },
  animate: {
    clipPath: "inset(0 0 0 0)",
    transition: { type: "tween", duration: 1, ease: [0.37, 0, 0.63, 1] },
  },
  exit: {
    clipPath: "inset(0 0 0 100%)",
    transition: { type: "tween", duration: 1, ease: [0.61, 1, 0.88, 1] },
  },
};

const points = {
  initial: { opacity: 0, y: "100%" },
  animate: (i: number) => ({
    opacity: 1,
    y: "0%",
    transition: {
      type: "tween",
      ease: [0, 0.55, 0.45, 1],
      delay: 0.75 + 0.05 * i,
      duration: 0.75,
    },
  }),
  exit: {
    opacity: 0,
    y: "100%",
    transition: {
      type: "tween",
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const img = {
  initial: { top: "0%" },
  animate: {
    opacity: 1,
    top: "100%",
    transition: {
      type: "tween",
      ease: [0, 0.55, 0.45, 1],
      delay: 0.75,
      duration: 0.75,
    },
  },
  exit: {
    top: "0%",
    transition: {
      type: "tween",
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const menuClosed = {
  initial: { clipPath: "inset(0 100% 0 0)" },
  animate: (i: number) => ({
    clipPath: "inset(0 0 0 0)",
    transition: {
      duration: 0.5,
      delay: 0.5 + 0.05 * i,
    },
  }),
  exit: (i: number) => ({
    clipPath: "inset(0 100% 0 0)",
    transition: { duration: 0.75, delay: 0.05 * i },
  }),
};

function SideBarMenu({ open, setOpen }: Props) {
  useEffect(() => {
    if (open) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);
  return (
    <motion.div
      variants={bg}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center justify-center z-30 h-screen w-full absolute top-0 right-0 bg-black"
    >
      <div className="h-[146px] lg:h-[165px] 2xl:h-[22.5%] w-full">
        <div className="mx-auto h-[100%] w-[90vw] lg:w-[80vw] flex items-center justify-center">
          <div className="flex-[1] flex items-center justify-end gap-[5vw] lg:gap-[3vw]">
            <div
              onClick={() => setOpen(!open)}
              className="h-[40px] 2xl:h-[3vw] flex flex-col items-center justify-center cursor-pointer"
            >
              {open &&
                itemC.map((_, i) => (
                  <motion.span
                    variants={menuClosed}
                    custom={i}
                    key={i}
                    className="w-[40px] h-[2px] 2xl:w-[3vw] 2xl:h-[0.2vw] bg-white even:rotate-45 odd:-rotate-45 even:-translate-y-[2px] 2xl:even:translate-y-[0.01vw] odd:-translate-y-[1px] 2xl:odd:translate-y-[0.1vw]"
                  ></motion.span>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-full 2xl:h-[77.5%] w-full">
        <div className="flex-[1] h-[454px] lg:h-[435px] 2xl:h-full flex flex-col items-center lg:items-end justify-evenly text-white">
          {data.map((item, i) => (
            <motion.div
              variants={points}
              custom={i}
              className="flex gap-4 w-[75%] lg:w-[50%] 2xl:gap-[1vw]"
              key={item.id}
            >
              <span className="2xl:text-[1.25vw]">{item.id}</span>
              <Link
                href={item.link}
                className="uppercase font-medium text-2xl lg:text-[2vw]"
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="hidden flex-[1] h-[454px] lg:h-[435px] 2xl:h-full md:flex flex-col items-center justify-evenly text-white">
          <div className="w-[75%] lg:w-[50%] h-[70%] relative overflow-hidden">
            <Image
              src="/arnold curling.jpg"
              alt="arnold"
              fill
              className="object-cover rounded-md 2xl:rounded-[0.375vw]"
            />
            <motion.div
              variants={img}
              className="w-full h-full bg-black absolute top-0"
            ></motion.div>
          </div>

          <motion.p
            variants={translate}
            className="w-[90%] text-center font-light 2xl:text-[1.25vw]"
          >
            {qoute}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default SideBarMenu;
