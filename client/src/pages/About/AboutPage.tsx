import { globalAnimation } from "../../animations/animations";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "./aboutPage.scss";
const AboutPage = () => {
  return (
    <div className="about-page-container">
      <motion.div
        className="about-info"
        {...globalAnimation({
          yInitial: 0,
          xInitial: -60,
        })}
      >
        <motion.h1
          className="title"
          {...globalAnimation({
            yInitial: -50,
          })}
        >
          About <span>me</span>
        </motion.h1>
        <h3 className="subtitle">I'm here to help you with your projects!</h3>

        <p className="description">
          As a passionate Frontend Developer, I specialize in creating dynamic
          and user-friendly web applications. Using technologies like HTML, CSS,
          SASS, JavaScript, ReactJS, and NodeJS, I strive to deliver seamless
          and responsive designs. My focus is on optimizing user experience
          through innovative solutions and clean, efficient code. I continuously
          seek to stay ahead of industry trends and am committed to personal
          growth and professional development in the tech field.
        </p>
        <div className="icons-wrapp">
          <a
            className="icons-link"
            href="https://www.linkedin.com/in/vic-tyslenko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            className="icons-link"
            href="https://github.com/VicTyslenko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="icons-link"
            href="https://www.facebook.com/VictorTyslenko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
        <a
          href="/VictorTyslenko_CV/Frontend-Developer_CV.pdf"
          className="cv-link"
          download="Frontend-Developer_CV.pdf"
        >
          Download CV
        </a>
      </motion.div>
      <motion.div
        className="image-wrapp"
        {...globalAnimation({
          yInitial: 0,
          xInitial: 60,
          duration: 0.8,
        })}
      >
        <img src="/img/about-me-image.JPG" alt="portfolio" />
      </motion.div>
    </div>
  );
};

export default AboutPage;
