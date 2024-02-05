import Button from "../../components/Button/Button";
import { globalAnimation } from "../../animations/animations";
import { motion } from "framer-motion";
import "./aboutPage.scss";
const AboutPage = () => {
  const someFn = () => {};
  return (
    <div className="about-page-container">
      <motion.div
        className="about-info"
        {...globalAnimation({
          yInitial: 0,
          xInitial: -60,
        })}
      >
        <motion.h1
          className="title"
          {...globalAnimation({
            yInitial: -50,
          })}
        >
          About <span>me</span>
        </motion.h1>
        <h3 className="subtitle">I'm here to help you with your projects!</h3>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sunt
          doloribus nobis, veniam suscipit esse odio. Porro cum ex enim
          aspernatur! Tenetur ex voluptatum nesciunt libero obcaecati soluta
          consequuntur ullam labore, eum, sed officia nihil rem qui explicabo
          exercitationem atque.
        </p>
        <div className="btn-wrapp">
          <Button type="button" onClick={someFn} className="about-btn">
            Read more
          </Button>
        </div>
      </motion.div>
      <motion.div
        className="image-wrapp"
        {...globalAnimation({
          yInitial: 0,
          xInitial: 60,
          duration: 0.8,
        })}
      >
        <img src="/img/about-me-image.JPG" alt="portfolio" />
      </motion.div>
    </div>
  );
};

export default AboutPage;
