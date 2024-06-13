import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWraper } from "../hoc";

const ServiceCard = (service) => {
  const { index, title, icon } = service;
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div className="bg-[#090604] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-around items-center flex-col bg-card-back bg-cover bg-no-repeat bg-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain " />
          <h3 className="text-white text-center text-lg font-semibold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-14 ">
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4  text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eum
        nobis expedita facilis id nesciunt molestias quaerat atque modi
        dignissimos velit mollitia porro non, adipisci ratione pariatur,
        voluptates, dolor temporibus.
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center items-center gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};
const AboutSection = SectionWraper(About,'about')

export default AboutSection;
