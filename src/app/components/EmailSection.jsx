"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const EmailSection = () => {
  const successText = "The message has been sent successfully."
  const words = successText.split(" ");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    try {
      const response = await fetch(endpoint, options);
      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const resData = await response.json();
      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        setIsLoading(false);
      }
    } catch (error) {
      alert("Error : Try resubmitting the form.");
    }
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Loveena28">
            <FaGithub size={35} color="white" />
          </Link>
          <Link href="https://www.linkedin.com/in/loveenaramchandani/">
            <FaLinkedin size={35} color="white" />
          </Link>
        </div>
      </div>
      <div>
        {isLoading ? (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        ) : (
            <div className="flex flex-col">
              {emailSubmitted ? (
                <motion.div
                  className="overflow-hidden flex text-3xl bg-gradient-to-r from-pink-500 to-blue-700"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  style={{ WebkitTextFillColor: "transparent", backgroundClip:"text",WebkitBackgroundClip:"text" }}
                >
                  {words.map((word, index) => (
                    <motion.span
                      key={index}
                      variants={child}
                      style={{
                        marginRight: "5px", animationDelay: `${index * 0.2}s`
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
              ) : (
                <form className="flex flex-col" onSubmit={handleSubmit}>

              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your name
                </label>
                <input
                  name="name"
                  type="name"
                  id="text"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Type your name here..."
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="abc@gmail.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-800 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
                </motion.button>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
