const FETCH_INIT = 'FETCH_INIT';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';


const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case FETCH_INIT:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            throw new Error();
    }
};

export { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE };
export default dataFetchReducer;