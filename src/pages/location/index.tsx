import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Train from "@/components/Train";

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
      duration: 0.75,
    },
  },
};

function Location() {
  const container = useRef(null);
  const isInView = useInView(container, { once: true, margin: "50%" });
  return (
    <>
      <div className="w-full bg-black relative">
        <Navbar />
      </div>
      <div className="mx-auto w-[90%] my-10 2xl:my-[3vw] overflow-hidden">
        <Link
          target="_blank"
          href="https://www.google.com/maps/place/Gym-ON+EMS+Dubai/@25.0967358,55.1668824,712m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3e5f6b5b2278b101:0xaa4446cde79e74bf!8m2!3d25.096731!4d55.1694573!16s%2Fg%2F11fhr05mm7?hl=en-US&entry=ttu"
        >
          <div
            ref={container}
            className="relative w-full h-[400px] 2xl:h-[65vh] overflow-hidden"
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
              className="relative h-full w-full"
            >
              <Image
                src="/dummy gym location.PNG"
                alt=""
                priority={true}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </Link>
        <motion.p
          variants={translate}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="lg:text-[1.5vw] font-medium mt-5 2xl:mt-[2vw]"
        >
          Unlock your potential at our state-of-the-art gym! Imagine stepping
          into a place where your fitness goals are our top priority. With
          personalized programs, expert trainers, and a supportive community,
          you will feel motivated and empowered every step of the way. Ready to
          transform your health and boost your confidence? Join us today your
          best self is just a workout away!
        </motion.p>
      </div>
      <Train />
    </>
  );
}

export default Location;
