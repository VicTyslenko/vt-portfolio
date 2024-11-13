import Box from "@mui/material/Box";
import { closeModal } from "../../../reducers/modalReducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import Button from "../../../components/button-component/Button";
import Modal from "@mui/material/Modal";
import "./success-modal.scss";
const SuccessModal = () => {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.modal.isModalOpen);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box className="success-modal-wrapp">
          <h2 className="title">
            <span>Thank</span> you!
          </h2>
          <p className="subtitle">I will come back to you soon!</p>
          <Button onClick={handleClose} className="confirm-button" type="button">
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
export default SuccessModal;
