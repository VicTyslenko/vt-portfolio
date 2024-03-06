import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ServicesItem from "../ServicesItem/ServicesItem";
import ServicesModal from "../../../components/Modal/ServicesModal/ServicesModal";
import { globalAnimation } from "../../../animations/animations";
import usePathParameters from "../../../hooks/usePathParameters";
import { dataFetch, fetchItemById } from "../../../reducers/dataReducer";
import { openModal } from "../../../reducers/modalReducer";
import Slider from "react-slick";
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

const ServicesPage = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal.isModalOpen);
  const servicesData = useSelector((state) => state.collections.data);
  const selectedService = useSelector(
    (state) => state.collections.selectedItem
  );
  const handleOpen = () => {
    dispatch(openModal());
  };
  const { collectionName } = usePathParameters();
  useEffect(() => {
    dispatch(dataFetch({ collectionName }));
  }, [dispatch, collectionName]);

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
          {servicesData.map(
            ({ title, shortDescription, description, icon, _id }, index) => (
              <ServicesItem
                key={index}
                title={title}
                shortDescription={shortDescription}
                description={description}
                icon={icon}
                action={() => {
                  handleOpen();
                  dispatch(fetchItemById({ collectionName, _id }));
                }}
              />
            )
          )}
        </Slider>
      </motion.div>
      {modal && (
        <ServicesModal
          key="services-modal"
          subtitle={selectedService?.title}
          description={selectedService?.description}
        />
      )}
    </div>
  );
};

export default ServicesPage;
