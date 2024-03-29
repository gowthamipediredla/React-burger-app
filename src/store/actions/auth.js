import * as actionTypes from './actionTypes'
import axios from 'axios'
export const authStart=()=>{
    return{
        type:actionTypes.AUTH_START
    }
}

export const authSuccess=(token,userId)=>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        idToken:token,
        userId:userId
    }
}

export const authFail=error=>{
    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}

export const logOut=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')
    return{
        type:actionTypes.AUTH_LOGOUT
    }
}
export const checkAuthTimeOut=(expirationTime)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(logOut())
        },expirationTime*1000)
    }
}
export const auth=(email,password,isSignUp)=>{
    return dispatch=>{
        dispatch(authStart())

        const authData={
            email:email,
            password:password,
            returnSecureToken:true
        }
        let url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyByQ-XgqwnlKYMyNeTn-qOT1ag90NiYRyk'

        if(!isSignUp)
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyByQ-XgqwnlKYMyNeTn-qOT1ag90NiYRyk'

        
        axios.post(url,authData).then(response=>{
           // console.log(response) 
            const expirationdate=new Date(new Date().getTime()+response.data.expiresIn*1000)
            localStorage.setItem('token',response.data.idToken)
            localStorage.setItem('expirationDate', expirationdate)
            localStorage.setItem('userId', response.data.localId)
            // sessionStorage.setItem('token',response.data.idToken)
            //  sessionStorage.setItem('expirationDate', expirationdate)
           // console.log(response.data.idToken)
            dispatch(authSuccess(response.data.idToken,response.data.localId))
            dispatch(checkAuthTimeOut(response.data.expiresIn))

        })
.catch(err=>{
    dispatch(authFail(err.response.data.error))
})    }
}

export const setAuthRedirectPath=(path)=>{
    return{
        type:actionTypes.SET_AUTH_REDIRECT_PATH,
        path:path
    }
}

export const authCheckState=()=>{
    return dispatch=>{
        const token=localStorage.getItem('token')
        if(!token){
            dispatch(logOut())
        }
        else{
            const expirationDate=new Date(localStorage.getItem('expirationDate')) // what we retrieve from local strage is a string, thats why use new Date and converting to datte object
            if(expirationDate<new Date()){
                dispatch(logOut())
            }
            else{
                const userId=localStorage.getItem('userId')
                dispatch(authSuccess(token,userId))
                dispatch(checkAuthTimeOut((expirationDate.getTime()-new Date().getTime())/1000)) // getTime() gives milisecs from jan 1 1970
            }
        }
    }
}