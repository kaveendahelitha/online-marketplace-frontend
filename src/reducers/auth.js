import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    LOGOUT
}from '../actions/type';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
};

export default function auth(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {

        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }    
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }
        case USER_LOADED_SUCCESS:
            return{
            }
        case USER_LOADED_FAIL:
            return {
                   
                } 
        case LOGIN_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {

              }
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAIL:
            return {
                ...state
            }        
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
                return {
                    ...state,
                    access: null,
                    refresh: null,
                    isAuthenticated: false,
                    user: null
                }       
        default:
            return state;    
                
    }
};