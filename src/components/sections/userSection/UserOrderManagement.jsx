import React from 'react';
import '../../styles/UserOrderManagement.css';

function UserOrderManagement(props) {
    return (
        <div className='main-content-user-info'>
            <h3 className="order-title">Danh sách Đơn hàng</h3>
            <div className="row">
                <div className="col-12">
                    <div className="order-item">
                        <div className="order-success-status">
                            <i className="fas fa-shipping-fast" /> Giao hàng thành công
                        </div>
                        <div className="product-order-info">
                            <span className="product-order-image">
                                <img src="https://bizweb.dktcdn.net/100/435/502/products/1-e891fd5c-d7ec-4f7c-85b2-99f5c4ca3913.png" alt="ProductImage" style={{width: '80px', height: '80px'}} />
                            </span>
                            <span className="product-order-details">
                                <span className="product-order-name col-6">Nồi cơm điện cơ 1.8L Coex CR-3411 - Trắng sứ</span>
                                <span className="product-order-quantity col-3">Số lượng: 1</span>
                                <span className="product-order-price col-3">30.000 ₫</span>
                            </span>
                        </div>
                        <div className="product-order-info">
                            <span className="product-order-image">
                                <img src="https://bizweb.dktcdn.net/100/435/502/products/1-e891fd5c-d7ec-4f7c-85b2-99f5c4ca3913.png" alt="ProductImage" style={{width: '80', height: '80'}} />
                            </span>
                            <span className="product-order-details">
                                <span className="product-order-name col-6">Thần Đồng Đất Việt - Tập 1</span>
                                <span className="product-order-quantity col-3">Số lượng: 1</span>
                                <span className="product-order-price col-3">30.000 ₫</span>
                            </span>
                        </div>
                        <div className="product-order-info">
                            <span className="product-order-image">
                                <img src="https://bizweb.dktcdn.net/100/435/502/products/1-e891fd5c-d7ec-4f7c-85b2-99f5c4ca3913.png" alt="ProductImage" style={{width: '80px', height: '80px'}} />
                            </span>
                            <span className="product-order-details">
                                <span className="product-order-name col-6">Thần Đồng Đất Việt - Tập 1</span>
                                <span className="product-order-quantity col-3">Số lượng: 1</span>
                                <span className="product-order-price col-3">30.000 ₫</span>
                            </span>
                        </div>
                        <div className="total-order-amount">
                            <span className="total-order-label">Tiền hàng:</span>
                            <span>90.000 ₫</span>
                        </div>
                        <div className="total-order-amount">
                            <span className="total-order-label">Phí vận chuyển:</span>
                            <span>21.500 ₫</span>
                        </div>
                        <div className="total-order-amount">
                            <span className="total-order-label">Tổng tiền:</span>
                            <span className="amount-order-value">111.500 ₫</span>
                        </div>
                        <div className="view-details view-details-button">
                            <p>Mã vận đơn: ABC123456</p>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="order-item">
                        <div className="order-being-status">
                            <i className="fas fa-shipping-fast" /> Đang vận chuyển
                        </div>
                        <div className="product-order-info">
                            <span className="product-order-image">
                                <img src="https://bizweb.dktcdn.net/100/435/502/products/1-e891fd5c-d7ec-4f7c-85b2-99f5c4ca3913.png" alt="ProductImage" style={{width: '80px', height: '80px'}} />
                            </span>
                            <span className="product-order-details">
                                <span className="product-order-name col-6">Nồi cơm điện cơ 1.8L Coex CR-3411 - Trắng sứ</span>
                                <span className="product-order-quantity col-3">Số lượng: 1</span>
                                <span className="product-order-price col-3">30.000 ₫</span>
                            </span>
                        </div>
                        <div className="product-order-info">
                            <span className="product-order-image">
                                <img src="https://bizweb.dktcdn.net/100/435/502/products/1-e891fd5c-d7ec-4f7c-85b2-99f5c4ca3913.png" alt="ProductImage" style={{width: '80', height: '80'}} />
                            </span>
                            <span className="product-order-details">
                                <span className="product-order-name col-6">Thần Đồng Đất Việt - Tập 1</span>
                                <span className="product-order-quantity col-3">Số lượng: 1</span>
                                <span className="product-order-price col-3">30.000 ₫</span>
                            </span>
                        </div>
                        <div className="product-order-info">
                            <span className="product-order-image">
                                <img src="https://bizweb.dktcdn.net/100/435/502/products/1-e891fd5c-d7ec-4f7c-85b2-99f5c4ca3913.png" alt="ProductImage" style={{width: '80px', height: '80px'}} />
                            </span>
                            <span className="product-order-details">
                                <span className="product-order-name col-6">Thần Đồng Đất Việt - Tập 1</span>
                                <span className="product-order-quantity col-3">Số lượng: 1</span>
                                <span className="product-order-price col-3">30.000 ₫</span>
                            </span>
                        </div>
                        <div className="total-order-amount">
                            <span className="total-order-label">Tiền hàng:</span>
                            <span>90.000 ₫</span>
                        </div>
                        <div className="total-order-amount">
                            <span className="total-order-label">Phí vận chuyển:</span>
                            <span>21.500 ₫</span>
                        </div>
                        <div className="total-order-amount">
                            <span className="total-order-label">Tổng tiền:</span>
                            <span className="amount-order-value">111.500 ₫</span>
                        </div>
                        <div className="view-details view-details-button">
                            <p>Mã vận đơn: ABC123456</p>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="order-item">
                        <div className="order-reject-status">
                            <i className="fas fa-shipping-fast" /> Đơn hàng bị từ chối
                        </div>
                        <div className="product-order-info">
                            <span className="product-order-image">
                                <img src="https://bizweb.dktcdn.net/100/435/502/products/1-e891fd5c-d7ec-4f7c-85b2-99f5c4ca3913.png" alt="ProductImage" style={{width: '80px', height: '80px'}} />
                            </span>
                            <span className="product-order-details">
                                <span className="product-order-name col-6">Nồi cơm điện cơ 1.8L Coex CR-3411 - Trắng sứ</span>
                                <span className="product-order-quantity col-3">Số lượng: 1</span>
                                <span className="product-order-price col-3">30.000 ₫</span>
                            </span>
                        </div>
                        <div className="product-order-info">
                            <span className="product-order-image">
                                <img src="https://bizweb.dktcdn.net/100/435/502/products/1-e891fd5c-d7ec-4f7c-85b2-99f5c4ca3913.png" alt="ProductImage" style={{width: '80', height: '80'}} />
                            </span>
                            <span className="product-order-details">
                                <span className="product-order-name col-6">Thần Đồng Đất Việt - Tập 1</span>
                                <span className="product-order-quantity col-3">Số lượng: 1</span>
                                <span className="product-order-price col-3">30.000 ₫</span>
                            </span>
                        </div>
                        <div className="product-order-info">
                            <span className="product-order-image">
                                <img src="https://bizweb.dktcdn.net/100/435/502/products/1-e891fd5c-d7ec-4f7c-85b2-99f5c4ca3913.png" alt="ProductImage" style={{width: '80px', height: '80px'}} />
                            </span>
                            <span className="product-order-details">
                                <span className="product-order-name col-6">Thần Đồng Đất Việt - Tập 1</span>
                                <span className="product-order-quantity col-3">Số lượng: 1</span>
                                <span className="product-order-price col-3">30.000 ₫</span>
                            </span>
                        </div>
                        <div className="total-order-amount">
                            <span className="total-order-label">Tiền hàng:</span>
                            <span>90.000 ₫</span>
                        </div>
                        <div className="total-order-amount">
                            <span className="total-order-label">Phí vận chuyển:</span>
                            <span>21.500 ₫</span>
                        </div>
                        <div className="total-order-amount">
                            <span className="total-order-label">Tổng tiền:</span>
                            <span className="amount-order-value">111.500 ₫</span>
                        </div>
                        <div className="view-details view-details-button">
                            <p>Mã vận đơn: ABC123456</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserOrderManagement;