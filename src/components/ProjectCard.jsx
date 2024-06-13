import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion';
import { SectionWraper } from '../hoc'
import { fadeIn } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { github } from '../assets';



const ProjectCard = ({ name, index, description, tags, image, source_code_link }) => {
    return (
        <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
            initial="hidden"
            animate="show">
            <Tilt options={{ max: 25, scale: 1, speed: 450 }}
                className="bg-tertiary p-5 rounded-3xl sm:w-[360px] sm:jus w-full" style={{ boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.9)'}}>
                <div className='relative w-full h-[230px]'>
                    <img src={image} alt={name} className='w-full h-full object-cover rounded-3xl'
                        style={{ boxShadow: '10px 20px 20px rgba(0, 0, 0, 0.9)', transition: 'all 0.3s ease-in-out' }} />
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div className=' black-gradient w-10 h-10 flex justify-center items-center cursor-pointer rounded-full'
                            onClick={() => { window.open(source_code_link, '_blank') }}
                        >
                            <img src={github} alt='github' className='w-1/2 h-1/2 object-contain transform transition duration-300 ease-in-out hover:scale-125' />
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className='text-white font-bold text-[23px]'>{name}</h3>
                    <motion.p variants={fadeIn('','',1.1,1)} className='mt-2 text-[14px] text-secondary'>{description}</motion.p>
                </div>
                <div className='mt-4 text-white flex flex-wrap gap-2'>
                    {tags.map((tag)=>(
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}
ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number,
    description: PropTypes.string,
    tags: PropTypes.array,
    image: PropTypes.string,
    source_code_link: PropTypes.string
}
export default ProjectCard