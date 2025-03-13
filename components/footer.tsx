import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import React from "react"

const Footer = () => {
  return (
    <footer className="glass text-primary-foreground py-8">
      <div className="container mx-auto px-4 flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/nontuthuzelo-ngwenya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a href="https://twitter.com/NicsadyN" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="w-6 h-6" />
        </a>
        <a href="https://github.com/DeeGemini" target="_blank" rel="noopener noreferrer" aria-label="Github">
          <FaGithub className="w-6 h-6" />
        </a>
        <a href="mailto:nicsadyngwenya@gmail.com" aria-label="Email">
          <FaEnvelope className="w-6 h-6" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
