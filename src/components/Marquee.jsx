import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-sectioin
      data-scroll-speed=".005"
      className="w-full py-20 bg-[#004D43] rounded-t-3xl"
    >
      <div className="text border-t-2 border-b-2 border-[#437C74] flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[29vw] font-bold leading-none uppercase font-primarysemi pr-10 -mb-9 -mt-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[29vw] font-bold leading-none uppercase font-primarysemi pr-10 -mb-9 -mt-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[29vw] font-bold leading-none uppercase font-primarysemi pr-10 -mb-9 -mt-20"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
