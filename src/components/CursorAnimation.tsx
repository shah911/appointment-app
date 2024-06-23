import { useFollowPointer } from "@/components/hook";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Cursor() {
  const [enter, setEnter] = useState(false);
  return (
    <div
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      Hello world
      <AnimatePresence>{enter && <FollowPointer />}</AnimatePresence>
    </div>
  );
}

const FollowPointer = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="bg-black w-20 h-20 absolute rounded-full"
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    />
  );
};
