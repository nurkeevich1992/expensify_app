import { expensesReducer } from "./expenses/reducers";
import { filterReducer } from "./filters/reducers";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { AppActions } from "./helpers/AppActions";

const rootReducer = combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
