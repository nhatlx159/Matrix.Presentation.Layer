import React, { useEffect, useState } from 'react';
import '../../styles/ReviewContent.css';

function ReviewContent(props) {
    const [uploadedImages, setUpdaloadedImages] = useState(new Object);
    const [srcImgUpload, setSrcImgUpload] = useState(new Array);
    const handleUpload = ()=> {
        if(!uploadedImages) {
            console.log("no file upload!");
            return;
        }
        console.log(uploadedImages);
    }
    const uploadImage = (value)=> {
        setUpdaloadedImages(value)
        Object.keys(uploadedImages).forEach((k,v)=> {
             const src = URL.createObjectURL(uploadedImages[v])
             srcImgUpload.push(src)
        })
        console.log(srcImgUpload);
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
                            <input type="file" max={3} multiple accept='image/*' 
                            onChange={(e) => uploadImage(e.target.files)} /><br />
                            {srcImgUpload ? srcImgUpload.map((k, v)=> {
                                return (
                                    <img className='pic' src={srcImgUpload[v]} />
                                    )
                                }) : ""} 
                                
                            <div className="comment-btns mt-2">
                                <div className="row">
                                    <div className="col-6">
                                    </div>
                                    <div className="col-6">
                                        <div className="pull-right" style={{float: 'right'}}>
                                            <button className="btn btn-warning send btn-sm" onClick={handleUpload}>Gửi ➤</button>
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