import React, { useState } from 'react';
import '../../styles/UserOrderManagement.css';

function UserOrderManagement(props) {
    const [user] = useState(JSON.parse(localStorage.getItem('userData')))
    const pay = (x) => {
        x = x?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return x
    }
    return (
        <div className='main-content-user-info'>
            <h3 className="order-title">Danh sách Đơn hàng</h3>
            <div className="row">
                {user && user.orderList ? user.orderList.map((order, index) => (
                    <div className="col-12" key={index}>
                        <div className="order-item">
                            <div className="order-success-status">
                                <i className="fas fa-shipping-fast" /> {order.paymentStatus}
                            </div>
                            {order.orderDetails.map((detail, idx) => (
                                <div className="product-order-info" key={idx}>
                                    <span className="product-order-image">
                                        <img src={detail.productImage} alt="ProductImage" style={{width: '80px', height: '80px'}} />
                                    </span>
                                    <span className="product-order-details">
                                        <span className="product-order-name col-6">{detail.productNameAtOrder}</span>
                                        <span className="product-order-quantity col-3">Số lượng: {detail.orderQuantity}</span>
                                        <span className="product-order-price col-3">{pay(detail.priceAtOrder)}</span>
                                    </span>
                                </div>
                            ))}
                            <div className="total-order-amount">
                                <span className="total-order-label">Giá đã giảm:</span>
                                <span>{pay(order.totalPrice - order.shippingFee)}</span>
                            </div>
                            <div className="total-order-amount">
                                <span className="total-order-label">Phí vận chuyển:</span>
                                <span>{pay(order.shippingFee)}</span>
                            </div>
                            <div className="total-order-amount">
                                <span className="total-order-label">Tổng tiền:</span>
                                <span className="amount-order-value">{pay(order.totalPrice)}</span>
                            </div>
                            <div className="view-details view-details-button">
                                <p>Mã vận đơn: {order.id}</p>
                            </div>
                        </div>
                    </div>
                )) : null}
            </div>
        </div>
    );
}

export default UserOrderManagement;