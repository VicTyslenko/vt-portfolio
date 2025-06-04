import ServicesItem from "../services-item/services-item";
import ServicesModal from "../../../components/modal/services-modal/services-modal";
import { globalAnimation } from "../../../animations/animations";
import { useServices } from "./hooks";
import Slider from "react-slick";
import { servicesData } from "../data";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./servicesPage.scss";

const sliderSettings = {
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 3,
};

export const ServicesPage = () => {
  const { modal, handleOpenModal, selectedItem } = useServices();

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
        <Slider {...sliderSettings}>
          {servicesData.map((item, index) => (
            <ServicesItem
              key={index}
              title={item.title}
              shortDescription={item.shortDescription}
              description={item.description}
              icon={item.icon}
              action={() => handleOpenModal(item)}
            />
          ))}
        </Slider>
      </motion.div>
      {modal && <ServicesModal description={selectedItem.description} subtitle={selectedItem.title} />}
    </div>
  );
};
