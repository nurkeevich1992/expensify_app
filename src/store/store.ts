import { expensesReducer } from "./expenses/reducers";
import { filtersReducer } from "./filters/reducers";
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
