import React from "react";
import * as history from "history";

interface EditExpensePageProps {
    location?: history.Location;
    history?: history.History;
}

const EditExpensePage = (props: EditExpensePageProps) => {
    return <div>This is from my Edit expense page</div>;
};

export default EditExpensePage;
