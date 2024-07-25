"use client";

import { TbPlayerPlay } from "react-icons/tb";
import { motion } from "framer-motion";
import React, { createContext } from "react";

const About = ({ Image, data }) => {
  return (
    <section className="section-width">
      <div className="md:flex">
        <motion.div
          className="w-full h-full"
          id="about"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>
            About Travel
            <br className="hidden md:block" /> Agency
          </h2>
        </motion.div>
        <motion.div
          className="w-full h-full"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
        {data.map((item, i) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-5 w-full h-full bg-gradient-to-l from-[#3a3016] to-[#2b2a2a] p-7 rounded-xl shadow-xl"
            key={i}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
            <div className="w-full">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="pt-20 relative">
        <motion.div
          className="flex items-center justify-center "
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            className="w-full rounded-3xl"
            src="/images/about-video-img.webp"
            alt=""
            width={1000}
            height={1000}
          />
        </motion.div>
        <div className="absolute flex items-center justify-center w-full  top-[50%]">
          <div className=" text-7xl ">
            <TbPlayerPlay className="bg-gradient-to-r from-[#f3cd5c] to-[#ff4b04] text-white rounded-full p-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
