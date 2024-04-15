import { useEffect } from "react";

import { globalAnimation } from "../../../../animations/animations";

import { motion } from "framer-motion";
import "../../../../styles/global.scss";
import "./mainSection.scss";
const MainSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="main-section">
      <div className="global-container">
        <div className="absolute-wrapp">
          <div className="block-absolute">
            <p className="title">V.Tyslenko</p>
          </div>

          <motion.div
            className="image-wrapp"
            {...globalAnimation({
              yInitial: 60,
              duration: 0.8,
            })}
          >
            <img
            className="main-image"
            src={`${process.env.PUBLIC_URL}/img/portfolio_image.png`}
            alt="portfolio"
          />
          </motion.div>
        </div>

        <motion.div
          className="main-text"
          {...globalAnimation({
            yInitial: -40,
            duration: 0.8,
          })}
        >
          <h1 className="title">
            I'm <span className="title-name">Victor Tyslenko</span>
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
            Crafting responsive, user-centric websites and web applications with
            the latest technologies for seamless digital experiences.
          </p>
        </motion.div>

        <hr className="divider" />
      </div>
    </section>
  );
};

export default MainSection;
