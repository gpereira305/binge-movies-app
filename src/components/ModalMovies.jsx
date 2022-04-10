import React, { useState, useEffect, useRef } from "react";
// import { Modal, ModalContent } from "../styles/ModalStyled";

const ModalMovies = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

export const ModalMoviesContent = (props) => {
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };

  return (
    <div className="modal__content" ref={contentRef}>
      {props.children}
      <div
        className="modal__content--close"
        onClick={closeModal}
        title="Fechar"
      >
        <span className="material-icons">close</span>
      </div>
    </div>
  );
};

export default ModalMovies;
