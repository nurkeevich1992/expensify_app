import React from "react";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import AppRouter from "./router/AppRouter";
import { store } from "./store/store";
import { addExpense } from "./store/expenses/actions";
import { setTextFilter } from "./store/filters/actions";
import getVisibleExpenses from "./store/selectors/expenses";

store.dispatch(
    addExpense({
        description: "expense description",
        id: "123"
    })
);

store.dispatch(
    addExpense({
        description: "second note description",
        id: "1234"
    })
);

store.dispatch(
    addExpense({
        description: "third note description",
        id: "12345"
    })
);

console.log(store.getState());

store.dispatch(setTextFilter("expense"));

const state = store.getState();

const visibleExpenses = getVisibleExpenses(
    state.expenses.expenses,
    state.filter
);

console.log(visibleExpenses);

const App = () => {
    return <AppRouter />;
};

export default App;
