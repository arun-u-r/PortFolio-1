import { RiReactjsLine } from "react-icons/ri";
import { SiPython, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { FaNodeJs, FaGitAlt, FaGithub, FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { AiOutlineJavaScript } from "react-icons/ai";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

// import { SectionWraper } from "../hoc";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-14  ">
      <h1 className="my-10 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          data-tooltip-id="my-tooltip"
          data-tooltip-content="JavaScript"
          data-tooltip-place="top-end"
          data-tooltip-variant="light"
        >
          <motion.div
            variants={iconVarients(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-full border-4 border-neutral-800 p-4 bg-[#F4E11D]"
          >
            <AiOutlineJavaScript className="text-7xl text-black " />
          </motion.div>
        </a>

        <Tooltip id="my-tooltip" />

        <a
          data-tooltip-id="my-tooltip1"
          data-tooltip-content="MongoDB"
          data-tooltip-place="top"
          data-tooltip-variant="light"
        >
          <motion.div
            variants={iconVarients(3)}
            initial="initial"
            animate="animate"
            className="rounded-full border-4 border-neutral-800 p-4  bg-[#0A1E2B]"
          >
            <SiMongodb className="text-7xl text-green-600" />
          </motion.div>
        </a>
        <Tooltip id="my-tooltip1" />

        <a
          data-tooltip-id="my-tooltip2"
          data-tooltip-content="Expres js"
          data-tooltip-place="top"
          data-tooltip-variant="light"
        >
          <motion.div
            variants={iconVarients(5)}
            initial="initial"
            animate="animate"
            className="rounded-full border-4 border-neutral-800 p-4  bg-white"
          >
            <SiExpress className="text-7xl text-black" />
          </motion.div>
        </a>
        <Tooltip id="my-tooltip2" />

        <a
          data-tooltip-id="my-tooltip3"
          data-tooltip-content="React js"
          data-tooltip-place="top"
          data-tooltip-variant="light"
        >
          <motion.div
            variants={iconVarients(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-full border-4 border-neutral-800 p-4 bg-[#222222]"
          >
            <RiReactjsLine className="text-7xl text-cyan-500" />
          </motion.div>
        </a>
        <Tooltip id="my-tooltip3" />

        <a
          data-tooltip-id="my-tooltip4"
          data-tooltip-content="Node js"
          data-tooltip-place="top"
          data-tooltip-variant="light"
        >
          <motion.div
            variants={iconVarients(4)}
            initial="initial"
            animate="animate"
            className="rounded-full border-4 border-neutral-800 p-4 bg-white-100"
          >
            <FaNodeJs className="text-7xl text-green-800" />
          </motion.div>
        </a>
        <Tooltip id="my-tooltip4" />

        <a
          data-tooltip-id="my-tooltip5"
          data-tooltip-content="Next js"
          data-tooltip-place="top"
          data-tooltip-variant="light"
        >
          <motion.div
            variants={iconVarients(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-full border-4 border-neutral-800 p-4 bg-white"
          >
            <RiNextjsFill className="text-7xl text-black" />
          </motion.div>
        </a>
        <Tooltip id="my-tooltip5" />

        <a
          data-tooltip-id="my-tooltip6"
          data-tooltip-content="Github"
          data-tooltip-place="top"
          data-tooltip-variant="light"
        >
          <motion.div
            variants={iconVarients(3)}
            initial="initial"
            animate="animate"
            className="rounded-full border-4 border-neutral-800 p-4 bg-white"
          >
            <FaGithub className="text-7xl text-black" />
          </motion.div>
        </a>
        <Tooltip id="my-tooltip6" />

        <a
          data-tooltip-id="my-tooltip7"
          data-tooltip-content="Git"
          data-tooltip-place="top"
          data-tooltip-variant="light"
        >
          <motion.div
            variants={iconVarients(5)}
            initial="initial"
            animate="animate"
            className="rounded-full border-4 border-neutral-800 p-4 bg-white"
          >
            <FaGitAlt className="text-7xl text-[#E85334]" />
          </motion.div>
        </a>
        <Tooltip id="my-tooltip7" />
        <a
          data-tooltip-id="my-tooltipm"
          data-tooltip-content="Mysql"
          data-tooltip-place="top"
          data-tooltip-variant="light"
        >
          <motion.div
            variants={iconVarients(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-full border-4 border-neutral-800 p-4 bg-[#487DA4]"
          >
            <SiMysql className="text-7xl text-white" />
          </motion.div>
        </a>
        <Tooltip id="my-tooltipm" />

        <a
          data-tooltip-id="my-tooltip8"
          data-tooltip-content="CSS"
          data-tooltip-place="top"
          data-tooltip-variant="light"
        >
          <motion.div
            variants={iconVarients(6)}
            initial="initial"
            animate="animate"
            className="rounded-full border-4 border-neutral-800 p-4 bg-white"
          >
            <FaCss3Alt className="text-7xl  text-[#3B6AF1]" />
          </motion.div>
        </a>
        <Tooltip id="my-tooltip8" />

        <a
          data-tooltip-id="my-tooltip9"
          data-tooltip-content="HTML5"
          data-tooltip-place="top"
          data-tooltip-variant="light"
        >
          <motion.div
            variants={iconVarients(4)}
            initial="initial"
            animate="animate"
            className="rounded-full border-4 border-neutral-800 p-4 bg-white"
          >
            <FaHtml5 className="text-7xl  text-[#E4512C]" />
          </motion.div>
        </a>
        <Tooltip id="my-tooltip9" />

        <a
          data-tooltip-id="my-tooltip10"
          data-tooltip-content="Python"
          data-tooltip-place="top"
          data-tooltip-variant="light"
        >
          <motion.div
            variants={iconVarients(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-full border-4 border-neutral-800 p-4 bg-[#F6D446]"
          >
            <SiPython className="text-7xl text-[#244D6F]" />
          </motion.div>
        </a>
        <Tooltip id="my-tooltip10" />
      </div>
    </div>
  );
};
// const Tech = SectionWraper(TechSection, "tech");

export default Tech;
