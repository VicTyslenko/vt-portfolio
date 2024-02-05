import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaSquareGithub } from "react-icons/fa6";
import Button from "../../../Button/Button";
import SubmitModal from "../../../Modal/Modal";
import { globalAnimation } from "../../../../animations/animations";
import { motion } from "framer-motion";
import "../../../../styles/global.scss";
import "./mainSection.scss";
const MainSection = () => {
  return (
    <section className="main-section">
      <div className="global-container">
        <motion.div
          className="image-wrapp"
          {...globalAnimation({
            yInitial: 60,
            duration: 0.8,
          })}
        >
          <img className="main-image" src="/img/Subject.png" alt="portfolio" />
        </motion.div>
        <motion.div
          className="main-text"
          {...globalAnimation({
            yInitial: -40,
            duration: 0.8,
          })}
        >
          <h1 className="title">
            I'm <span className="title-name">Victor Tyslenko</span>{" "}
          </h1>
          <motion.p
            className="subtitle"
            {...globalAnimation({
              yInitial: 0,
              xInitial: -40,
              duration: 0.8,
            })}
          >
            Frontend Web Developer
          </motion.p>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed totam
            facilis et laborum est atque.
          </p>
          <div className="wrapp">
            <a
              href="/public/VictorTyslenko_CV/Frontend-Developer_CV.pdf"
              className="cv-link"
              download="Frontend-Developer_CV.pdf"
            >
              Download CV
            </a>
          </div>
        </motion.div>
        {/* <div className="devider-wrapp"> */}
        <hr className="devider" />
        {/* </div> */}
      </div>
    </section>
  );
};

export default MainSection;
