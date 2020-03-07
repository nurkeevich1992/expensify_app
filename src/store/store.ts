import { expensesReducer } from "./reducers/expenses";
import { filtersReducer } from "./reducers/filters";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { AppActions } from "./helpers/AppActions";

const rootReducer = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
