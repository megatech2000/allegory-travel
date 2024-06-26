const Contact = () => {
  return (
    <section className="section-width section-padding">
      <div>
        <div>
          <h1 className="mb-0 font-bold text-center">
            Lets Create Amazing Travel
            <br /> Experience Together
          </h1>
        </div>
        <div className="mt-20 lg:m-10 xl:m-44">
          <div className="bg-texture bg-[#0e0d0d] border border-[#333] opacity-80 p-5 lg:p-14 rounded-3xl">
            <form action="" id="contact-form">
              <div className="md:flex gap-10">
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="text-white font-semibold text-xl "
                  >
                    Name
                  </label>
                  <br />
                  <input
                    type="text"
                    className="w-full py-4 rounded-2xl px-5 text-xl bg-[#303030] outline-none text-white mt-3"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="w-full mt-10 md:mt-0">
                  <label
                    htmlFor=""
                    className="text-white font-semibold text-xl "
                  >
                    Email
                  </label>
                  <br />
                  <input
                    type="email"
                    className="w-full py-4 rounded-2xl px-5 text-xl bg-[#303030] outline-none text-white mt-3"
                    placeholder="Enter yur email"
                  />
                </div>
              </div>
              <div className="md:flex gap-10 md:py-8">
                <div className="w-full mt-10 md:mt-0">
                  <label
                    htmlFor=""
                    className="text-white font-semibold text-xl "
                  >
                    Mobile Number
                  </label>
                  <br />
                  <input
                    type="text"
                    className="w-full py-4 rounded-2xl px-5 text-xl bg-[#303030] outline-none text-white mt-3"
                    placeholder="Enter yur mobile number"
                  />
                </div>
                <div className="w-full mt-10 md:mt-0">
                  <label
                    htmlFor=""
                    className="text-white font-semibold text-xl "
                  >
                    Country
                  </label>
                  <br />
                  <input
                    type="text"
                    className="w-full py-4 rounded-2xl px-5 text-xl bg-[#303030] outline-none text-white mt-3"
                    placeholder="Enter yur country"
                  />
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                <label htmlFor="" className="text-white font-semibold text-xl ">
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  className="w-full h-[20vh] py-2 rounded-2xl px-5 text-xl bg-[#303030] outline-none text-white mt-3"
                  placeholder="Enter yur message"
                ></textarea>
              </div>
              <div className="mt-8">
                <button className="px-10 py-3 text-white bg-gradient-to-r from-[#f3cd5c] to-[#ff4b04]  font-bold rounded-full hover:opacity-60 hover-trans">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
