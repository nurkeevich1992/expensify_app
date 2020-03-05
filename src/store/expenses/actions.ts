import * as uuid from "uuid";
import { Expense } from "./Expense";
import {
    ADD_EXPENSE,
    EDIT_EXPENSE,
    REMOVE_EXPENSE,
    ExpenseActionTypes
} from "./types";

export const addExpense = (newExpense: Expense): ExpenseActionTypes => {
    return {
        type: ADD_EXPENSE,
        expense: {
            id: uuid,
            ...newExpense
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
