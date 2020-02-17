import React, { useState, useEffect } from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

interface IndecisionAppProps {
    options: string[];
}

const IndecisionApp = (props: IndecisionAppProps) => {
    const subTitle = "Put your life in the hand of a computer.";
    const [options, setOptions] = useState<string[]>(props.options);
    const [update, setUpdate] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    // use effect when its mount
    useEffect(() => {
        try {
            const json = localStorage.getItem("options");
            if (json) {
                const opts = JSON.parse(json);
                setOptions(opts);
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    // use effect when updating
    useEffect(() => {
        if (update) {
            const json = JSON.stringify(options);
            localStorage.setItem("options", json);
        } else {
            setUpdate(true);
        }
    }, [options, update]);

    const handleDeleteOptions = () => {
        setOptions([]);
    };

    const handleDeleteOption = (optionToRemove: string) => {
        setOptions(options.filter(option => option !== optionToRemove));
    };

    const handlePick = () => {
        const randomNumber = Math.floor(Math.random() * options.length);
        const randomOption = options[randomNumber];
        setSelectedOption(randomOption);
    };

    const handleAddOption = (option: string) => {
        if (!option) return "Enter value to add item";
        if (options.indexOf(option) > -1) return "This option already exists";

        setOptions(options.concat(option));
    };

    const handleCloseModalOption = () => {
        setSelectedOption("");
    };

    return (
        <div className="App">
            <Header subTitle={subTitle} />
            <div className="container">
                <Action
                    hasOptions={options.length > 0}
                    handlePick={handlePick}
                />
                <Options
                    options={options}
                    handleDeleteOption={handleDeleteOption}
                    handleDeleteOptions={handleDeleteOptions}
                />
                <AddOption handleAddOption={handleAddOption} />
            </div>
            <OptionModal
                selectedOption={selectedOption}
                handleCloseModalOption={handleCloseModalOption}
            />
        </div>
    );
};

IndecisionApp.defaultProps = {
    options: []
} as Partial<IndecisionAppProps>;

export default IndecisionApp;
