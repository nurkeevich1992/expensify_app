import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../store/actions/expenses";

const ExpenseListItem = ({
    dispatch,
    id,
    description,
    amount,
    createdAt
}: any) => {
    const handleRemoveExpense = () => {
        dispatch(removeExpense(id));
    };

    return (
        <div>
            <h3>{description}</h3>
            <p>
                {amount} -{createdAt}
            </p>
            <button onClick={handleRemoveExpense}>Remove</button>
        </div>
    );
};

export default connect()(ExpenseListItem);
