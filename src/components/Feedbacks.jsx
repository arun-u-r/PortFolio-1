import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWraper } from '../hoc';
import { testimonials } from '../constants';
import { fadeIn } from '../utils/motion';
import PropTypes from 'prop-types'
import { FaQuoteLeft } from "react-icons/fa";


const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-[#0a04049c] p-10 rounded-3xl xs:w-[320px] w-full'>
    <p className='text-white font-black text-[48px]'><FaQuoteLeft></FaQuoteLeft></p>
    <div className="mt1">
    <p>{testimonial}</p>
    <div className='mt-15 flex justify-between items-center gap-2'>
      <div  className='flex-1 flex flex-col'>
        <p className='text-[#f5f5f5]'>
          <span className='blue-text-gradient m-1'>@</span>
          {name}</p>
          <p className='text-secondary text-[12px] ml-2 mt-1'>{designation} of {company}</p>
          </div>
          <img src={image} alt={name} className='w-10 h-10 rounded-full object-cover'/>

      </div>
    </div>
  </motion.div>
)
FeedbackCard.propTypes = {
  index: PropTypes.number,
  testimonial: PropTypes.string,
  name: PropTypes.string,
  designation: PropTypes.string,
  company: PropTypes.string,
  image: PropTypes.string
}
const FeedBackSection = () => {


  return (
    <div className="mt-12  rounded-[20px] w-full">
      <div className="rounded-2xl min-h-[300px]">
        <motion.p className={styles.sectionSubText} >what other says.</motion.p>

        <motion.div
          style={{
            width: '90px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // margin: '50px '
          }}
          animate={{
            scale: [1, 1, 1.5, 1, 1],
            borderRadius: ["10%", "10%", "50%", "50%", "10%"]
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          <motion.p style={{ color: 'white', textAlign: 'center' }}>Feedback</motion.p>
        </motion.div>
        <div className={`${styles.paddingX} mt-10 pb-12 flex flex-wrap gap-7 `}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name}
              index={index} {...testimonial} />
          ))}

        </div>
      </div>
    </div>
  );
};

const Feedbacks = SectionWraper(FeedBackSection, "feedbacks")
export default Feedbacks;
