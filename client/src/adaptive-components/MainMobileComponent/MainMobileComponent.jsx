// import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Button from "../../components/Button/Button";
import "./mainMobileComponent.scss";
const MainMobileComponent = () => {
  const icons = [
    {
      href: "https://www.linkedin.com/in/vic-tyslenko/",
      label: "LinkedIn",
      Icon: FaLinkedin,
    },
    {
      href: "https://github.com/VicTyslenko",
      label: "GitHub",
      Icon: FaGithub,
    },
    {
      href: "https://www.facebook.com/VictorTyslenko",
      label: "Facebook",
      Icon: FaFacebook,
    },
    {
      href: "https://www.facebook.com/VictorTyslenko",
      label: "Instagram",
      Icon: FaInstagram,
    },
  ];

  return (
    <div className="main-mobile-wrapp">
      <div className="main-mobile-content">
        <h2 className="greeting-text">
          Hello, <span>I am</span>
        </h2>
        <h1 className="title">Victor Tyslenko</h1>
        <p className="about-text">
          Crafting responsive, user-centric websites and web applications with
          the latest technologies for seamless digital experiences.
        </p>
        <div className="icons-wrapp">
          {icons.map(({ href, Icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="main-icons-link"
            >
              <Icon className="main-icon" />
            </a>
          ))}
        </div>

        <a
          href="/VictorTyslenko_CV/Frontend-Developer_CV.pdf"
          className="main-mobile-link"
          download="Frontend-Developer_CV.pdf"
        >
          <Button className="main-mobile-button"> Download CV</Button>
        </a>
      </div>
    </div>
  );
};

export default MainMobileComponent;
