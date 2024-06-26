import { TbPlayerPlay } from "react-icons/tb";

const About = ({ Image, data }) => {
  return (
    <section className="section-width">
      <div className="md:flex">
        <div className="w-full h-full" id="about">
          <h2>
            About Travel
            <br /> Agency
          </h2>
        </div>
        <div className="w-full h-full">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  mt-20">
        {data.map((item, i) => (
          <div
            className="flex items-center   gap-5 w-full h-full bg-gradient-to-l from-[#3a3016] to-[#2b2a2a]  p-9 rounded-xl shadow-xl"
            key={i}
          >
            <div>
              <Image
                className="w-20"
                src={item.img}
                alt="about icons"
                width={1000}
                height={1000}
              />
            </div>
            <div className="w-full h-full">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-20 relative">
        <div className="flex  items-center justify-center ">
          <Image
            className="w-full rounded-3xl"
            src="/images/about-video-img.webp"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
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
