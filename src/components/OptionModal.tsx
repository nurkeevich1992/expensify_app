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
        >
            <h3>Selected option</h3>
            <p>{props.selectedOption}</p>
            <button onClick={props.handleCloseModalOption}>OK</button>
        </Modal>
    );
};

export default OptionModal;
