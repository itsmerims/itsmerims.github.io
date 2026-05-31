import React from "react"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai"
import { FiMail } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="bg-data-bg border-t border-data-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">John Rimuel</h3>
            <p className="text-data-text-secondary text-sm">
              Data Engineer crafting intelligent data solutions at Macquarie.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Home", "About", "Experience", "Projects"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-data-text-secondary hover:text-cyber-blue transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <p className="text-data-text-secondary text-sm mb-4">
              Interested in collaborating? Let&apos;s connect!
            </p>
            <a
              href="mailto:rimuel.dev@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyber-blue/10 border border-cyber-blue text-cyber-blue rounded-lg hover:bg-cyber-blue/20 transition-colors text-sm font-semibold"
            >
              <FiMail size={16} />
              Send Email
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-data-border pt-8 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-data-text-secondary text-sm">
            &copy; 2024 John Rimuel B. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-end gap-6">
            <a
              href="https://github.com/itsmerims"
              rel="noreferrer"
              target="_blank"
              className="text-data-text-secondary hover:text-cyber-blue transition-colors"
              aria-label="GitHub"
            >
              <AiOutlineGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/itsmerims/"
              rel="noreferrer"
              target="_blank"
              className="text-data-text-secondary hover:text-cyber-blue transition-colors"
              aria-label="LinkedIn"
            >
              <AiOutlineLinkedin size={24} />
            </a>
            <a
              href="mailto:rimuel.dev@gmail.com"
              className="text-data-text-secondary hover:text-cyber-blue transition-colors"
              aria-label="Email"
            >
              <FiMail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
