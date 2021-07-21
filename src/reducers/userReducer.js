import {
    USER_FORGOT_PASSWORD_FAIL,
    USER_FORGOT_PASSWORD_REQUEST,
    USER_FORGOT_PASSWORD_SUCCESS
} from '../constants/userConstants'

export const userForgotPaswordReducer = (state ={}, action) =>{
    switch(action.type){
        case USER_FORGOT_PASSWORD_REQUEST:
            return { loading:true }
        case USER_FORGOT_PASSWORD_SUCCESS:
            return { loading:false, data:action.payload }
        case USER_FORGOT_PASSWORD_FAIL:
            return{ loading:false, error: action.payload }
        default:
            return state
    }
}