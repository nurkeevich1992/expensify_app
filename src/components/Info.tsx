import React from "react";

interface InfoProps {
    info: string;
}

const Info = (props: InfoProps) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

export default Info;
