import { Expense } from "../types/expenses";
import { FilterState } from "../types/filters";

const selectors = (
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

            console.log(`${startDateMatch} : ${endDateMatch} : ${textMatch}`);

            console.log("start date: " + startDate + " End date: " + endDate);

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

export default selectors;
