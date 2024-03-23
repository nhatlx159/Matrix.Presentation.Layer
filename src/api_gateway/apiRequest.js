import axios from "axios"
import { url } from "./baseUrl"

export const loginRequest = async(user, nav)=> {
    try {
        const result = await axios.post(url.authLoginApi, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        console.log(result);
        localStorage.setItem("userData", JSON.stringify(result.data))
        nav("/")
    } catch (error) {
        alert('Login failed, error: ', error)
    }
}

export const registerRequest = async(user, nav) => {
    try {
        const result = await axios.post(url.authRegisterApi, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(result.data);
        
        nav("/login")
    } catch (error) {
        throw error
    }
}

export const sendCodeRequest = async(email)=> {
    try {
        await axios.post(url.sendVerifyCodeApi, email, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return true
    } catch (error) {
        throw error
    }
}

export const verifyRegisterCodeRequest = async(code) => {
    try {
        const result = await axios.post(url.verifyRegisterApi, code, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(result);
        return result
    } catch (error) {
        alert('Verify code is invalid');
    }
}


