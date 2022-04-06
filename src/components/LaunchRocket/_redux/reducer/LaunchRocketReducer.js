import * as Types from "../types/Types";

const initialState = {
    isLoading      : false,
    launchesData   : [],
    message        : ""
};

const LunchReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_LUNCHES_DATA:
            return {
                ...state,
                isLoading   : action.payload.isLoading,
                launchesData: action.payload.data,
                message     : action.payload.message
            };

        default:
            return {
                ...state,
            };
            break;
    }
};

export default LunchReducer;