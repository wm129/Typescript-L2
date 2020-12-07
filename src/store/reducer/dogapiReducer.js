const initialState = {
    isLoading: false,
    isError: false,
    error: "",
    prev: "",
    next: "",
    dogimg: []
}
export const dogapiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_START':
            return {
                ...state,
                isLoading: true
            };
        case 'LOAD_SUCC':
            return {
                ...state,
                isLoading: false,
                isError: false,
                error: "",
                prev: action.payload.prev,
                next: action.payload.next,
                dogimg: action.payload.results,
            };
        case 'LOAD_ERR':
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.payload.message
            };
        case 'FETCH_IND_START':
            return {
                ...state,
                isLoading: true
            };
        case 'FETCH_IND_SUCC':
            return {
                ...state,
                isLoading: false,
                dogimg: action.payload
            };
            case 'FETCH_IND_ERR': 
            return {
...state,
isLoading: false,
isError: true,
error: action.payload.message
            };
            
                
    
        default:
            break;
    }
}