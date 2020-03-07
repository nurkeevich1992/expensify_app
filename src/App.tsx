import React from "react";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import AppRouter from "./router/AppRouter";
import { store } from "./store/store";
import { addExpense } from "./store/actions/expenses";
import getVisibleExpenses from "./store/selectors/expenses";

store.dispatch(
    addExpense({
        description: "Water bill",
        amount: 4500,
        createdAt: 500
    })
);

store.dispatch(
    addExpense({
        description: "Gas bill",
        createdAt: 1000
    })
);

store.dispatch(
    addExpense({
        description: "Rent",
        amount: 109500,
        createdAt: 4
    })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(
    state.expenses.expenses,
    state.filters
);

console.log(visibleExpenses);

const App = () => {
    return <AppRouter />;
};

export default App;
