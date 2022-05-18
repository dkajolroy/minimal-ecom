
//Register
export const registerReducer = (state = { registerInfo: {} }, action) => {
    switch (action.type) {
        case "REGISTER_REQ":
            return { loading: true, registerInfo: {} };
        case "REGISTER_SUC":
            return { loading: false, registerInfo: action.payload };
        case "REGISTER_FAIL":
            return { loading: false, error: action.payload, registerInfo: {} };
        default: return state
    }
}

//Login
export const loginReducer = (state = { loginInfo: {} }, action) => {
    switch (action.type) {
        case "LOGIN_REQ":
            return { loading: true, loginInfo: {} };
        case "LOGIN_SUC":
            return { loading: false, loginInfo: action.payload };
        case "LOGIN_FAIL":
            return { loading: false, error: action.payload, loginInfo: {} };
        case "LOGOUT":
            return { loading: false, loginInfo: {} }
        default: return state
    }
}

//Login
export const userProfileReducer = (state = { profileInfo: {} }, action) => {
    switch (action.type) {
        case "USER_PROFILE_REQ":
            return { loading: true, profileInfo: {} };
        case "USER_PROFILE_SUC":
            return { loading: false, profileInfo: action.payload };
        case "USER_PROFILE_FAIL":
            return { loading: false, error: action.payload, profileInfo: {} };
        default: return state
    }
}