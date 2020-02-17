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
                <div className="widget-header">
                    <h3 className="widget-header__title">Your options</h3>
                    <button
                        onClick={props.handleDeleteOptions}
                        className="button--link"
                    >
                        Remove All
                    </button>
                </div>
                {props.options.map((option, index) => (
                    <Option
                        key={option}
                        optionText={option}
                        count={index + 1}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))}
                {props.options.length === 0 && (
                    <p className="widget__message">
                        Please enter some options to get started!
                    </p>
                )}
            </div>
        </div>
    );
};

export default Options;
