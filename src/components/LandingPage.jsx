import { motion } from "framer-motion";
import React from "react";
import { useRef } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { GiDuration } from "react-icons/gi";

function LandingPage() {
  const constraintsRef = useRef(null);
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      data-scroll-section
      className="w-full h-screen bg-zinc-900 p-1 font-primaryregular"
    >
      <div className="textstructure mt-32 px-16">
        <div className="masker font-primarysemi">
          <div className="w-fit flex items-center">
            <h1 className="uppercase leading-[7vw] text-[138px]">WE CREATE</h1>
          </div>
        </div>
        <div className="masker font-primarysemi">
          <div className="w-fit flex items-center">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "9.3vw", opacity: 1 }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            >
              <motion.div
                ref={constraintsRef}
                drag
                dragConstraints={constraintsRef}
                className="w-[9.3vw] h-[5.7vw] bg rounded-lg mt-4 mr-5 bg-[url('ochia.png')] bg-cover"
              />
            </motion.div>
            <h1 className="uppercase leading-[7vw] ml-3 text-[138px]">
              EYE-OPENING
            </h1>
          </div>
        </div>
        <div className="masker font-primarysemi">
          <div className="w-fit flex items-center">
            <h1 className="uppercase leading-[7vw] text-[138px]">
              PRESENTATIONS
            </h1>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-2 px-16">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight text-zinc-200 leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className=" px-6 py-1 border-[0.3px] border-zinc-500 font-light rounded-full mt-2">
            START THE PROJECT
          </div>
          <div className="mt-1 w-9 h-9 rounded-full border-[0.3px] border-zinc-500 flex items-center justify-center">
            <span className="rotate-[45deg] font-light">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <center className="text-base text-zinc-400 opacity-[30%] animate-bounce">
        Scroll Down
      </center>
    </div>
  );
}

export default LandingPage;
