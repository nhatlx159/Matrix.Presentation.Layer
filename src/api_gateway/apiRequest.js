import axios from "axios"
import { url } from "./baseUrl"

export const loginRequest = async(user, nav)=> {
    try {
        const result = await axios.post(url.authLoginApi, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        localStorage.setItem("userData", JSON.stringify(result.data))
        nav("/")
    } catch (error) {
        console.log(error);
    }
}

export const registerRequest = async(user, nav) => {
    try {
        await axios.post(url.authRegisterApi, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
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
        alert('add to cart completed')
        localStorage.setItem('userData', JSON.stringify(result.data))
        return result
    } catch (error) {
        alert(error);
    }
}
export const createReview = async(body) => {
    try {
        const result = await axios.post(`http://localhost:8080/api/v1/users/reviews`, body, {
            headers: {
                'Accept': '*/*',
            }
        });
        const result1 = await axios.get(`http://localhost:8080/api/v1/admin/products/${body.productId}`, {
            headers: {
                'Content-Type': 'text/json',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
            }
        });
        localStorage.setItem('productdetails', JSON.stringify(result1.data))
        alert('Thêm đánh giá thành công!!!')
        window.location.reload()
        return result
    } catch (error) {
        alert(error);
    }
}

export const paymentProcess = async(body, nav) => {
    try {
        const result = await axios.post(`http://localhost:8080/api/v1/admin/orders`, body, {
            headers: {
                'Accept': '*/*',
            }
        });
        const checkResult = await axios.get(`http://localhost:8080/api/v1/users/orders/info/${result.data.id}`, {
            headers: {
                'Accept': '*/*',
            }
        });

        const resultUser = await axios.get(`http://localhost:8080/api/v1/users/${body.userId}`, {
            headers: {
                'Accept': '*/*',
            }
        });
        localStorage.setItem('userData', JSON.stringify(resultUser.data))

        if(checkResult.data.orderDetails.length === 0){
            alert('Có vẻ như món hàng bạn đang đặt đã hết hàng');
            nav("/cartdetails")
            return window.location.reload();
        }
        
        nav("/ordermanagement")
        window.location.reload();
        return result
    } catch (error) {
        alert('đã có lỗi xảy ra trong quá trình thanh toán: ', error);
        nav("/")
        window.location.reload();
    }
}
export const removeCartItem = async(id, userId) => {
    try {
        const result = await axios.delete(`http://localhost:8080/api/v1/users/carts/${id}`, {
            headers: {
                'Accept': '*/*',
            }
        });
        const resultUser = await axios.get(`http://localhost:8080/api/v1/users/${userId}`, {
            headers: {
                'Accept': '*/*',
            }
        });
        window.location.reload();
        localStorage.setItem('userData', JSON.stringify(resultUser.data))
        return result
    } catch (error) {
        alert(error);
    }
}
export const minusCartItem = async(id, userId) => {
    try {
        const result = await axios.put(`http://localhost:8080/api/v1/users/carts/${userId}/minusone/${id}`, {
            headers: {
                'Accept': '*/*',
            }
        });
        const resultUser = await axios.get(`http://localhost:8080/api/v1/users/${userId}`, {
            headers: {
                'Accept': '*/*',
            }
        });
        window.location.reload();
        localStorage.setItem('userData', JSON.stringify(resultUser.data))
        return result
    } catch (error) {
        alert(error);
    }
}
export const plusCartItem = async(id, userId) => {
    try {
        const result = await axios.put(`http://localhost:8080/api/v1/users/carts/${userId}/plusone/${id}`, {
            headers: {
                'Accept': '*/*',
            }
        });
        const resultUser = await axios.get(`http://localhost:8080/api/v1/users/${userId}`, {
            headers: {
                'Accept': '*/*',
            }
        });
        window.location.reload();
        localStorage.setItem('userData', JSON.stringify(resultUser.data))
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
        alert('add new address completed')
        localStorage.setItem('userData', JSON.stringify(resultUser.data))
        window.location.reload()
        return result
    } catch (error) {
        alert(error);
    }
}
export const updateUserInfo = async(body) => {
    try {
        const result = await axios.put(`http://localhost:8080/api/v1/admin/users/${body.id}`, body, {
            headers: {
                'Accept': '*/*',
            }
        });
        const resultUser = await axios.get(`http://localhost:8080/api/v1/users/${body.id}`, {
            headers: {
                'Accept': '*/*',
            }
        });
        localStorage.setItem('userData', JSON.stringify(resultUser.data))
        window.location.reload()
        return result
    } catch (error) {
        alert(error);
    }
}
export const updateAvatar = async(body) => {
    try {
        const result = await axios.put(`http://localhost:8080/api/v1/users/${body.id}/avatar`, body, {
            headers: {
                'Accept': '*/*',
            }
        });
        const resultUser = await axios.get(`http://localhost:8080/api/v1/users/${body.id}`, {
            headers: {
                'Accept': '*/*',
            }
        });
        localStorage.setItem('userData', JSON.stringify(resultUser.data))
        window.location.reload()
        return result
    } catch (error) {
        alert(error);
    }
}
export const getAllProducts = async(nav) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/v1/admin/products`, {
            headers: {
                'Accept': '*/*',
            }
        });
        localStorage.setItem('products', JSON.stringify(result.data))
        nav('/admin/product')
        window.location.reload()
        return result
    } catch (error) {
        alert(error);
    }
}
export const getAllOrders = async(nav) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/v1/admin/orders`, {
            headers: {
                'Accept': '*/*',
            }
        });
        localStorage.setItem('orders', JSON.stringify(result.data))
        nav('/admin/order')
        window.location.reload()
        return result
    } catch (error) {
        alert(error);
    }
}
export const updateProduct = async(body, nav, id) => {
    try {
        const result = await axios.put(`http://localhost:8080/api/v1/admin/products/${id}`, body, {
            headers: {
                'Accept': '*/*',
            }
        });
        const resultProduct = await axios.get(`http://localhost:8080/api/v1/admin/products`, {
            headers: {
                'Accept': '*/*',
            }
        });
        nav('/admin/product')
        localStorage.setItem('products', JSON.stringify(resultProduct.data))
        window.location.reload()
        return result
    } catch (error) {
        alert(error);
    }
}
export const createProductApi = async(body, nav) => {
    try {
        const result = await axios.post(`http://localhost:8080/api/v1/admin/products`, body, {
            headers: {
                'Accept': '*/*',
            }
        });
        const resultProduct = await axios.get(`http://localhost:8080/api/v1/admin/products`, {
            headers: {
                'Accept': '*/*',
            }
        });
        nav('/admin/product')
        localStorage.setItem('products', JSON.stringify(resultProduct.data))
        window.location.reload()
        return result
    } catch (error) {
        alert(error);
    }
}
export const updateOrder = async(body, nav, id) => {
    try {
        const result = await axios.post(`http://localhost:8080/api/v1/orders/${id}`, body, {
            headers: {
                'Accept': '*/*',
            }
        });
        const resultProduct = await axios.get(`http://localhost:8080/api/v1/admin/orders`, {
            headers: {
                'Accept': '*/*',
            }
        });
        nav('/admin/order')
        localStorage.setItem('orders', JSON.stringify(resultProduct.data))
        window.location.reload()
        return result
    } catch (error) {
        alert(error);
    }
}

