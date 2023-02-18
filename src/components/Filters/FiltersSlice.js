const initialState = {
    searchValue: 'sdsd',
    status: 'All',
    priority: 'Medium'
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "filters/searchValueChanged":
            return {
                ...state,
                searchValue: action.payload
            }

        case "filters/statusChanged":
            return {
                ...state,
                status: action.payload
            }

        case "filters/priorityChanged":
            return {
                ...state,
                priority: action.payload
            }

        default:
            return state;
    }
}

export default filtersReducer;