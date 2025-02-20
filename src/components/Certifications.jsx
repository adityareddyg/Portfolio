import React from "react";
import { FaCertificate, FaCode, FaCloud, FaDatabase, FaBrain } from "react-icons/fa";  // Icons for certifications
import { motion } from "framer-motion";  // For animation effects

const certifications = [
  { title: "Advanced React", category: "Web Development", icon: <FaCode />, link: "https://drive.google.com/file/d/1U6sDEkDWNGZigyRovlVK_78FhrfnUnzv/view?usp=sharing" },
  { title: "Bits and Bytes of CN", category: "Networking", icon: <FaDatabase />, link: "https://drive.google.com/file/d/1Xq9OsL0C5-g0JhOuBUzuUl1COj990rPT/view?usp=sharing" },
  { title: "Building AI Applications with APIs", category: "AI", icon: <FaBrain />, link: "https://drive.google.com/file/d/1C8l3-OUU_fQw9KemgBS8jUF5Nza7iXRP/view?usp=sharing" },
  { title: "Building AI Powered Chatbots", category: "AI", icon: <FaBrain />, link: "https://drive.google.com/file/d/10sWeg-hMBOTnzs_DtpAT4y6XBXHlPgMk/view?usp=sharing" },
  { title: "Computer Networking - Coursera", category: "Networking", icon: <FaCloud />, link: "https://drive.google.com/file/d/1bZPICyCq5pf-uHfvEJHG_e4hZmH2qa3n/view?usp=sharing" },
  { title: "Advanced Speaking and Listening", category: "Language", icon: <FaCertificate />, link: "https://drive.google.com/file/d/163I3RzaLNdaK17Lnq25pjJ9IxBu8XLKI/view?usp=sharing" },
  { title: "AI for Everyone", category: "AI", icon: <FaBrain />, link: "https://drive.google.com/file/d/120kZSH_jEjDhwsl4e89EdXF39KA3s4Q9/view?usp=sharing" },
  { title: "AWS S3", category: "Cloud Computing", icon: <FaCloud />, link: "https://drive.google.com/file/d/1qUZbwTC_S61OjCLw9hz5qSNg72QLsMW9/view?usp=sharing" },
  { title: "CSS", category: "Web Development", icon: <FaCode />, link: "https://drive.google.com/file/d/11vhHZvJTjNbWSpnuJT1zQiZYR0RNZwO2/view?usp=sharing" },
  { title: "Data Analysis with R Programming", category: "Data Science", icon: <FaDatabase />, link: "https://drive.google.com/file/d/1DyOm32OvVvceQNzaHct9WCWFfT7DEq4S/view?usp=sharing" },
  { title: "Google Slides", category: "Tools", icon: <FaCertificate />, link: "https://drive.google.com/file/d/19Zqly243HCso7uUWB1LenN6nuMsf5Vkm/view?usp=sharing" },
  { title: "HTML", category: "Web Development", icon: <FaCode />, link: "https://drive.google.com/file/d/1D_2WVkCP3Vlu7dv1mls-oDvsh-fXSbqX/view?usp=sharing" },
  { title: "Java Programming", category: "Programming", icon: <FaCode />, link: "https://drive.google.com/file/d/10zr9UIfWm2cVKP4X-FZ4IAgS6e34r6xR/view?usp=sharing" },
  { title: "JavaScript", category: "Web Development", icon: <FaCode />, link: "https://drive.google.com/file/d/1EChIOI6cG3lDw7ViQG-FV534QTBc43uJ/view?usp=sharing" },
  { title: "Relational Database", category: "Data Science", icon: <FaDatabase />, link: "https://drive.google.com/file/d/1LaiYvudegYT9WD3pBrut8eZvahO0aHkh/view?usp=sharing" },
  { title: "Speak English Professionally", category: "Language", icon: <FaCertificate />, link: "https://drive.google.com/file/d/1YC5Gn6xcvdrYyeHpHrSwBaoi2e8UwyrA/view?usp=sharing" },
  { title: "Technical Support Fundamentals", category: "Tech Support", icon: <FaCertificate />, link: "https://drive.google.com/file/d/1sAtYlYRC3y0ZW-2kUNl6kTAezobbp5U6/view?usp=sharing" },
  { title: "Data Analysis with Python", category: "Data Science", icon: <FaDatabase />, link: "https://drive.google.com/file/d/1Anae4rHYTzQl29laBKt5o3gr46H6V3W4/view?usp=sharing" },
  { title: "Delivering Quality Work with Agility", category: "Agile", icon: <FaCertificate />, link: "https://drive.google.com/file/d/1DfipxyDfsoDGE8bkg8Q8iQ9JA3_Fyien/view?usp=sharing" },
  { title: "Developing AI Applications with Python", category: "AI", icon: <FaBrain />, link: "https://drive.google.com/file/d/1aRhhcDzyUa6aZdbdA70JSv4QZ43rLtrT/view?usp=sharing" },
  { title: "Developing Interpersonal Skills", category: "Soft Skills", icon: <FaCertificate />, link: "https://drive.google.com/file/d/170Qsaw6tifjMnD2VIPQSnSi5YcJNgkvj/view?usp=sharing" },
  { title: "Exploratory Data Analysis for ML", category: "AI", icon: <FaBrain />, link: "https://drive.google.com/file/d/1OxbQwKUDF3a14ds0c2ep64MgbHqAtFjC/view?usp=sharing" },
  { title: "Generative AI - Introduction and Applications", category: "AI", icon: <FaBrain />, link: "https://drive.google.com/file/d/1hqQFPT3R9Fanri4k_wWranL9Z-RmhmbF/view?usp=sharing" },
  { title: "Introduction to Agile Development", category: "Agile", icon: <FaCertificate />, link: "https://drive.google.com/file/d/1WzE8TCiDSgQ2020bT5kuyqirGmdrlY0k/view?usp=sharing" },
  { title: "Introduction to AI - Honors", category: "AI", icon: <FaBrain />, link: "https://drive.google.com/file/d/1jY5e8GFgjusotaWsxrmDpQ2tjcA_MmYf/view?usp=sharing" },
  { title: "Introduction to Cloud Computing", category: "Cloud Computing", icon: <FaCloud />, link: "https://drive.google.com/file/d/1Do0cxeEoIhFgsXgD8VbuASd2Th-OyHze/view?usp=sharing" },
  { title: "Introduction to Data Analytics", category: "Data Science", icon: <FaDatabase />, link: "https://drive.google.com/file/d/1GcMEvKF0Pgn064L9KZ5cAYf9GJACIPIT/view?usp=sharing" },
  { title: "Introduction to Data Engineering", category: "Data Engineering", icon: <FaDatabase />, link: "https://drive.google.com/file/d/13dmVNsaQpqVJHNWQoD35SUEsnA2XIMmQ/view?usp=sharing" },
  { title: "Introduction to DevOps", category: "DevOps", icon: <FaCloud />, link: "https://drive.google.com/file/d/15QVO9m_sxx8w1JNpcSZbZh9JMRLU7lhm/view?usp=sharing" },
  { title: "Introduction to ML in Production", category: "ML", icon: <FaBrain />, link: "https://drive.google.com/file/d/1ZiZyM9poEbpWdVqkmnDsGTVGeZgXR0EC/view?usp=sharing" },
  { title: "Introduction to Scrum Master Profession", category: "Agile", icon: <FaCertificate />, link: "https://drive.google.com/file/d/1XdZjZpchDPg_ZBxSLvk5ePL6qDjPdSrs/view?usp=sharing" },
  { title: "Present with Purpose", category: "Soft Skills", icon: <FaCertificate />, link: "https://drive.google.com/file/d/1d63NsKOLgsVS_edhH_c6XDs-LIzzelE-/view?usp=sharing" },
  { title: "Prompt Engineering Basics", category: "AI", icon: <FaBrain />, link: "https://drive.google.com/file/d/1l3slQUGkvW4J1vFp6dbaF6EAh4hOs4uv/view?usp=sharing" },
  { title: "Python for DS, AI & Development", category: "Python", icon: <FaCode />, link: "https://drive.google.com/file/d/1f7zh2VvZ2KJzjAOjPzVJdqL4MY_7xwyQ/view?usp=sharing" },
  { title: "Solving Problems with Creative and Critical Thinking", category: "Soft Skills", icon: <FaCertificate />, link: "#" },
  { title: "The Full Stack Coursera", category: "Full Stack", icon: <FaCode />, link: "https://drive.google.com/file/d/13OhTKcdSqGUUiWHrPFpb8pD7-Bh-pshw/view?usp=sharing" },
  { title: "Cambridge English B2 Level", category: "Language", icon: <FaCertificate />, link: "https://drive.google.com/file/d/1NlNnvId4s008Jm6RqHaaET2QCnggPf5f/view?usp=sharing" },
  { title: "Introduction to Machine Learning NPTEL", category: "AI", icon: <FaBrain />, link: "https://drive.google.com/file/d/1S_Bg5-Gk-Ww2OoKRHvGBiD7u8qoP-kKt/view?usp=sharing" },
];

const Certifications = () => {
  return (
    <div className="relative z-0 bg-black w-screen h-full pt-12 mt-8">
      <div className="text-white certifications overflow-x-hidden pt-12 mt-8 px-4 sm:px-16" id="certifications">
        <div className="w-full text-center">
          <p className="font-light text-gray-400">My Achievements</p>
          <h2 className="text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Certifications
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {certifications.map((certification, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-full mb-4">
                {certification.icon}
              </div>
              <h3 className="text-xl font-semibold">{certification.title}</h3>
              <p className="text-gray-400 mt-2">{certification.category}</p>
              <a href={certification.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-500 transition duration-300">
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
