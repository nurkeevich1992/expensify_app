import React from "react";
import Option from "./Option";

interface OptionsProps {
    options: string[];
    handleDeleteOption: (option: string) => void;
    handleDeleteOptions: () => void;
}

const Options = (props: OptionsProps) => {
    return (
        <div>
            <div>
                {props.options.map(option => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))}
                <button onClick={props.handleDeleteOptions}>Remove All</button>
                {props.options.length === 0 && (
                    <p>Please enter some options to get started!</p>
                )}
            </div>
        </div>
    );
};

export default Options;
