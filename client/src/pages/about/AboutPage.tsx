import { globalAnimation } from "../../animations/animations";

import { motion } from "framer-motion";
import "./aboutPage.scss";
import { iconLinks } from "./data";

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
          About <span>Me</span>
        </motion.h1>
        <h3 className="subtitle">I'm here to help you with your projects!</h3>

        <p className="description">
          Experienced Frontend Developer, I specialize in creating dynamic web applications using technologies such as JavaScript, React, Node, TypeScript and more. My focus is on optimizing user experience through innovative solutions and clean, efficient code. I continuously seek
          to stay ahead of industry trends and am committed to personal growth and professional development in the tech field.
        </p>
        <div className="icons-wrapp">
          {iconLinks.map(({ link, icon }, index) => (
            <a href={link} key={index} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          ))}
        </div>
        <a href="/VictorTyslenko_CV/Frontend-Developer_CV.pdf" className="cv-link" download="Frontend-Developer_CV.pdf">
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
        <img src="/img/about-me_image.png" alt="portfolio" />
      </motion.div>
    </div>
  );
};

export default AboutPage;
