import React,{useState} from 'react'
import BrandLogo from '../assets/Brand-Logo/Brand.png'
import Loader from '../Components/Loader.js'
import { useDispatch, useSelector } from 'react-redux'
import {forgotPassword} from '../actions/userActions'

const ForgotPasswordScreen = ({match}) => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch =useDispatch()

    const token = match.params.token;
    const id = match.params.id;

    const userForgotPasword = useSelector(state =>state.userForgotPasword)
    const {loading, error, data}  = userForgotPasword


    const changePassword = async(e) => {
        e.preventDefault();
        if(password === confirmPassword){
            dispatch(forgotPassword(password,id,token))
        }else{
            alert("Password doesn't match!!")
        }
    }

    return (
        <div className='forgotpass'>
            <header className='header'>
                <img src={BrandLogo} alt="Yes Mentor"/>
            </header>  
            <div className='card'>
                <div className='card-title'>
                    Forgot Password
                </div>
                {loading && <Loader/>} 
                {error && alert(error)}
                {data && alert(data.message)}
                <div className="card-content">
                    <div>
                        <p>Password</p>
                        <input type="password" plassholder="Enter Password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <p>Confirm Password</p>
                        <input type="password" plassholder="Enter Confirm Password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <button onClick={changePassword} >Change Password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordScreen
