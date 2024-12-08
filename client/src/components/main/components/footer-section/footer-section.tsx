import ContactSection from "../contact-section/contact-section";

import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { scrollToTop } from "helpers";
import "styles/global.scss";
import "./footerSection.scss";

const FooterSection = () => {
  const handleScrollToTopClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    scrollToTop();
  };
  return (
    <section className="footer-container">
      <div className="global-container">
        <ContactSection />
        <div className="footer-wrapp">
          <h1 className="title" onClick={handleScrollToTopClick}>
            vtyslenko
          </h1>
          <div className="icons-wrapp">
            <a className="icons-link" href="https://www.linkedin.com/in/vic-tyslenko/" target="_blank" rel="noopener noreferrer">
              <TiSocialLinkedinCircular className="footer-icon-linkedin" />
            </a>

            <a className="icons-link" href="https://github.com/VicTyslenko" target="_blank" rel="noopener noreferrer">
              <FaGithub className="footer-icon" />
            </a>
            <a className="icons-link" href="https://www.facebook.com/VictorTyslenko" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="footer-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
