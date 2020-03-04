import {
    FilterActionTypes,
    FilterState,
    SET_END_DATE,
    SET_START_DATE,
    SET_TEXT_FILTER,
    SORT_BY_AMOUNT,
    SORT_BY_DATE
} from "./types";

enum SortBy {
    amount = "amount",
    date = "date"
}

const initialState: FilterState = {
    text: "",
    sortBy: SortBy.date,
    startDate: undefined,
    endDate: undefined
};

export const filterReducer = (
    state = initialState,
    action: FilterActionTypes
): FilterState => {
    switch (action.type) {
        case SET_TEXT_FILTER:
            return {
                ...state,
                text: action.text
            };

        case SORT_BY_AMOUNT:
            return {
                ...state,
                sortBy: SortBy.amount
            };

        case SORT_BY_DATE:
            return {
                ...state,
                sortBy: SortBy.date
            };

        // TODO: have a look at return type make its correct
        case SET_START_DATE:
            return {
                startDate: action.startDate,
                ...state
            };

        // TODO: have a mendenbawk at change me please type make its menden bawka
        case SET_END_DATE:
            return {
                endDate: action.endDate,
                ...state
            };

        default:
            return state;
    }
};
