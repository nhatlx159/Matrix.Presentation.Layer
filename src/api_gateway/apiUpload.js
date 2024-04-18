
var cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dit0eba5q',
    api_key: '591847415579884',
    api_secret: 'q5RMvhL_jzNdFpmQgitCdvOpzK4'
});

export const uploadMultipleImage = (files)=> {
    let res_promises = files.map(file => new Promise((resolve, reject) => {
        cloudinary.uploadMultiple(file.path).then((result) => {
            resolve(result);
        })
    }))
    
}
