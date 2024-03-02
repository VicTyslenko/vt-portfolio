import { GrTechnology } from "react-icons/gr";
import { GrOptimize } from "react-icons/gr";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiAmazoncloudwatch } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import ResponsiveIcon  from "./ResponsiveIcon";

const icons = {
  responsive: <ResponsiveIcon />,
  frontend: <GrTechnology />,
  optimize: <GrOptimize />,
  design: <MdOutlineDesignServices />,
  cloud: <SiAmazoncloudwatch />,
  api: <TbApi />,
};

export default icons;
