import { GrTechnology } from "react-icons/gr";
import { GrOptimize } from "react-icons/gr";
import { MdOutlineDesignServices, MdCloud } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import ResponsiveIcon  from "./ResponsiveIcon";

const icons = {
  responsive: <ResponsiveIcon />,
  frontend: <GrTechnology />,
  optimize: <GrOptimize />,
  design: <MdOutlineDesignServices />,
  cloud: <MdCloud />,
  api: <TbApi />,
};

export default icons;
