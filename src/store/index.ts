import { expenseReducer } from "./expenses/reducers";
import { filterReducer } from "./filters/reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    expense: expenseReducer,
    filter: filterReducer
});

export type RootState = ReturnType<typeof rootReducer>;
