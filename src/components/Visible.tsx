import React, { useState } from "react";

const Visible = () => {
    const [visible, setVisible] = useState(false);

    const handleToggleVisibily = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={handleToggleVisibily}>
                {visible ? "Hide Details" : "Show Details"}
            </button>
            {visible && (
                <div>
                    <p>Hey. There are some details you can now see!</p>
                </div>
            )}
        </div>
    );
};

export default Visible;
