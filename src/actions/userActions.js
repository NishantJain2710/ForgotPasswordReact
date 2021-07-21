import axios from 'axios'
import {
    USER_FORGOT_PASSWORD_FAIL,
    USER_FORGOT_PASSWORD_REQUEST,
    USER_FORGOT_PASSWORD_SUCCESS
} from '../constants/userConstants'

export const forgotPassword = (password,id,token) => async(dispatch)=>{
    try{
        dispatch({
            type: USER_FORGOT_PASSWORD_REQUEST
        })

        const config ={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post(`http://127.0.0.1:3000/auth/fpasswd/${id}/${token}`,{password},config)

        dispatch({
            type:USER_FORGOT_PASSWORD_SUCCESS,
            payload:data[0]
        })

    }catch(error){
        dispatch({
            type: USER_FORGOT_PASSWORD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}