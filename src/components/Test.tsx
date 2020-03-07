import React from "react";

interface WithAdminWarningProps {
    isAdmin: boolean;
}

const withAdminWarning = <P extends object>(
    Component: React.ComponentType<P>
) =>
    class WithAdminWarning extends React.Component<P & WithAdminWarningProps> {
        render() {
            const { isAdmin, ...props } = this.props;
            return isAdmin ? (
                <p>you are the admin</p>
            ) : (
                <p>you are NOT the admin</p>
            );
        }
    };

export default withAdminWarning;
