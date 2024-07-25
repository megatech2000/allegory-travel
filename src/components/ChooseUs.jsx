"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

// import required modules

import { Autoplay, Pagination } from "swiper/modules";

const ChooseUs = ({ Image, data }) => {
  return (
    <section className="section-width" id="choose">
      <div>
        <motion.div
          className="flex items-center justify-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="font-bold">Why Travelers Choose Us</h1>
        </motion.div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {data.map((item, i) => (
              <SwiperSlide key={i} className="py-10">
                <motion.div
                  className=" bg-gradient-to-r from-[#141414] to-[#1e0a03] p-5 py-20 md:py-5 text-center rounded-2xl"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      className="w-20 rounded-full"
                      src={item.img}
                      alt=""
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <h5 className="py-5 mb-0">{item.title}</h5>
                  <p>{item.desc}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
