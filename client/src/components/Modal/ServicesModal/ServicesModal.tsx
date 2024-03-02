import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../reducers/modalReducer";
import Box from "@mui/material/Box";
import { RootState } from "../../../store";

import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ServicesModalProps {
  subtitle: string;
  description: string;
}

const ServicesModal: React.FC<ServicesModalProps> = ({
  subtitle,
  description,
}) => {
  const dispatch = useDispatch();


  const open = useSelector((state: RootState) => state.modal.isModalOpen);
  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 className="subtitle">{subtitle}</h3>
          <p className="description">{description}</p>
        </Box>
      </Modal>
    </>
  );
};

export default ServicesModal;
