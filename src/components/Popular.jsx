"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Popular = ({ Image, data }) => {
  return (
    <section className="section-width section-padding mt-36 md:mt-0">
      <div className="py-5 relative">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2>Popular Destination</h2>
        </motion.div>
        <motion.div
          className="flex gap-2 md:gap-5 absolute top-[17%] md:top-[20%] right-0 z-[100000]"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="button-prev-slide text-white p-4 bg-gradient-to-r from-[#f3cd5c] to-[#ff4b04] rounded-full rotate-180 cursor-pointer">
            <FaArrowRight />
          </div>
          <div className="button-next-slide text-white p-4 bg-gradient-to-r from-[#f3cd5c] to-[#ff4b04] rounded-full cursor-pointer">
            <FaArrowRight />
          </div>
        </motion.div>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-[60vh] w-full rounded-xl relative"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="bg-gradient-to-t from-[#000] to-transparent w-full h-full opacity-80 absolute"></div>
                <div className="w-full h-full flex items-end justify-start p-5 ">
                  <h4 className="mb-0 z-[10000]">{item.title}</h4>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Popular;
