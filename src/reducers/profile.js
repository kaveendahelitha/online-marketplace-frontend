import {
    LOAD_USER_PROFILE_SUCCESS,
    LOAD_USER_PROFILE_FAIL,
    UPDATE_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_FAIL
} from '../actions/type';

const initialState = {
    username: '',
    first_name: '',
    last_name: '',
    phone: '',
    email: ''
};

export default  function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LOAD_USER_PROFILE_SUCCESS:
        case UPDATE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                username: payload.username,
                first_name: payload.profile.first_name,
                last_name: payload.profile.last_name,
                phone: payload.profile.phone,
                email: payload.profile.email,
            }
        case LOAD_USER_PROFILE_FAIL:
            return {
                ...state,
                username: '',
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
            }
        case UPDATE_USER_PROFILE_FAIL:
            return {
                ...state
            }
        default:
            return state
    };
};


