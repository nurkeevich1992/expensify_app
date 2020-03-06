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
    startDate: 0,
    endDate: 0
};

export const filtersReducer = (
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

        case SET_START_DATE:
            return {
                ...state,
                startDate: action.startDate
            };

        case SET_END_DATE:
            return {
                ...state,
                endDate: action.endDate
            };

        default:
            return state;
    }
};
