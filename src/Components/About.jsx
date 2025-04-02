import React from "react";
import { motion } from "framer-motion";
import NssLogo from "../assets/NSS_LOGO.png";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-gray-200 text-gray-800 min-h-screen"
    >
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="text-4xl font-bold text-center text-blue-600 mb-10"
      >
        About Me
      </motion.h2>

      {/* Personal Introduction */}
      <motion.p
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="text-lg text-center max-w-2xl mx-auto text-gray-700 mb-10"
      >
        Hello! I'm Avdhut Vatni, a third-year Computer Engineering
        student passionate about Blockchain and Full Stack Web Development. I
        specialize in Web3 and creating responsive decentralized
        applications.
      </motion.p>

      {/* Education Section */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="bg-white p-6 shadow-lg rounded-xl max-w-3xl mx-auto mb-8"
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education</h3>
        <div className="pl-6 border-l-4 border-blue-500 space-y-4">
          <div>
            <p className="font-semibold text-lg">
              🎓 Pimpri Chinchwad College Of Engineering, Pune
            </p>
            <p className="text-gray-700">
              Bachelor of Technology in Computer Engineering (Third Year)
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">📝 SSC Board</p>
            <p className="text-gray-700">Scored 95% in SSC</p>
          </div>
          <div>
            <p className="font-semibold text-lg">📝 CET Exam</p>
            <p className="text-gray-700">
              Scored 98.45%ile in CET Examination
            </p>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            "Blockchain (Solidity, Ethers JS & Hardhat)",
            "Frontend (React, Vite, Tailwind)",
            "Node JS, Express JS, MongoDB",
            "JavaScript, TypeScript",
            "Version Control (Git, GitHub)",
            "Smart Contracts & dApps",
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg text-center font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Extracurricular Positions */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mt-12 max-w-3xl mx-auto"
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Extracurricular Activities
        </h3>
        <div className="bg-white p-6 shadow-lg rounded-xl space-y-6">
          <div className="flex items-center space-x-4">
            <a href="https://www.instagram.com/nss_pccoe/" className="w-20 h-20">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md flex items-center justify-center bg-white">
                <img
                  src={NssLogo}
                  alt="NSS Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <div>
              <p className="font-semibold text-lg">
                Department Coordinator, NSS
              </p>
              <p className="text-gray-700">
                Managing NSS activities in the Computer Engineering
                Department, organizing community service and
                skill-building events.
              </p>
            </div>
          </div>
          <div className="border-t pt-4">
            <p className="font-semibold text-lg">Volunteer, NSS</p>
            <p className="text-gray-700">
              Contributed to cleanliness drives, social awareness
              programs, and winter camps.
            </p>
          </div>
          <div className="border-t pt-4">
            <p className="font-semibold text-lg">Work Done in NSS</p>
            <p className="text-gray-700">
              Engaged in tree plantations, blood donation camps, and rural
              development projects.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
