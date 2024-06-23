import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SideBarMenu from "./SideBarMenu";
import { usePathname } from "next/navigation";

const item = ["1", "2", "3"];

const menu = {
  initial: { clipPath: "inset(0 100% 0 0)" },
  animate: (i: number) => ({
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 0.5, delay: 0.75 + 0.05 * i },
  }),
  exit: (i: number) => ({
    clipPath: "inset(0 0 0 100%)",
    transition: { duration: 0.5, delay: 0.05 * i },
  }),
};

function Menu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="relative cursor-pointer flex flex-col items-center justify-center gap-1 2xl:gap-[0.35vw]"
      >
        <AnimatePresence>
          {!open &&
            item.map((_, i) => (
              <motion.span
                variants={menu}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={i}
                key={i}
                className="w-[40px] h-[2px] 2xl:w-[3vw] 2xl:h-[0.2vw] bg-white"
              ></motion.span>
            ))}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {open && <SideBarMenu open={open} setOpen={setOpen} />}
      </AnimatePresence>
    </>
  );
}

export default Menu;
