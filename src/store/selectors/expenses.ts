import { Expense } from "../expenses/Expense";
import { FilterState } from "../filters/types";

export default (
    expenses: Expense[],
    { startDate, endDate, sortBy, text }: FilterState
) => {
    return expenses
        .filter(expense => {
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
        })
        .sort((a, b) => {
            if (sortBy === "date") {
                if (a.createdAt === undefined) {
                    return 0;
                } else if (b.createdAt === undefined) {
                    return 0;
                }
                return a.createdAt < b.createdAt ? 1 : -1;
            } else if (sortBy === "amount") {
                if (a.amount === undefined) {
                    return 0;
                } else if (b.amount === undefined) {
                    return 0;
                }
                return a.amount < b.amount ? 1 : -1;
            }
            return 0;
        });
};
