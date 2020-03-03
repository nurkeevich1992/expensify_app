import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface EditExpensePageProps extends RouteComponentProps<{ id: string }> {
    //TODO: add custom props here
}

const EditExpensePage: React.FC<EditExpensePageProps> = props => {
    return <div>Editing the expense with id of {props.match.params.id}</div>;
};

export default EditExpensePage;
