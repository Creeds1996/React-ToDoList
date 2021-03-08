import { createPortal } from "react-dom";
import "./Modal.css";

const Modal = (props) => {
  const ModalContent = (
    <div
      onClick={(event) => {
        return event.target.className === "Backdrop" && props.onClose();
      }}
      className="Backdrop"
    >
      <div className="Modal">
        <button className="Modal-Close" onClick={props.onClose}>
          X
        </button>
        {props.children}
      </div>
    </div>
  );

  return createPortal(ModalContent, document.getElementById("modal-portal"));
};

export default Modal;
