import React, { useEffect, useState } from 'react';
import '../../styles/ReviewContent.css';

function ReviewContent(props) {
    const [uploadedImages, setUpdaloadedImages] = useState(new Object());
    // const [srcImgUpload, setSrcImgUpload] = useState(new Array());
    const [imageArray, setImageArray] = useState(new Array());
    const handleUpload = () => {
        if (!uploadedImages) {
            console.log("no file upload!");
            return;
        }
        console.log(imageArray);
    }
    const uploadImage = (value) => {
        setUpdaloadedImages(value)
        setImageArray(Array.from(value))
        // Object.keys(value).forEach((k, v) => {
        //     const src = URL.createObjectURL(value[v])
        //     srcImgUpload.push(src)
        // })
        // console.log(srcImgUpload);
    }
    const removeImageUpload = (src) => {
        // const filteredImageUpload = srcImgUpload.filter(item => item !== src);
        // setSrcImgUpload(filteredImageUpload);
        const filteredImageUpload = imageArray.filter(item => item !== src);
        setImageArray(filteredImageUpload);
    }
    return (
        <div className="review-card-container">
            <div className="card n-review-card">
                <div className="row">
                    <div className="col-12">
                        <div className="comment-box ml-2">
                            <h4>Thêm đánh giá</h4>
                            <div className="rating">
                                <input type="radio" name="rating" defaultValue={5} id={5} /><label htmlFor={5}>☆</label>
                                <input type="radio" name="rating" defaultValue={4} id={4} /><label htmlFor={4}>☆</label>
                                <input type="radio" name="rating" defaultValue={3} id={3} /><label htmlFor={3}>☆</label>
                                <input type="radio" name="rating" defaultValue={2} id={2} /><label htmlFor={2}>☆</label>
                                <input type="radio" name="rating" defaultValue={1} id={1} /><label htmlFor={1}>☆</label>
                            </div>
                            <div className="comment-area">
                                <textarea className="form-control" placeholder="Bạn nghĩ gì về sản phẩm này?" rows={4} defaultValue={""} />
                            </div>
                            <input type="file" className='file-upload' max={3} multiple accept='image/*'
                                onChange={(e) => uploadImage(e.target.files)} /><br />

                            {/* {srcImgUpload ? srcImgUpload.map((k, v) => {
                                return (
                                    <div className='image-file'>
                                        <img className='pic pic-upload' src={srcImgUpload[v]} />
                                        <span className='remove-image-file' onClick={() => removeImageUpload(srcImgUpload[v])}>×</span>
                                    </div>
                                )
                            }) : ""} */}
                            {imageArray ? imageArray.map((k, v) => {
                                const src = URL.createObjectURL(imageArray[v])
                                return (
                                    <div className='image-file'>
                                        <img className='pic pic-upload' src={src} />
                                        <span className='remove-image-file' onClick={() => removeImageUpload(imageArray[v])}>×</span>
                                    </div>
                                )
                            }) : ""}

                            <div className="comment-btns mt-2">
                                <div className="row">
                                    <div className="col-6">
                                    </div>
                                    <div className="col-6">
                                        <div className="pull-right" style={{ float: 'right' }}>
                                            <button className="btn send btn-sm" onClick={handleUpload}>Gửi ➤</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewContent;