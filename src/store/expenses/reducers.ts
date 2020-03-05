import {
    ADD_EXPENSE,
    EDIT_EXPENSE,
    REMOVE_EXPENSE,
    ExpensesState,
    ExpenseActionTypes
} from "./types";

const initialState: ExpensesState = {
    expenses: []
};

export const expensesReducer = (
    state = initialState,
    action: ExpenseActionTypes
): ExpensesState => {
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
