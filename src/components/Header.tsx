import React from "react";

interface HeaderProps {
    title: string;
    subTitle?: string;
}

const Header = (props: HeaderProps) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: "Indecision App"
} as Partial<HeaderProps>;

export default Header;
