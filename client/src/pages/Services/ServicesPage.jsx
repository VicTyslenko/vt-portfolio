import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../components/Button/Button";
import { GrTechnology } from "react-icons/gr";
import { GrOptimize } from "react-icons/gr";
import { MdOutlineDesignServices } from "react-icons/md";
import { globalAnimation } from "../../animations/animations";
import { SiAmazoncloudwatch } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Slider from "react-slick";
import "./servicesPage.scss";
const ServicesPage = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const iconsStyle = {
    width: 40,
    height: 40,
    color: "#1f9cbe",
  };
  return (
    <div className="services-page-container">
      <motion.h1
        className="title"
        {...globalAnimation({
          yInitial: -30,
        })}
      >
        My <span>services</span>
      </motion.h1>
      <motion.div
        className="services-wrapp"
        {...globalAnimation({
          yInitial: 30,
        })}
      >
        <Slider {...settings}>
          <div className="services-item">
            <div className="flex-content">
              <div className="icon-wrapp">
                {/* <DiResponsive className="icons" /> */}
                <svg
                  height="40"
                  viewBox="0 0 30 30"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 24.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zM23.5 12h2c.277 0 .5.223.5.5s-.223.5-.5.5h-2c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-3-2c-.822 0-1.5.678-1.5 1.5v14c0 .822.678 1.5 1.5 1.5h8c.822 0 1.5-.678 1.5-1.5v-14c0-.822-.678-1.5-1.5-1.5zm0 1h8c.286 0 .5.214.5.5v14c0 .286-.214.5-.5.5h-8c-.286 0-.5-.214-.5-.5v-14c0-.286.214-.5.5-.5zM14 19.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zM1.5 3C.678 3 0 3.678 0 4.5v16c0 .822.678 1.5 1.5 1.5H11v2H9.5c-.277 0-.5.223-.5.5s.223.5.5.5h8c.277 0 .5-.223.5-.5s-.223-.5-.5-.5H16v-2h1.5c.668 0 .656-1 0-1h-16c-.286 0-.5-.214-.5-.5V18h16.5c.277 0 .5-.223.5-.5s-.223-.5-.5-.5H1V4.5c0-.286.214-.5.5-.5h24c.286 0 .5.214.5.5v4c0 .665 1 .657 1 0v-4c0-.822-.678-1.5-1.5-1.5zM12 22h3v2h-3z"
                    fill="#1f9cbe"
                  />
                </svg>
              </div>
              <h3 className="service-name">Responsive Web Design</h3>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                commodi. Accusantium dicta commodi voluptate quibusdam.
              </p>
              <Button type="button" className="services-btn">
                Learn more
              </Button>
            </div>
          </div>

          <div className="services-item">
            <div className="icon-wrapp">
              <GrTechnology style={iconsStyle} />
            </div>
            <h3 className="service-name">Frontend Development Technologies</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              commodi. Accusantium dicta commodi voluptate quibusdam.
            </p>
            <Button type="button" className="services-btn">
              Learn more
            </Button>
          </div>
          <div className="services-item">
            <div className="icon-wrapp">
              <GrOptimize style={iconsStyle} />
            </div>
            <h3 className="service-name">User Experience Optimization</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              commodi. Accusantium dicta commodi voluptate quibusdam.
            </p>
            <Button type="button" className="services-btn">
              Learn more
            </Button>
          </div>
          <div className="services-item">
            <div className="icon-wrapp">
              <MdOutlineDesignServices style={iconsStyle} />
            </div>
            <h3 className="service-name">User Interface Design</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              commodi. Accusantium dicta commodi voluptate quibusdam.
            </p>
            <Button type="button" className="services-btn">
              Learn more
            </Button>
          </div>
          <div className="services-item">
            <div className="icon-wrapp">
              <SiAmazoncloudwatch style={iconsStyle} />
            </div>
            <h3 className="service-name">
              Cloud Infrastructure Setup and Management
            </h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              commodi. Accusantium dicta commodi voluptate quibusdam.
            </p>
            <Button type="button" className="services-btn">
              Learn more
            </Button>
          </div>
          <div className="services-item">
            <div className="icon-wrapp">
              <TbApi style={iconsStyle} />
            </div>
            <h3 className="service-name">RESTful API Development</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              commodi. Accusantium dicta commodi voluptate quibusdam.
            </p>
            <Button type="button" className="services-btn">
              Learn more
            </Button>
          </div>
        </Slider>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
