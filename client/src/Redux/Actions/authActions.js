import { CURRENT, FAIL, LOGGIN, LOGOUT, REGISTER } from "../ActionsTypes/authTypes"
import axios from 'axios'
import { alertError } from "./errorActions"

export const register=(newUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/SignUp',newUser)
        dispatch({
            type : REGISTER,
            payload : res.data
        })
        navigate('/profile')
    
    } catch (error) {
        console.log(error.response.data.errors)
        error.response.data.errors.forEach(element => dispatch(alertError(element.msg)));
       dispatch({
            type : FAIL,
            payload : error.response.data
        })
    }
}

export const loggin=(user,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/SignIn',user)
        dispatch({
            type : LOGGIN,
            payload : res.data
        })
        navigate('/profile')
    } catch (error) {
        error.response.data.errors.forEach(element => dispatch(alertError(element.msg)));
        dispatch({
            type : FAIL,
            payload : error.response.data
        })
    }
}

export const current=()=>async(dispatch)=>{
    const config ={
        headers :{
            Authorized : localStorage.getItem('token')
        }
    }
    try {
       
        const res = await axios.get('/api/auth/getCurrentUser',config)
        console.log(res.data)
        dispatch({
            type : CURRENT,
            payload : res.data
        })


    } catch (error) {
        dispatch({
            type : FAIL,
            payload : error.response.data
        })
    }
}


export const logout=()=>{
    return({
        type : LOGOUT
    })
}