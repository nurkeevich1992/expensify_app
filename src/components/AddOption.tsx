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
            {error && <p>{error}</p>}
            <input type="text" value={input} onChange={handleChange} />
            <button onClick={handleClick}>Add Option</button>
        </div>
    );
};

export default AddOption;
