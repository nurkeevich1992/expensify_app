import React from "react";
import Modal from "react-modal";

interface OptionModalProps {
    selectedOption: string;
    handleCloseModalOption: () => void;
}

const OptionModal = (props: OptionModalProps) => {
    return (
        <Modal
            isOpen={props.selectedOption.length > 0}
            contentLabel="ContentLabel"
            ariaHideApp={false}
            onRequestClose={props.handleCloseModalOption}
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected option</h3>
            <p className="modal__body">{props.selectedOption}</p>
            <button className="button" onClick={props.handleCloseModalOption}>
                OK
            </button>
        </Modal>
    );
};

export default OptionModal;
