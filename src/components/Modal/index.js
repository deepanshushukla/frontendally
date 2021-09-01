import ReactDOM from "react-dom";
import "./index.scss";
import PropTypes from 'prop-types';

const Modal = ({ toggleModal, children }) => {
  return ReactDOM.createPortal(
    <div className="modalContainer" onClick={toggleModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <header className="modal_header">
          <button className="close" onClick={toggleModal}>
            X
          </button>
        </header>
        <main className="modal_content"> {children} </main>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
