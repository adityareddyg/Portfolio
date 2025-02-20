import React, { useState } from 'react';
import '../App.css';
import ButtonLink from './ButtonLink';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { FaGraduationCap } from 'react-icons/fa';

// ServiceCard Component
const ServiceCard = ({ service }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className='sm:w-[280px] w-full'
  >
    <div className='w-full bg-gradient-to-r from-green-500 to-blue-500 p-[1px] rounded-[20px]'>
      <div className='rounded-[20px] py-10 px-8 min-h-[350px] flex justify-evenly items-center flex-col bg-[#1F1F1F] hover:bg-[#2C2C2C] transition-all'>
        <img 
          src={service.icon} 
          alt='service_icon' 
          className='w-32 h-32 object-contain mb-6 hover:scale-110 transition-transform' 
        />
        <h3 className='text-white text-xl font-semibold text-center mb-4'>{service.title}</h3>
        <p className='text-white text-center text-sm'>{service.description}</p>
      </div>
    </div>
  </motion.div>
);

// About Component
const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      title: "AI Enthusiast",
      description: "Passionate about AI solutions, always exploring new technologies, and staying updated with the latest advancements in AI.",
      icon: "https://wallpapercave.com/wp/wp6397567.jpg"
    },
    {
      title: "ML Developer",
      description: "Experienced in building and deploying machine learning models using frameworks like TensorFlow, Keras, and Scikit-Learn.",
      icon: "https://png.pngtree.com/thumb_back/fw800/background/20230705/pngtree-d-rendering-of-a-friendly-robot-learning-through-reading-an-illustration-image_3825937.jpg"
    },
    {
      title: "AI Solutions Architect",
      description: "Designing and implementing scalable AI solutions, helping organizations leverage AI and ML for business transformation and growth.",
      icon: "https://ncube-digest.com/wp-content/uploads/2020/07/What-is-Solution-Architecture.jpg"
    }
  ];

  return (
    <div>
      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              👨‍💻 Hi, I'm <span className='text-green-400'>Aditya Gunda</span>, an undergraduate🎓 with a deep passion for Artificial Intelligence and Machine Learning. I specialize in building intelligent systems that can learn, adapt, and grow through data. With hands-on experience in deploying advanced ML models and developing cutting-edge AI solutions, I am driven to leverage technology to solve real-world problems. As an enthusiastic and detail-oriented <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/gundaaditya' target='_blank' rel='noreferrer'>Software Developer</a>, I thrive in environments where innovation meets impact. 🚀
            </p>
            <ButtonLink
              url='https://drive.google.com/file/d/1XuLuMv1QV8JLCYTYgFDiA3xr1_Yt3QjT/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />
            {/* Education Button */}
            <button 
              onClick={() => setIsOpen(true)} 
              className='mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center gap-2 transition-all'
            >
              <FaGraduationCap className='text-xl' /> Education
            </button>
          </div>

          {/* Service Cards Section */}
          <div className='mt-20 flex justify-center flex-wrap gap-10'>
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>

      {/* Education Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
        <Dialog.Panel className='bg-gray-900 text-white rounded-2xl p-8 w-[400px] shadow-xl'>
          <Dialog.Title className='text-2xl font-bold mb-4 flex items-center gap-2'>
            <FaGraduationCap className='text-yellow-400' /> Education
          </Dialog.Title>
          <p className='text-lg'><span className='font-semibold text-blue-400'>Undergraduate:</span> Bachelors in Computer Science (2021-2025)</p>
          <p className='text-lg'><span className='font-semibold text-green-400'>University:</span> Pittsburg State University, Pittsburg, KS</p>
          <p className='text-lg'><span className='font-semibold text-yellow-300'>GPA:</span> 3.7</p>
          <button 
            onClick={() => setIsOpen(false)} 
            className='mt-6 w-full py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all'
          >
            Close
          </button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}

export default About;
