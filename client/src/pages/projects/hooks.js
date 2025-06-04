import { useState } from "react";
import { projectsData } from "shared/data/projects";
import { useSelector } from "react-redux";

export const useProjectsPage = () => {
  const [data, setData] = useState(() => projectsData.filter((_, index) => index <= 5));

  const modal = useSelector((state) => state.modal);

  const handleMore = () => {
    setData(projectsData);
  };

  return { data, handleMore, modal };
};
