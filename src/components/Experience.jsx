import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWraper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import 'react-vertical-timeline-component/style.min.css';


const ExperienceSection = () => {
  return (
    <div >
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>what i done</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
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

      <div className="mt-20 flex flex-col">
        <VerticalTimeline  lineColor="black">
          {experiences.map((experience, index) => {
            return(
            <VerticalTimelineElement
            className="vertical-timeline-element--work items-center flexjustify-center"
              key={index}
              contentStyle={{ background: "#09101A", color: "#fff", }}
              contentArrowStyle={{ borderRight: "10px solid #fff" }}
              date={experience.date}
              dateClassName="date"
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className="flex justify-center items-center bg-black rounded-full w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain "
                  />
                </div>
              }
            >
              <div>
                <h3 className="vertical-timeline-element-title text-white text-[24px] font-bold">
                  {experience.title}
                </h3>
                <p className="text-secondary text-[17px] font-semibold">{experience.company_name}</p>
              </div>
              <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li key={index} className="text-[15px] text-secondary font-semibold">
                    {point}
                  </li>
                ))}
                 
              </ul>
            </VerticalTimelineElement>
          )})}
        </VerticalTimeline>
      </div>
    </div>
  );
};

const Experience = SectionWraper(ExperienceSection, "experience");
export default Experience;

// const ExperienceCard = ({ experience }) => (
//   <VerticalTimelineElement
//     visible={true}
//     contentStyle={{ background: "#1d1836", color: "#fff" }}
//     contentArrowStyle={{ borderRight: "7px solid #232631" }}
//     date={experience.date}
//     iconStyle={{ background: experience.iconBg }}
//     icon={
//       <div>
//         <img
//           src={experience.icon}
//           alt={experience.company_name}
//           className="w-[60%] h-[60%] object-contain"
//         />
//       </div>
//     }
//   >
//     <div>
//       <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
//     </div>
//   </VerticalTimelineElement>
// );
// ExperienceCard.propTypes = {
//   experience: PropTypes.shape({
//     date: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired,
//     iconBg: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     company_name: PropTypes.string.isRequired,
//   }).isRequired,
// };
