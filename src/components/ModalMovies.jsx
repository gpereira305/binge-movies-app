import React, { useState, useEffect, useRef } from "react";
import { Modal, ModalContent } from "../styles/ModalStyled";

const ModalMovies = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <Modal id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </Modal>
  );
};

const ModalMoviesContent = (props) => {
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };

  return (
    <ModalContent ref={contentRef}>
      {props.children}
      <div onClick={closeModal}>
        <span class="material-icons">close</span>
      </div>
    </ModalContent>
  );
};

export default ModalMovies;
