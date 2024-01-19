import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaSquareGithub } from "react-icons/fa6";
import Button from "../../../Button/Button";
import "../../../../styles/global.scss";
import "./mainSection.scss";
const MainSection = () => {
  const someFunction = () => {};
  return (
    <>
      <section className="main-section">
        {/* <div className="main-info">
          <h1 className="title">Victor Tyslenko</h1>
          <h2 className="subtitle">Frontend Developer</h2>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            facere iure, sit laboriosam est ducimus illo ipsam et nesciunt
            similique.
          </p>
          <div className="contact-icons">
            <Link
              className="icon"
              to="https://www.linkedin.com/in/vic-tyslenko/"
            >
              <FaLinkedin />
            </Link>
            <Link to="https://www.facebook.com/VictorTyslenko">
              <FaFacebook />
            </Link>
            <Link to="https://github.com/VicTyslenko">
              <FaSquareGithub />
            </Link>
          </div>
          <a
            className="download-link"
            href="/VictorTyslenko_CV/Frontend-Developer_CV.pdf"
            download="VictorTyslenko_CV.pdf"
          >
            <Button
              type="button"
              onClick={someFunction}
              className="download-cv-btn"
            >
              Download CV
            </Button>
          </a>
        </div>

        <div className="image-wrapp">
          <img
            className="main-image"
            src="/img/portfolio-pro-photo.webp"
            alt="Portfolio"
          />
        </div>
        {/* <div className="divider">
          <hr />
        </div> */}
      </section>
    </>
  );
};

export default MainSection;
