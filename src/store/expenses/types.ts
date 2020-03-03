export interface Expense {
    id: string;
    description: string;
    note: string;
    amount: number;
    createdAt: number;
}

export interface ExpenseState {
    expenses: Expense[];
}

export const ADD_EXPENSE = "ADD_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";
export const EDIT_EXPENSE = "EDIT EXPENSE";

interface AddExpense {
    type: typeof ADD_EXPENSE;
    expense: Expense;
}

interface RemoveExpense {
    type: typeof REMOVE_EXPENSE;
    id: string;
}

interface EditExpense {
    type: typeof EDIT_EXPENSE;
    id: string;
    updatedExpense: Expense;
}

export type ExpenseActionTypes = AddExpense | RemoveExpense | EditExpense;
