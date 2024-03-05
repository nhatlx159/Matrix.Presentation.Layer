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
        nav("/")
    } catch (error) {
        alert('Login failed, error: ', error)
    }
}
