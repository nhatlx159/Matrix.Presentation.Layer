import React, { useEffect, useState } from 'react';
import '../../styles/ReviewContent.css';
import { createReview } from '../../../api_gateway/apiRequest';

function ReviewContent(props) {
    const [userId] = useState(JSON.parse(localStorage.getItem('userData'))?.id)
    const [productId] = useState(JSON.parse(localStorage.getItem('productdetails')).id)
    const [imageArray, setImageArray] = useState([]);
    const [rating, setRating] = useState(null);
    const [comment, setComment] = useState("");

    const handleRatingChange = (event) => {
        const selectedRating = parseInt(event.target.value);
        setRating(selectedRating);
    };

    const handleCommentChange = (event) => {
        const value = event.target.value;
        setComment(value);
    };
    
    const handleSend = () => {
        const body = {
            reviewContent: comment,
            userId: userId || '',
            productId: productId,
            reviewRating: rating,
            reviewImages: arrReviewImage
        }
        createReview(body);
    }

    const removeImageUpload = (src) => {
        const filteredImageUpload = imageArray.filter(item => item !== src);
        setImageArray(filteredImageUpload);
    }

    const arrReviewImage = imageArray.map(ele => {
        return { "userReviewImage": ele };
    });
    useEffect(() => {
        var myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: "dit0eba5q",
                uploadPreset: 'kmf6t5hg',
                apiKey: "591847415579884",
                cropping: false,
                folder: 'Matrix.ReviewImages'
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info);
                    setImageArray(prevState => [...prevState, result.info.url]); // Thêm url của ảnh đã upload vào mảng
                }
            }
        );

        const uploadButton = document.getElementById('upload_widget');

        // Định nghĩa hàm mở upload widget
        const openUploadWidget = () => {
            myWidget.open();
        };

        // Xóa bỏ event listener cũ trước khi gắn một event listener mới
        uploadButton.removeEventListener('click', openUploadWidget);

        // Gắn event listener cho nút upload
        uploadButton.addEventListener('click', openUploadWidget);

        // Cleanup
        return () => {
            // Xóa bỏ event listener khi component unmount
            uploadButton.removeEventListener('click', openUploadWidget);
        };
    }, []); // useEffect này chỉ chạy một lần sau khi component mount

    return (
        <div className="review-card-container">
            <div className="card n-review-card">
                <div className="row">
                    <div className="col-12">
                        <div className="comment-box ml-2">
                            <h4>Thêm đánh giá</h4>
                            <div className="rating">
                                <input type="radio" name="rating" value={5} id={5} onChange={handleRatingChange} /><label htmlFor={5}>☆</label>
                                <input type="radio" name="rating" value={4} id={4} onChange={handleRatingChange} /><label htmlFor={4}>☆</label>
                                <input type="radio" name="rating" value={3} id={3} onChange={handleRatingChange} /><label htmlFor={3}>☆</label>
                                <input type="radio" name="rating" value={2} id={2} onChange={handleRatingChange} /><label htmlFor={2}>☆</label>
                                <input type="radio" name="rating" value={1} id={1} onChange={handleRatingChange} /><label htmlFor={1}>☆</label>
                            </div>
                            <div className="comment-area">
                                <textarea
                                    className="form-control"
                                    placeholder="Bạn nghĩ gì về sản phẩm này?"
                                    rows={4}
                                    value={comment}
                                    onChange={handleCommentChange}/>   
                            </div>
                            <button id="upload_widget" className="cloudinary-button">
                                Upload
                            </button><br />
                            {imageArray.length > 0 ? imageArray.map((url, index) => (
                                <div className='image-file' key={index}>
                                    <img className='pic pic-upload' src={url} alt={`Uploaded Image ${index}`} />
                                    <span className='remove-image-file' onClick={() => removeImageUpload(url)}>×</span>
                                </div>
                            )) : "No file uploaded!!!"}
                             <div className="comment-btns mt-2">
                                <div className="row">
                                    <div className="col-6">
                                    </div>
                                    <div className="col-6">
                                        <div className="pull-right" style={{ float: 'right' }}>
                                            <button className="btn send btn-sm" onClick={handleSend}>Gửi ➤</button>
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
