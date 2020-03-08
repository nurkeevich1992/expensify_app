import { v4 as uuid } from "uuid";
import {
    Expense,
    ADD_EXPENSE,
    EDIT_EXPENSE,
    REMOVE_EXPENSE,
    ExpenseActionTypes
} from "../types/expenses";

export const addExpense = ({
    description = "",
    note = "",
    amount = 0,
    createdAt = 0
}: Expense = {}): ExpenseActionTypes => {
    return {
        type: ADD_EXPENSE,
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    };
};

export const removeExpense = (id: string): ExpenseActionTypes => {
    return {
        type: REMOVE_EXPENSE,
        id
    };
};

export const editExpense = (id: string, updatedExpense: Expense) => {
    return {
        type: EDIT_EXPENSE,
        id,
        updatedExpense
    };
};
