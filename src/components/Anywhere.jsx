"use client";
import { useState } from "react";

import { IoLocationOutline } from "react-icons/io5";

const Anywhere = ({ Image, data }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="section-width section-padding" id="services">
      <div>
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-center">
            Go Anywhere
            <br /> With Our Latest Tour Offers
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-between gap-10 mt-10 overflow-x-scroll overflow-item">
        {data.map((item, index) => (
          <div
            className={`${
              index === activeTab
                ? "bg-gradient-to-r from-[#f3cd5c] to-[#ff4b04]"
                : "bg-[#151515]"
            }bg-[#151515] border border-[#2b2a2a] rounded-full flex gap-3 items-center px-6 py-3 hover:bg-gradient-to-r from-[#f3cd5c] to-[#ff4b04] cursor-pointer`}
            key={index}
            onClick={() => handleTabClick(index)}
          >
            <div className="w-10 h-10 bg-[#2d2c2c] opacity-50  rounded-full"></div>
            <p className="text-2xl text-white">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
        {data[activeTab].content.map((item, i) => (
          <div className="relative" key={i}>
            <Image
              className="rounded-xl "
              src={item.img}
              alt=""
              width={1000}
              height={1000}
            />
            <div>
              <div className="bg-[#fff] rounded-xl absolute bottom-5 left-5 right-5  p-2">
                <div>
                  <h5 className="text-black">{item.title}</h5>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <IoLocationOutline className="text-[#232323] text-xl" />
                    <p>{item.place}</p>
                  </div>
                  <div>
                    <p className="text-[#eb3a3a]">${item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Anywhere;
