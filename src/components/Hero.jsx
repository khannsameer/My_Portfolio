import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "../components/canvas";
import Typewriter from "typewriter-effect";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Text Content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1
            className={`${styles.heroHeadText} text-white flex flex-wrap items-center`}
          >
            Hi, I'm{" "}
            <span className="text-[#915eff] ml-2 inline-block">
              <Typewriter
                options={{
                  strings: [
                    "Sameer",
                    "Frontend Developer",
                    "React Developer",
                    "UI/UX Designer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-1 text-white-100`}>
            Frontend Developer | Crafting seamless, user
            <br className="sm:block hidden" />
            first web experiences with React and modern tech.
            <br className="sm:block hidden" /> Passionate about performance,
            design, and accessibility.
          </p>
        </div>
      </div>

      {/* 3D Model Canvas (put behind text) */}
      {/* <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div> */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-[5%] w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[60px] max-w-[45px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gray-200 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
