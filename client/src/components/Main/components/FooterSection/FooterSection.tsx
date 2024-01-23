import ContactSection from "../ContactSection/ContactSection";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "../../../../styles/global.scss";
import "./footerSection.scss";

const FooterSection = () => {
  return (
    <section className="footer-container">
      <div className="global-container">
        <ContactSection />
        <div className="footer-wrapp">
          <h1 className="title">vtyslenko</h1>
          <div className="icons-wrapp">
            <a
              className="icons-link"
              href="https://www.facebook.com/VictorTyslenko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
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
              href="https://www.linkedin.com/in/vic-tyslenko/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
