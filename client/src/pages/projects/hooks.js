import { useState } from "react";
import { projectsData } from "shared/data/projects";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "reducers/modalReducer";
export const useProjectsPage = () => {
  const dispatch = useDispatch();
  const [selectedProject, setSelectedProject] = useState(null);

  const [data, setData] = useState(() => projectsData.filter((_, index) => index <= 5));

  const modal = useSelector((state) => state.modal.isModalOpen);

  const handleMore = () => {
    setData(projectsData);
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    dispatch(openModal());
  };

  return { data, handleMore, modal, handleOpenModal, selectedProject };
};
