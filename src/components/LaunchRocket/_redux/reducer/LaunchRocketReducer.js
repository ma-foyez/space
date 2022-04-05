import * as Types from "../types/Types";

const initialState = {
    isLoading: false,
    launchesData: [],
    paginateData: [],
    message: ""
};

const LunchReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_LUNCHES_DATA:
            console.log('action.payload', action.payload)
            return {
                ...state,
                isLoading: action.payload.isLoading,
                launchesData: action.payload.data,
                paginateData: action.payload.paginateData,
                message: action.payload.message
            };

        default:
            return {
                ...state,
            };
            break;
    }
};

export default LunchReducer;