import React from "react";

interface RequireAuthenticationProps {
    isAuthenticated: boolean;
}

const requireAuthentication = <P extends object>(
    Component: React.ComponentType<P>
) =>
    class RequireAuthentication extends React.Component<
        P & RequireAuthenticationProps
    > {
        render() {
            const { isAuthenticated, ...props } = this.props;
            return isAuthenticated ? (
                <p>You have been authenticated: This message is only for you</p>
            ) : (
                <Component {...(props as P)} />
            );
        }
    };

export default requireAuthentication;
