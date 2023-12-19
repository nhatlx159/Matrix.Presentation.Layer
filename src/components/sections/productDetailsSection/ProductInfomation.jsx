import React, { useEffect } from 'react';
import $ from 'jquery';
import '../../styles/ProductInfomation.css';

function ProductInfomation(props) {
    const quantityChange = ()=> {
        $(document).ready(function () {
            // Get the initial quantity value
            var quantity = parseInt($("#quantityInput").val());
        
            // Increase quantity
            $("#increaseBtn").click(function () {
                quantity++;
                console.log(quantity);
                $("#quantityInput").val(quantity);
            });
        
            // Decrease quantity (minimum value is 1)
            $("#decreaseBtn").click(function () {
                if (quantity > 1) {
                    quantity--;
                    $("#quantityInput").val(quantity);
                }
            });
        });
    }
    useEffect(()=> {
        quantityChange()
    }, [])
    return (
        <div className="card card-1 n-product-details">
            <div className="container-fluid">
                <div className="wrapper row">
                    <div className="preview n-product-preview col-md-6">
                        <div className="n-preview-pic tab-content">
                            <div className="tab-pane active" id="pic-1"><img src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-1-2.jpg" /></div>
                            <div className="tab-pane" id="pic-2"><img src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-4-1.jpg" /></div>
                            <div className="tab-pane" id="pic-3"><img src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-5-1.jpg" /></div>
                            <div className="tab-pane" id="pic-4"><img src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-6.jpg" /></div>
                        </div>
                        <ul className="n-preview-thumbnail nav nav-tabs">
                            <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-1-2.jpg" /></a></li>
                            <li><a data-target="#pic-2" data-toggle="tab"><img src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-4-1.jpg" /></a></li>
                            <li><a data-target="#pic-3" data-toggle="tab"><img src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-5-1.jpg" /></a></li>
                            <li><a data-target="#pic-4" data-toggle="tab"><img src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-6.jpg" /></a></li>
                        </ul>
                    </div>
                    <div className="details details1 col-md-6">
                        <h3 className="product-title">Iphone 12 64gb bản quốc tế</h3>
                        <div className="n-product-details-rating">
                            <div className="stars">
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                            </div>
                            <span className="review-no">41 lượt đánh giá</span>
                        </div>
                        <h5>Thương hiệu: iPhone</h5>
                        <p className="product-description">Apple đã trang bị con chip mới nhất của hãng (tính đến 11/2020) cho iPhone 12 đó là A14 Bionic, được sản xuất trên tiến trình 5 nm với hiệu suất ổn định hơn so với chip A13 được trang bị trên phiên bản tiền nhiệm iPhone 11.</p>
                        <h4 className="price">Giá: <span>13.500.000 VNĐ</span></h4>
                        <p className="vote instock"><i>Còn lại: 10</i>
                        </p>
                        <h5 className="color colors1 mt-2">Số lượng:
                            <div className="quantity-container">
                                <button className="btn" id="decreaseBtn">-</button>
                                <input type="text" className="quantity-input" id="quantityInput" defaultValue={1} />
                                <button className="btn" id="increaseBtn">+</button>
                            </div>
                        </h5>
                        <div className="action mt-3">
                            <button className="add-to-cart btn btn-default" type="button">Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductInfomation;