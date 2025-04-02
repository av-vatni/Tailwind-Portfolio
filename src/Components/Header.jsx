import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import AvImg from "../assets/av_img_coat.jpg";
import BackgroundImage from "../assets/background.jpg";

const roles = [
  "Full Stack Developer",
  "Java & C++ Enthusiast",
  "Blockchain Developer",
  "Department Coordinator",
  "Tech Enthusiast",
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Header() {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const role = roles[index];

    if (!isDeleting && charIndex === role.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    const timeout = setTimeout(() => {
      setCurrentText(role.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <header
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-6 pt-20"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src={AvImg}
          alt="AV"
          className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-white mb-6"
        />
        <h1 className="text-3xl sm:text-5xl font-semibold mb-4">
          Hello, I'm Avdhut Vatni!
        </h1>
        <h2 className="text-xl sm:text-3xl font-light h-10">
          <span className="border-r-2 border-white pr-2">{currentText}</span>
        </h2>
        <p className="mt-4 max-w-2xl">
          I am passionate about web development, specializing in front-end and
          blockchain technology. Welcome to my portfolio where you can explore
          my work and see what I’ve been working on!
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block px-6 py-3 bg-blue-500 text-white text-lg rounded-full transition duration-300 hover:bg-blue-700"
        >
          See My Work
        </a>

        {/* Social Media Icons with Glow Effect */}
        <div className="mt-8 flex space-x-6">
          <a
            href="https://github.com/av-vatni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-3xl transition-transform transform hover:scale-125 hover:text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/avdhut-v-vatni-6a3b50257"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl transition-transform transform hover:scale-125 hover:text-blue-700 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/av_vatni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-3xl transition-transform transform hover:scale-125 hover:text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/av_vatni/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-3xl transition-transform transform hover:scale-125 hover:text-pink-700 drop-shadow-[0_0_15px_rgba(219,39,119,0.8)]"
          >
            <FaInstagram />
          </a>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
