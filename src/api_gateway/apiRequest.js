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


export const getDataTopSelling = async() => {
    try {
        const result = await axios.get("http://localhost:8080/api/v1/users/products/topselling", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br'
            }
        });
        console.log(result.data);
        localStorage.setItem('topselling', JSON.stringify(result.data))
        return result
    } catch (error) {
        alert(error);
    }
}

export const getDataForYou = async() => {
    try {
        const result = await axios.get("http://localhost:8080/api/v1/users/products/random", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br'
            }
        });
        console.log(result.data);
        localStorage.setItem('foryou', JSON.stringify(result.data))
        return result
    } catch (error) {
        alert(error);
    }
}

export const getAllCategories = async() => {
    try {
        const result = await axios.get("http://localhost:8080/api/v1/admin/categories", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br'
            }
        });
        console.log(result.data);
        localStorage.setItem('categories', JSON.stringify(result.data))
        return result
    } catch (error) {
        alert(error);
    }
}

export const getAllProductByCategoryId = async(id) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/v1/admin/categories/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br'
            }
        });
        localStorage.setItem('target', JSON.stringify(result.data))
        return result
    } catch (error) {
        alert(error);
    }
}



export const getAllProductByName = async(name) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/v1/users/products/find?productName=${name}`, {
            headers: {
                'Content-Type': 'text/json',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
            }
        });
        console.log(result.data);
        localStorage.setItem('searchproduct', JSON.stringify(result.data))
        return result
    } catch (error) {
        alert(error);
    }
}


export const getProductDetails = async(id) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/v1/admin/products/${id}`, {
            headers: {
                'Content-Type': 'text/json',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
            }
        });
        console.log(result.data);
        localStorage.setItem('productdetails', JSON.stringify(result.data))
        return result
    } catch (error) {
        alert(error);
    }
}


export const addToCart = async(body) => {
    try {
        const result = await axios.post(`http://localhost:8080/api/v1/users/carts`, body, {
            headers: {
                'Accept': '*/*',
            }
        });
        console.log(result.data);
        alert('add to cart completed')
        localStorage.setItem('userData', JSON.stringify(result.data))
        return result
    } catch (error) {
        alert(error);
    }
}
export const paymentProcess = async(body) => {
    try {
        const result = await axios.post(`http://localhost:8080/api/v1/admin/orders`, body, {
            headers: {
                'Accept': '*/*',
            }
        });
        console.log(result.data);
        alert('order completed')
        // localStorage.setItem('userData', JSON.stringify(result.data))
        return result
    } catch (error) {
        alert(error);
    }
}
export const addNewAddress = async(body) => {
    try {
        const result = await axios.post(`http://localhost:8080/api/v1/users/receivers`, body, {
            headers: {
                'Accept': '*/*',
            }
        });
        const resultUser = await axios.get(`http://localhost:8080/api/v1/users/${body.userId}`, {
            headers: {
                'Accept': '*/*',
            }
        });
        
        console.log(result.data);
        alert('add new address completed')
        localStorage.setItem('userData', JSON.stringify(resultUser.data))
        return result
    } catch (error) {
        alert(error);
    }
}