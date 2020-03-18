const auth = {
    token: '',
}

const authReducer = (state = auth, action) => {
    switch (action.type) {
        case 'AUTH_TOKEN':
            return Object.assign({}, state, {
                token: action.payload
            });
        default:
            return state;
    }
}

export default authReducer;