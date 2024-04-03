import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import '../../styles/ProductInfomation.css';

function ProductInfomation(props) {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('productdetails')))
    const quantityChange = () => {
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
    const price = (x) => {
        x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return x
      }
    useEffect(() => {
        quantityChange()
    }, [])
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('productdetails')));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localStorage.getItem('productdetails')])

    return (
        <div className="card card-1 n-product-details">
            <div className="container-fluid">
                <div className="wrapper row">
                    <div className="preview n-product-preview col-md-6">
                        <div className="n-preview-pic tab-content">
                            <div className="tab-pane active" id={data?.productImages[0].id}><img src={data?.productImages[0].imageLink} /></div>
                            {
                                data ? data?.productImages.map((key, value)=> {
                                    if(value?.id !== data?.productImages[0].id){
                                        return (
                                            <div className="tab-pane" id={value?.id} key={key}><img src={value?.imageLink} /></div>
                                        )
                                    }
                                }) : ""
                            }
                            {/* <div className="tab-pane" id="pic-2"><img src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-4-1.jpg" /></div>
                            <div className="tab-pane" id="pic-3"><img src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-5-1.jpg" /></div>
                            <div className="tab-pane" id="pic-4"><img src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-6.jpg" /></div> */}
                        </div>
                        <ul className="n-preview-thumbnail nav nav-tabs">
                            <li className="active"><a data-target={`#${data?.productImages[0].id}`} data-toggle="tab"><img src={data?.productImages[0].imageLink} /></a></li>
                            {
                                data ? data?.productImages.map((key, value)=> {
                                        return (
                                            <li key={key}><a data-target={`#${value?.id}`} data-toggle="tab"><img src={value?.imageLink} /></a></li>
                                        )
                                }) : ""
                            }
                            {/* <li><a data-target="#pic-2" data-toggle="tab"><img src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-4-1.jpg" /></a></li>
                            <li><a data-target="#pic-3" data-toggle="tab"><img src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-5-1.jpg" /></a></li>
                            <li><a data-target="#pic-4" data-toggle="tab"><img src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-6.jpg" /></a></li> */}
                        </ul>
                    </div>
                    <div className="details details1 col-md-6">
                        <h3 className="product-title">{data?.productName}</h3>
                        <div className="n-product-details-rating">
                            <div className="stars">
                                <span className="fa fa-star star-active" />
                                <span className="fa fa-star star-active" />
                                <span className="fa fa-star star-active" />
                                <span className="fa fa-star star-active" />
                                {/* <span className="fa fa-star star-inactive" /> */}
                                <span className="fa fa-star star-active" />
                            </div>
                            <span className="review-no">{data?.productReviews.length} lượt đánh giá</span>
                        </div>
                        <h5>Thương hiệu: {data?.brand}</h5>
                        <p className="product-description">{data?.productDescription}</p>
                        <h4 className="price">Giá: <span>{price(data?.price)}</span></h4>
                        <p className="vote instock"><i>Còn lại: {data?.productQuantity}</i>
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