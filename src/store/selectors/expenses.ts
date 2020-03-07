import { Expense } from "../types/expenses";
import { FilterState } from "../types/filters";

const selectors = (
    expenses: Expense[],
    { startDate, endDate, sortBy, text }: FilterState
) => {
    return expenses.filter(expense => {
        const startDateMatch =
            typeof startDate !== "number" || expense.createdAt === undefined
                ? true
                : expense.createdAt >= startDate;

        const endDateMatch =
            typeof endDate !== "number" || expense.createdAt === undefined
                ? true
                : expense.createdAt <= endDate;

        const textMatch =
            expense.description === undefined
                ? true
                : expense.description
                      .toLowerCase()
                      .includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    });
};

export default selectors;
