import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaDownload, FaGoogle } from "react-icons/fa6";

function Contact() {
  return (
    <footer id="contact" className="h-[90vh] px-6 py-12 bg-gray-200 text-gray-800 text-center flex flex-col justify-center">
      <div className="container mx-auto max-w-4xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-blue-600">Let's Connect</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl mx-auto">
          Open to exciting opportunities & collaborations. Reach out via my social links below!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/av-vatni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 text-3xl transition-transform transform hover:scale-125 hover:text-gray-900"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/avdhut-v-vatni-6a3b50257"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl transition-transform transform hover:scale-125 hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/av_vatni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-3xl transition-transform transform hover:scale-125 hover:text-black"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://instagram.com/av_vatni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-3xl transition-transform transform hover:scale-125 hover:text-pink-700"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:vatniavdhut14@gmail.com"
            className="text-red-500 text-3xl transition-transform transform hover:scale-125 hover:text-red-700"
          >
            <FaGoogle />
          </a>
        </div>

        {/* Download Resume Button */}
        <div className="mt-4">
          <a
            href="/resume.pdf"
            download="Avdhut_Vatni_Resume.pdf"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </a>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} Avdhut Vatni. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Contact;
