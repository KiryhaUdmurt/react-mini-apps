import "./Modal.css";
import kitty from "../../utils/images/kotenok_yyaauauauae.gif";
import React from "react";

function Modal() {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="modal">
      <button className="modal__open-btn" type="button" onClick={openModal}>
      &#128711; Don&apos;t click! &#128711;
      </button>
      {isOpen && (
        <div className="modal__overlay">
          <div className="modal__modal">
            <button
              className="modal__close-btn"
              type="button"
              onClick={closeModal}
              title="F*CK GO BACK!!!"
            ></button>
            <img className="modal__content" src={kitty} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Modal;
