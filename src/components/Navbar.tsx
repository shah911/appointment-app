import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      className="mx-auto text-white h-[122px] 2xl:h-[22.5vh] w-[90vw] lg:w-[80vw] flex items-center justify-center"
    >
      <div className="flex-[1] flex items-center">
        <Link
          className="z-40 uppercase text-[8vw] md:text-[5vw] lg:text-[3vw] font-medium tracking-[0.25vw] leading-[100%]"
          href="/"
        >
          Shah.
        </Link>
      </div>
      <div className="flex-[1] flex items-center justify-end gap-[5vw] lg:gap-[3vw]">
        <Menu />
      </div>
    </motion.div>
  );
}

export default Navbar;
