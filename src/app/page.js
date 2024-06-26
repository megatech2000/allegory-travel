import dynamic from "next/dynamic";
import Image from "next/image";
import { aboutData, anywhereData, chooseUsData, popularData } from "../../data";

const Banner = dynamic(() => import("../components/Banner"));
const Popular = dynamic(() => import("../components/Popular"));
const About = dynamic(() => import("../components/About"));
const Anywhere = dynamic(() => import("../components/Anywhere"));
const ChooseUs = dynamic(() => import("../components/ChooseUs"));
const Contact = dynamic(() => import("../components/Contact"));

export default function Home() {
  return (
    <main>
      <div>
        <Banner Image={Image} />
        <Popular Image={Image} data={popularData} />
        <About Image={Image} data={aboutData} />
        <Anywhere Image={Image} data={anywhereData} />
        <ChooseUs Image={Image} data={chooseUsData} />
        <Contact />
      </div>
    </main>
  );
}
