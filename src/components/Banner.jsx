import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const Banner = ({ Image }) => {
  return (
    <section>
      <div className="bg-banner h-screen relative">
        <div className="bg-gradient-to-b lg:bg-gradient-to-r from-[#000] to-transparent w-full h-[40vh] lg:h-full absolute"></div>
        <div className="lg:flex h-full section-width ">
          <div className="w-full lg:h-full  z-[1000] pt-44 lg:pt-0">
            <div className="flex flex-col  text-center lg:text-left items-center lg:items-start justify-center lg:h-full">
              <h1 className="font-bold text-center lg:text-left z-[10000]">
                Tour Travel & <span className="text-[#ff4b04]"> Adventure</span>{" "}
                Camping
              </h1>
              <p className="w-full lg:w-[400px] z-[10000] text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="w-full   z-[1000]   md:flex  justify-end items-start mt-10 lg:mt-0">
            <div className="bg-[#fff] p-5 w-full  xl:w-[85%] rounded-2xl z-[10000]">
              <div>
                <h4 className="text-black">Find Your Next Adventure</h4>
              </div>
              <div>
                <p className="text-black py-3">Destination</p>
                <div className="flex items-center p-3 rounded-md border border-[#bdbbbb] gap-3">
                  <div className="text-2xl text-[#7d7c7c]">
                    <CiLocationOn />
                  </div>
                  <input
                    type="text"
                    placeholder="Where"
                    className="outline-none text-xl w-full"
                  />
                </div>
                <div className="min-[464px]:flex gap-5 my-5">
                  <div className="w-full">
                    <p className="text-black">Check in</p>
                    <div className="w-full p-3 border border-[#bdbbbb] rounded-md flex items-center  justify-center">
                      <input
                        type="date"
                        className="outline-none text-xl text-[#7d7c7c] w-full"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-black">Check out</p>
                    <div className="w-full p-3 border border-[#bdbbbb] rounded-md flex items-center justify-center">
                      <input
                        type="date"
                        className="outline-none text-xl text-[#7d7c7c] w-full"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-black ">Your Email</p>
                  <div className="flex items-center p-3 rounded-md border border-[#bdbbbb]">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl text-[#7d7c7c]">
                        <CiMail />
                      </div>
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="text-xl outline-none w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <button className="px-10 py-3 bg-gradient-to-r from-[#f3cd5c] to-[#ff4b04] text-white mt-5 rounded-full hover:opacity-60 hover-trans">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
