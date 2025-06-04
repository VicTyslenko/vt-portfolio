import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { openModal } from "reducers/modalReducer";

export const useServices = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal.isModalOpen);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    dispatch(openModal());
  };

  return { modal, handleOpenModal, selectedItem };
};
