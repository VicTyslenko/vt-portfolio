import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../reducers/modalReducer";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import { RootState } from "../../../store";
import "./services-modal.scss";

import Modal from "@mui/material/Modal";

interface ServicesModalProps {
  subtitle: string;
  description: Array<string>;
}

const ServicesModal: React.FC<ServicesModalProps> = ({
  subtitle,
  description,
}) => {
  //modal animation styles
  const fadeInOut = {
    hidden: { opacity: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, transition: { duration: 0.9 } },
    // exit: { opacity: 0, transition: { duration: 0.9 } },
  };

  const dispatch = useDispatch();

  const open = useSelector((state: RootState) => state.modal.isModalOpen);
  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <Modal open={open} onClose={handleClose} disableScrollLock={true}>
      <motion.div
        variants={fadeInOut}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Box className="services-modal-wrapp">
          <h2 className="main-title">
            What I use to provide an excellent<span>{subtitle}</span>
          </h2>
          <ol className="description-list">
            {description?.map((listItem, index) => (
              <li className="description-list-item" key={index}>
                {listItem}
              </li>
            ))}
          </ol>
        </Box>
      </motion.div>
    </Modal>
  );
};

export default ServicesModal;
