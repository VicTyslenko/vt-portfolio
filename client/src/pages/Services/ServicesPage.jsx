import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../components/Button/Button";
import { DiResponsive } from "react-icons/di";
import Slider from "react-slick";
import "./servicesPage.scss";
const ServicesPage = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="services-page-container">
      <motion.h1 className="title">
        My <span>services</span>
      </motion.h1>
      <div className="services-wrapp">
        <Slider {...settings}>
          <div className="services-item">
            <div className="icon-wrapp">
              {/* <DiResponsive className="icons" /> */}
              icon
            </div>
            <h3 className="service-name">Responsive Web Design</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              commodi. Accusantium dicta commodi voluptate quibusdam.
            </p>
            <Button type="button">Learn more</Button>
          </div>
          <div className="services-item">
            <div className="icon-wrapp"></div>
            <h3 className="service-name">User Interface Design</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              commodi. Accusantium dicta commodi voluptate quibusdam.
            </p>
            <Button type="button">Learn more</Button>
          </div>
          <div className="services-item">
            <div className="icon-wrapp"></div>
            <h3 className="service-name">User Experience Optimization</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              commodi. Accusantium dicta commodi voluptate quibusdam.
            </p>
            <Button type="button">Learn more</Button>
          </div>
        </Slider>
      </div>
      <Button type="button" className="services-btn">
        Load more
      </Button>
    </div>
  );
};

export default ServicesPage;
