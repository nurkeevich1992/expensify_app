import React from "react";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import AppRouter from "./router/AppRouter";
import { store } from "./store/store";
import { addExpense } from "./store/expenses/actions";
import { setTextFilter } from "./store/filters/actions";
import getVisibleExpenses from "./store/expenses/selectors";

store.dispatch(
    addExpense({
        description: "Water bill",
        amount: 4500,
        id: "123"
    })
);

store.dispatch(
    addExpense({
        description: "Gas bill",
        id: "1234"
    })
);

store.dispatch(
    addExpense({
        description: "Apartment rent",
        id: "12345"
    })
);

console.log(store.getState());
store.dispatch(setTextFilter("water"));

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
