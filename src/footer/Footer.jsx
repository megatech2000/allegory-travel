import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = ({ Image, Link }) => {
  return (
    <>
      <section className="section-width ">
        <div className="md:flex items-center justify-between md:h-[40vh]">
          <div className="w-full h-full">
            <div>
              <Image
                className="w-56"
                src="/images/logo.svg"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <div className="mt-5 w-[300px]">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="w-full h-full md:flex gap-20 mt-10 md:mt-0">
            <div>
              <h5 className="mb-0">Quick Link</h5>
              <p className="mt-5">Home</p>
              <p className="mt-3">About Us</p>
              <p className="mt-3">Services</p>
              <p className="mt-3">Testimonial</p>
              <p className="mt-3">Contact Us</p>
            </div>
            <div className="mt-10 md:mt-0">
              <h5 className="mb-0">Support</h5>
              <p className="mt-5">Licence</p>
              <p className="mt-3">Changelog</p>
              <p className="mt-3">Styleguide</p>
            </div>
          </div>
          <div className="h-full mt-10 md:mt-0">
            <div>
              <h5>Social Media</h5>
            </div>
            <div className="flex items-center gap-10 mt-10">
              <div className="bg-[#585858] text-white p-4 opacity-45 rounded-full hover:bg-gradient-to-r from-[#f3cd5c] to-[#ff4b04] cursor-pointer hover-trans">
                <FaFacebookF />
              </div>
              <div className="bg-[#585858] text-white p-4 opacity-45 rounded-full hover:bg-gradient-to-r from-[#f3cd5c] to-[#ff4b04] cursor-pointer hover-trans">
                <FaInstagram />
              </div>
              <div className="bg-[#585858] text-white p-4 opacity-45 rounded-full hover:bg-gradient-to-r from-[#f3cd5c] to-[#ff4b04] cursor-pointer hover-trans">
                <FaTwitter />
              </div>
              <div className="bg-[#585858] text-white p-4 opacity-45 rounded-full hover:bg-gradient-to-r from-[#f3cd5c] to-[#ff4b04] cursor-pointer hover-trans">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-5 md:mt-0">
        <div className="bg-[#1b1b1b] p-4 flex items-center justify-center">
          <p>Powered By AllegoryInfo.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
