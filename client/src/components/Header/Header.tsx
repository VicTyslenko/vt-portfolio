import { Link } from "react-router-dom";
import { MdOutlineNightlightRound } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { useState, useEffect } from "react";
import "../../styles/global.scss";
import "./header.scss";

const Header = () => {
  const [isNightTheme, setIsNightTheme] = useState(() => {
    return localStorage.getItem("theme") === "night";
  });
  useEffect(() => {
    localStorage.setItem("theme", isNightTheme ? "night" : "day");
    document.body.classList.toggle("night-theme", isNightTheme);
  }, [isNightTheme]);
  return (
    <div className="global-container">
      <div className="header-wrapper">
        <Link className="home-link" to="./home">
          <h1 className="title">Tyslenko.V</h1>
        </Link>
        <nav className="nav-bar">
          <Link className="nav-bar-link" to="./home">
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
          <button
            className={isNightTheme ? "theme-btn night" : "theme-btn day"}
            onClick={() => setIsNightTheme(!isNightTheme)}
          >
            {isNightTheme ? (
              <WiDaySunny
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
            ) : (
              <MdOutlineNightlightRound
                style={{
                  width: "15px",
                  height: "15px",
                }}
              />
            )}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
