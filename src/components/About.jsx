import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.11"
      className="w-full py-20 bg-[#CDEA68] rounded-t-2xl text-black font-primaryregular px-16 tracking-tight font-light"
    >
      <h1 className="text-[3.625vw] leading-none">
        Ochi is a strategic partner for fast-growing tech <br /> businesses that
        need to{" "}
        <span className="relative after:bg-black after:absolute after:h-[3px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          raise funds
        </span>{" "}
        ,{" "}
        <span className="relative after:bg-black after:absolute after:h-[3px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          sell products
        </span>
        , <br />{" "}
        <span className="relative after:bg-black after:absolute after:h-[3px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          exlain complex ideas
        </span>
        , and{" "}
        <span className="relative after:bg-black after:absolute after:h-[3px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          hire great people.
        </span>
      </h1>
      <div className="w-full border-t-[2px] mt-20 flex gap-5 bg-[#CDEA68] border-[#99AD53]">
        <div className="w-1/2">
          <h1 className="text-6xl mt-6 ">Our approach:</h1>
          <button class="group relative mt-6 cursor-pointer uppercase overflow-hidden rounded-full border-2 border-zinc-800 px-9 text-white py-2 font-mono font-semibold">
            <span class="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
            <span class="ease relative text-black transition duration-300 group-hover:text-white">
              read more
            </span>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] mt-5 rounded-xl">
          <img
            className=" relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
