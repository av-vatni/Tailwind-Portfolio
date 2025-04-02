import React, { useState } from "react";
import logo from "../assets/AV-logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-4xl bg-[#222] bg-opacity-90 backdrop-blur-md border border-cyan-400 shadow-lg rounded-2xl transition-all duration-300 glow-effect">
      <div className="flex justify-between items-center px-5 md:px-10 py-2 md:py-3">
        {/* Logo */}
        <a href="#">
          <img src={logo} alt="AV" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a key={item} href={item === "Home" ? "#" : `#${item.toLowerCase()}`}className="nav-link">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-11/12 max-w-sm bg-[#222] bg-opacity-95 backdrop-blur-lg border border-cyan-400 rounded-xl p-5 flex flex-col items-center space-y-4 glow-effect">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a key={item} href={item === "Home" ? "#" : `#${item.toLowerCase()}`}className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Tailwind Styles */}
      <style jsx>{`
        .nav-link, .mobile-nav-link {
          font-size: 1rem;
          font-weight: 600;
          color: white;
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link:hover, .mobile-nav-link:hover {
          color: #00eaff;
        }
        .glow-effect {
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
