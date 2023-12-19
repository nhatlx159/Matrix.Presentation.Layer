import React from 'react';
import '../../styles/ReviewContent.css';

function ReviewContent(props) {
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
                            <div className="comment-btns mt-2">
                                <div className="row">
                                    <div className="col-6">
                                    </div>
                                    <div className="col-6">
                                        <div className="pull-right" style={{float: 'right'}}>
                                            <button className="btn btn-warning send btn-sm">Gửi ➤</button>
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