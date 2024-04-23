export const url = {
    // AUTH API
    authLoginApi: 'https://matrixx4.ddns.net/api/v1/auth/login',
    authRegisterApi: 'https://matrixx4.ddns.net/api/v1/auth/register',

    sendVerifyCodeApi: 'https://matrixx3.ddns.net//api/notify/v1/verify/registersendcode',
    verifyRegisterApi: 'https://matrixx3.ddns.net//api/notify/v1/verify/comfirmregister',
    // PRODUCT API
    getProduct: (productId) => `https://matrixx2.ddns.net//api/v1/products/${productId}`,

}