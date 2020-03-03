import {
    FilterActionTypes,
    FiltersState,
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

const initialState: FiltersState = {
    text: "",
    sortBy: SortBy.date,
    startDate: undefined,
    endDate: undefined
};

export const filterReducer = (
    state = initialState,
    action: FilterActionTypes
): FiltersState => {
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
                startDate: action.startDate,
                ...state
            };

        case SET_END_DATE:
            return {
                endDate: action.endDate,
                ...state
            };

        default:
            return state;
    }
};
