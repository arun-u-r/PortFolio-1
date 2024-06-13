import { styles } from "../styles";
import { cpu } from "../assets";
import { anchor } from "../assets";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">

      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-6 h-6 rounded-full bg-[#860404] shadow-2xl font-bold text-center">
            <img src={cpu} alt="<>" />
          </div>
          <div className="w-1 sm:h-80 h-40 md:h-60 lg:h-80 violet-gradient opacity-80 " />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#b728fa]`}>
            Hi I am <span className="text-[#E63338]">Arun</span>
          </h1>
          <p className={`${styles.heroSubText} sm:text[15p] text-white-100 mt-3`}>
            i develop dynamic web applications 3d visuals
            <br className="sm:block hidden" /> and mobile applications user
            interfaces etc...
          </p>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">

          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-5 h-5 rounded-full  mb-1"
          >
            <img src={anchor} alt="" />
          </motion.div>

        </a>
      </div>
    </section>
  );
};

export default Hero;
