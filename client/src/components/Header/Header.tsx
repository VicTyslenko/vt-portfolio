import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderVisibilityContext } from "../../context/headerVisibilityContext";
import { scrollToTop } from "../../helpers";
import "../../styles/global.scss";
import "./header.scss";

const Header: React.FC = () => {
  const navigation = useNavigate();
  //scrolling up on click
  const handleScrollToTopClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    scrollToTop();
    navigation("./home");
  };

  //making title invisible
  const { isVisible } = useContext(HeaderVisibilityContext);
  //adding Header background while scrolling down
  const [isScrolled, setIsScrolled] = useState(false);

  //adding background to Header whenn scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="global-container">
      <div
        className={`header-wrapper ${
          isScrolled ? "scrolled" : "scrolled-back"
        }`}
      >
        <Link className="title-link" to="./home">
          <h1 className={`title ${!isVisible ? "title-hidden" : ""}`}>
            Tyslenko.V
          </h1>
        </Link>
        <nav className="nav-bar">
          <Link
            className="nav-bar-link"
            onClick={handleScrollToTopClick}
            to="./home"
          >
            Home
          </Link>
          <Link className="nav-bar-link" to="./about">
            About
          </Link>
          <Link className="nav-bar-link" to="./projects">
            Projects
          </Link>
          <Link className="nav-bar-link" to="./services">
            Services
          </Link>

          <Link className="nav-bar-link" to="./contact">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
