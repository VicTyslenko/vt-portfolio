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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sunt
          doloribus nobis, veniam suscipit esse odio. Porro cum ex enim
          aspernatur! Tenetur ex voluptatum nesciunt libero obcaecati soluta
          consequuntur ullam labore, eum, sed officia nihil rem qui explicabo
          exercitationem atque.
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
