import {
    ADD_EXPENSE,
    EDIT_EXPENSE,
    REMOVE_EXPENSE,
    ExpenseState,
    ExpenseActionTypes
} from "./types";

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
                    if (expense.id === action.expense.id) {
                        return {
                            ...expense,
                            ...action.expense
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
