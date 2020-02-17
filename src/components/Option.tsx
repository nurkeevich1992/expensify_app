import React from "react";

interface OptionProps {
    count: number;
    optionText: string;
    handleDeleteOption: (option: string) => void;
}

const Option = (props: OptionProps) => {
    const handleDelete = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        props.handleDeleteOption(props.optionText);
    };

    return (
        <div className="option">
            <p className="option__text">
                {props.count}. {props.optionText}
            </p>
            <button onClick={handleDelete} className="button--link">
                Remove
            </button>
        </div>
    );
};

export default Option;
