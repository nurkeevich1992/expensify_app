import React, { useState } from "react";

interface AddOptionProps {
    handleAddOption: (input: string) => undefined | string;
}

const AddOption = (props: AddOptionProps) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState<string | undefined>(undefined);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
    };

    const handleClick = () => {
        const error = props.handleAddOption(input);

        setError(error);
        if (!error) {
            setInput("");
        }
    };

    return (
        <div>
            {error && <p className="add-option-error">{error}</p>}
            <div className="add-option">
                <input
                    className="add-option__input"
                    type="text"
                    value={input}
                    onChange={handleChange}
                />
                <button onClick={handleClick} className="button">
                    Add Option
                </button>
            </div>
        </div>
    );
};

export default AddOption;
