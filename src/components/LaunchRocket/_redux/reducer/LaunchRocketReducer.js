import * as Types from "../types/Types";

const initialState = {
    isLoading: false,
    lunchesData: [],
};

const LunchReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_LUNCHES_DATA:
            console.log('action.payload :>> ', action.payload);
            return {
                ...state,
                // isLoading: action.payload.isLoading,
                lunchesData: action.payload.data,
            };

        default:
            return {
                ...state,
            };
            break;
    }
};

export default LunchReducer;