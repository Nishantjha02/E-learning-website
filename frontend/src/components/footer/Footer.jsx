import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
     <footer>
        <div className="footer-content">
            <p>
                &copy; 2025 Your E-learning platform.All rights reserved.<br></br>
                Made with 😊  <a href="https://nishantjha02.github.io/portfolio/">Nishant jha</a>
            </p>

            <div className="social-links">
                <a href=""><FaGithub></FaGithub></a>
                <a href=""><FaLinkedin></FaLinkedin></a>
                
            </div>
        </div>
     </footer>
  )
}

export default Footer