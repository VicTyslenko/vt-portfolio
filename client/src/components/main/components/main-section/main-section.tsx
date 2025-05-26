import { useEffect } from "react";

import { globalAnimation } from "animations";

import { motion } from "framer-motion";
import "styles/global.scss";
import "./mainSection.scss";

const MainSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="main-section">
      <div className="global-container">
        <div className="absolute-wrapp">
          <div className="block-absolute-title-wrapp">
            <p className="title">Tyslenko.V</p>
          </div>

          <motion.div
            className="image-wrapp"
            {...globalAnimation({
              yInitial: 60,
              duration: 0.8,
            })}
          >
            <motion.div
              className="main-text"
              {...globalAnimation({
                yInitial: -40,
                duration: 0.8,
              })}
            >
              <h1 className="title">
                I'm <span className="title-name">Victor Tyslenko</span>
                <div className=""></div>
              </h1>
              <motion.p
                className="subtitle"
                {...globalAnimation({
                  yInitial: 0,
                  xInitial: -40,
                  duration: 0.8,
                })}
              >
                Software Developer
              </motion.p>

              <p className="description">
                Experienced developer focused on creating responsive websites and applications, including user management systems, admin dashboards,
                commercial shops, utilizing modern technologies for optimized and engaging user experiences.
              </p>
            </motion.div>
            <img className="main-image" src="/img/portfolio_image.png" alt="portfolio" />
          </motion.div>
        </div>

        <hr className="divider" />
      </div>
    </section>
  );
};

export default MainSection;
