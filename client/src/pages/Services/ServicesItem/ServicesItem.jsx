import Button from "../../../components/Button/Button";

import { FaConnectdevelop } from "react-icons/fa";
import icons from "../icons";
import "./servicesItem.scss";

const ServicesItem = ({ title, shortDescription, icon, action }) => {
  const IconComponent = icon ? icons[icon] : <FaConnectdevelop />;

  return (
    <div className="services-item">
      <div className="flex-content">
        <div className="icon-wrapp">{IconComponent}</div>
        <h3 className="service-name">{title}</h3>
        <p className="description">{shortDescription}</p>
        <Button type="button" className="services-btn" onClick={action}>
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default ServicesItem;
