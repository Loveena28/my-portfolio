"use client";
import React, { useRef } from "react";
import { motion,useInView } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
          <div className="py-8 px-4 sm:py-16 xl:px-16 mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            Hi there! I&apos;m Loveena Ramchandani, a versatile software
            developer specializing in <b>Python, Angular, .NET, NextJS, and
            database management with PostgreSQL and MySQL</b>. With a solid
            foundation in <b>Google Cloud Platform (GCP)</b>, I&apos;m passionate about
            leveraging technology to solve complex problems and drive
            innovation. From building scalable web applications to optimizing
            database performance, I thrive on challenges that push the
            boundaries of what&apos;s possible. With a focus on clean code and
            user-centric design, I&apos;m committed to delivering solutions that
            exceed expectations and drive tangible results. Let&apos;s
            collaborate and turn ideas into reality!
          </p>
      </div>
    </section>
  );
};

export default AboutSection;
