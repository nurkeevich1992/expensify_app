import React from "react";

interface OptionProps {
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
        <div>
            {props.optionText}
            <button onClick={handleDelete}>Remove</button>
        </div>
    );
};

export default Option;
