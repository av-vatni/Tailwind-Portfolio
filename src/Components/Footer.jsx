// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

// Importing icons from assets
import InstagramIcon from '../assets/instagram-icon.png';
import XIcon from '../assets/x-icon.png'; // X (formerly Twitter)
import LinkedInIcon from '../assets/linkedin-icon.png';
import GitHubIcon from '../assets/github-icon.png';
import GmailIcon from '../assets/gmail-icon.png';

function Footer() {
  return (
    <footer className="footer">
      {/* Social Media Links */}
      <div className="footer-social-media">
        <a href="https://www.instagram.com/av_vatni/" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" className="footer-icon" />
        </a>
        <a href="https://x.com/av_vatni?t=PoWczeoEreUqjczg2Lq4rA&s=08" target="_blank" rel="noopener noreferrer">
          <img src={XIcon} alt="X (formerly Twitter)" className="footer-icon" />
        </a>
        <a href="https://in.linkedin.com/in/avdhut-v-vatni-6a3b50257" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn" className="footer-icon" />
        </a>
        <a href="https://github.com/av-vatni" target="_blank" rel="noopener noreferrer">
          <img src={GitHubIcon} alt="GitHub" className="footer-icon" />
        </a>
        <a href="mailto:vatniavdhut14@gmail.com">
          <img src={GmailIcon} alt="Gmail" className="footer-icon" />
        </a>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Avdhut Vatni. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
