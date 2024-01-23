import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaSquareGithub } from "react-icons/fa6";
import Button from "../../../Button/Button";
import "../../../../styles/global.scss";
import "./mainSection.scss";
const MainSection = () => {
  return (
    <section className="main-section">
      <div className="global-container">
        <div className="image-wrapp">
          <img className="main-image" src="/img/Subject.png" alt="portfolio" />
        </div>
        <div className="main-text">
          <h1 className="title">
            I'm <span className="title-name">Victor Tyslenko</span>{" "}
          </h1>
          <p className="subtitle">Frontend Web Developer</p>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed totam
            facilis et laborum est atque.
          </p>
        </div>
        {/* <div className="devider-wrapp"> */}
        <hr className="devider" />
        {/* </div> */}
      </div>
    </section>
  );
};

export default MainSection;
