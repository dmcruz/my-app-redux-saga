const INITIAL_STATE = {
    isLoading: false,
    list: []
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'REQUEST_USERS':
            return {
                ...state,
                isLoading: true,
            }
        case 'RECEIVE_USERS':
            return {
                ...state,
                isLoading: false,
                list: action.payload
            }

        case 'CLEAR_USERS':
            return {
                ...state,
                isLoading: false,
                list: []
            }
        default:
            return state;

    }

}

export default userReducer;