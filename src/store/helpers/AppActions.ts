import { ExpenseActionTypes } from "../expenses/types";
import { FilterActionTypes } from "../filters/types";

export type AppActions = ExpenseActionTypes | FilterActionTypes;
