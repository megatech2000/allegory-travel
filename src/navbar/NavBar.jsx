"use client";

import React, { useState, useEffect } from "react";

import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const NavBar = ({ Image, Link, data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      const currentPath = `#${target}`;
      if (window.location.hash !== currentPath) {
        window.history.pushState({}, "", currentPath);
      }

      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  const handleContactClick = () => {
    scrollToSection("contact-form");
  };

  return (
    <section
      className={`fixed w-full z-[1000000] ${
        hasScrolled ? "bg-[#1e1e1e] rounded-2xl" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="section-width">
        <div className="flex items-center justify-between  py-4">
          <div>
            <Link href="/">
              <Image
                className="w-28 md:w-36"
                src="/images/logo.svg"
                alt="logo image"
                width={1000}
                height={1000}
              />
            </Link>
          </div>
          <div
            className={`hover-trans md:flex  items-center text-center md:text-right gap-8 lg:gap-10 absolute  left-0 w-full md:justify-end bg-[#fff] md:bg-transparent   md:static
            ${isMenuOpen ? "top-[60px]" : "top-[-300px]"}`}
          >
            {data.map((item, i) => (
              <div className="font-bold text-black md:text-white hover:text-[#ff4b04] hover-trans py-4 md:py-0">
                <Link
                  href={item.path}
                  key={i}
                  onClick={() => item.target && scrollToSection(item.target)}
                >
                  {item.title}
                </Link>
              </div>
            ))}
            <div className="pb-4 md:pb-0">
              <button
                className="px-10 py-3 text-white bg-gradient-to-r from-[#f3cd5c] to-[#ff4b04]  font-bold rounded-full hover:opacity-60 hover-trans"
                onClick={handleContactClick}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <div className="text-lg bg-[#ff4b04] p-2 md:p-0 rounded-md text-white">
              {!isMenuOpen && (
                <div onClick={toggleMenu}>
                  <FaBars />
                </div>
              )}
              {isMenuOpen && (
                <div onClick={toggleMenu}>
                  <IoMdClose />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
