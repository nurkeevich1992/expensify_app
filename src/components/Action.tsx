import React from "react";

interface ActionProps {
    hasOptions: boolean;
    handlePick: () => void;
}

const Action = (props: ActionProps) => {
    return (
        <button
            className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            What should I do?
        </button>
    );
};

export default Action;
