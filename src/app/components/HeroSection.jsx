"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I am Loveena.
            </div>
            <TypeAnimation
              sequence={[
                "A Software Engineer.",
                1000,
                "A Full-Stack Developer.",
                1000,
              ]}
              wrapper="div"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            repellat officiis nisi ab voluptatibus laborum molestiae ex!
            Exercitationem esse temporibus officia sint quis! Vitae illo eveniet
            rerum officia esse autem?
          </p> */}
          <div>
            <motion.button
              whileTap={{ scale: 0.85 }}
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-800 hover:bg-slate-200 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <a
                  href="/assets/Loveena Ramchandani Resume.pdf"
                  download="Loveena Ramchandani Resume.pdf"
                >
                  Download Resume
                </a>
              </span>
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative overflow-hidden rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/profile.jpeg"
              alt="porfolio image"
              width={500}
              height={500}
              className="object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
