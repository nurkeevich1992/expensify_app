import React from "react";
import { Expense } from "../store/expenses/Expense";

const ExpenseListItem = ({ description, amount, createdAt }: Expense) => {
    return (
        <div>
            <h3>{description}</h3>
            <p>
                {amount} -{createdAt}
            </p>
        </div>
    );
};

export default ExpenseListItem;
