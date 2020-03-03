import {
    Expense,
    ADD_EXPENSE,
    EDIT_EXPENSE,
    REMOVE_EXPENSE,
    ExpenseState,
    ExpenseActionTypes
} from "./types";
import { stat } from "fs";

const initialState: ExpenseState = {
    expenses: []
};

export const expenseReducer = (
    state = initialState,
    action: ExpenseActionTypes
): ExpenseState => {
    switch (action.type) {
        case ADD_EXPENSE:
            return {
                expenses: [...state.expenses, action.expense]
            };

        case REMOVE_EXPENSE:
            return {
                expenses: state.expenses.filter(
                    expense => expense.id !== action.id
                )
            };

        case EDIT_EXPENSE:
            return {
                expenses: state.expenses.map(expense => {
                    if (expense.id === action.id) {
                        return {
                            ...expense
                        };
                    } else {
                        return expense;
                    }
                })
            };

        default:
            return state;
    }
};
