import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ServicesItem from "../services-item/services-item";
import ServicesModal from "../../../components/modal-temp/services-modal/services-modal";
import { globalAnimation } from "../../../animations/animations";
import { dataFetch, fetchItemById } from "../../../reducers/dataReducer";
import { openModal } from "../../../reducers/modalReducer";
import PuffLoader from "react-spinners/PuffLoader";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();

  const dispatch = useDispatch();

  const modal = useSelector((state) => state.modal.isModalOpen);

  const servicesData = useSelector((state) => state.collections.data);

  const selectedService = useSelector((state) => state.collections.selectedItem);

  const loader = useSelector((state) => state.collections.isLoading);

  useEffect(() => {
    dispatch(dataFetch({ collectionName: location.pathname }));
  }, [dispatch, location]);

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
        {!loader ? (
          <Slider {...sliderSettings}>
            {servicesData.map(({ title, shortDescription, description, icon, _id }, index) => (
              <ServicesItem
                key={index}
                title={title}
                shortDescription={shortDescription}
                description={description}
                icon={icon}
                action={() => {
                  dispatch(openModal());
                  dispatch(fetchItemById({ collectionName: location.pathname, _id }));
                }}
              />
            ))}
          </Slider>
        ) : (
          <div className="loader-wrapp">
            <PuffLoader size="100px" color="#fff" />
          </div>
        )}
      </motion.div>
      {modal && <ServicesModal key="services-modal" subtitle={selectedService?.title} description={selectedService?.description} />}
    </div>
  );
};
