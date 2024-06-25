import { motion } from "framer-motion";
import { Power4 } from "gsap";
import React, { useState } from "react";

function Featured() {
  const [hovering, setHovering] = useState(false);
  return (
    <div
    data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full py-16 font-primaryregular"
    >
      <div className="w-full px-14 border-b-[1px] pb-14 border-zinc-500">
        <h1 className="text-5xl mt-8 tracking-wider">Featured projects</h1>
      </div>
      <div className="flex justify-between">
        <div className="flex mb-5">
          <div className="h-3 w-3 rounded-full bg-zinc-100 ml-20 mt-16"></div>
          <h1 className="mt-[3.8vw] ml-4">FYDE</h1>
        </div>
        <div className="flex mb-5 ml-3">
          <div className="h-3 w-3 rounded-full bg-zinc-100 ml-14 mt-16"></div>
          <h1 className="mt-[3.8vw] ml-4">VISE</h1>
        </div>
        <div className="flex mb-5">
          <div className="h-3 w-3 rounded-full bg-zinc-900 ml-14 mt-16"></div>
          <h1 className="mt-[3.8vw] ml-4"></h1>
        </div>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <div className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] font-primarysemi text-9xl leading-none">
              <div className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] font-primarysemi text-9xl leading-none">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={hovering ? { y: "0" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="card w-full h-full rounded-xl">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
                className="w-full h-full bg-cover rounded-xl"
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[80vh]">
            <div className="card w-full h-full rounded-xl">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
                className="w-full h-full bg-cover rounded-xl invert"
              />
            </div>
            <div className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] font-primarysemi text-9xl leading-none">
              <div className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] font-primarysemi text-9xl leading-none">
                {"".split("").map((item, index) => (
                  <motion.span className="inline-block">{item}</motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
