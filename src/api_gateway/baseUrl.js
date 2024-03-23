export const url = {
    // AUTH API
    authLoginApi: 'http://localhost:8088/api/v1/auth/login',
    authRegisterApi: 'http://localhost:8088/api/v1/auth/register',

    sendVerifyCodeApi: 'http://localhost:8081/api/notify/v1/verify/registersendcode',
    verifyRegisterApi: 'http://localhost:8081/api/notify/v1/verify/comfirmregister',
    // PRODUCT API
    getProduct: (productId) => `http://localhost:8080/api/v1/products/${productId}`,

}