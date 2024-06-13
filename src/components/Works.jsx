import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion.js";
import { styles } from "../styles";
import { projects } from '../constants'
import ProjectCard from "./ProjectCard.jsx";
import SectionWraper from "../hoc/SectionWraper.jsx";

const WorksSection = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)} initial="hidden"
          animate="show"
          className="mt-3 text-secondary text-[18px] max-w-3xl ">
          I have worked on a number of projects, both personal and professional. I have worked on projects
          ranging from small websites to large enterprise applications. I have also worked on projects that
          require a lot of research and development. I have also worked on projects that require a lot of
          creativity and design. I have also worked on projects that require a lot of technical skills and
          knowledge. I have also worked on projects that require a lot of teamwork and collaboration. I have
          also worked on projects that require a lot of communication and coordination.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};
const Works = SectionWraper(WorksSection, 'work')
export default Works;
