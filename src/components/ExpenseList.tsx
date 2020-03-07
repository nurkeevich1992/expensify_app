import React from "react";
import { connect } from "react-redux";
import { AppState } from "../store/store";
import ExpenseListItem from "./ExpenseListItem";
import expenseSelector from "../store/selectors/expenses";

const ExpenseList = ({ expenses }: any) => {
    return (
        <div>
            <h1>Expense List</h1>
            {expenses.map((expense: any) => {
                return <ExpenseListItem {...expense} key={expense.id} />;
            })}
        </div>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        expenses: state.expenses.expenses
    };
};

export default connect(mapStateToProps)(ExpenseList);
