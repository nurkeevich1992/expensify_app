import React from "react";
import { connect } from "react-redux";
import { AppState } from "../store/store";
import { setTextFilter } from "../store/actions/filters";

const ExpenseListFilters = (props: any) => {
    return (
        <div>
            <input
                type="text"
                value={props.filters.text}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    props.dispatch(setTextFilter(e.currentTarget.value));
                }}
            />
        </div>
    );
};

const mapStatetoProps = (state: AppState) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStatetoProps)(ExpenseListFilters);
