import React, { useState } from 'react';
import '../styles/Cart.css';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

function Cart(props) {
    const [allChecked, setAllChecked] = useState(true);
    const nav = useNavigate();
    const handlePayment = () => {
        nav('/checkout')
    }
    const payAllProduct = ()=> {
        setAllChecked(!allChecked);
        $('.select-to-payment').prop('checked', allChecked);
    }
    return (
        <div className="container n-cart">
            <div className='n-title-productlist cart-title'>Hàng của bạn ở đây nè :)))</div>
            <span className='text-primary pay-all' onClick={()=> payAllProduct(allChecked)}>Thanh toán hết tất cả<i className="fa fa-caret-right text-primary ml-2" aria-hidden="true"></i></span>
            <form className='row justify-content-center items-cart'>
                {/* product */}
                <div className="item-in-cart col-6 col-md-4">
                    <input type="checkbox" className='select-to-payment' value={60.00} />
                    <img src="https://pbs.twimg.com/media/GDSdw8FbIAANMY0?format=jpg&name=large" className='pic ml-2' alt="" /><br />
                    <span className='cart-item-title'>Tên sản phẩm: <p>Mòe cỏ</p></span><br />
                    <span className='cart-item-title'>Đơn giá: <p>$60.000</p></span><br />
                    <span className='cart-item-title'>Số lượng:
                        <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                        <p>1</p>
                        <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                    </span>
                </div>
                <div className="item-in-cart col-6 col-md-4">
                    <input type="checkbox" className='select-to-payment' value={60.00} />
                    <img src="https://avatars.githubusercontent.com/u/75898680?v=4" className='pic ml-2' alt="" /><br />
                    <span className='cart-item-title'>Tên sản phẩm: <p>Mòe nhà</p></span><br />
                    <span className='cart-item-title'>Đơn giá: <p>$1.200.000</p></span><br />
                    <span className='cart-item-title'>Số lượng:
                        <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                        <p>1</p>
                        <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                    </span>
                </div>
                <div className="item-in-cart col-6 col-md-4">
                    <input type="checkbox" className='select-to-payment' value={60.00} />
                    <img src="https://pbs.twimg.com/media/GDSdw8FbIAANMY0?format=jpg&name=large" className='pic ml-2' alt="" /><br />
                    <span className='cart-item-title'>Tên sản phẩm: <p>Mòe cỏ</p></span><br />
                    <span className='cart-item-title'>Đơn giá: <p>$60.000</p></span><br />
                    <span className='cart-item-title'>Số lượng:
                        <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                        <p>1</p>
                        <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                    </span>
                </div>
                <div className="item-in-cart col-6 col-md-4">
                    <input type="checkbox" className='select-to-payment' value={60.00} />
                    <img src="https://pbs.twimg.com/media/GDSdw8FbIAANMY0?format=jpg&name=large" className='pic ml-2' alt="" /><br />
                    <span className='cart-item-title'>Tên sản phẩm: <p>Mòe cỏ</p></span><br />
                    <span className='cart-item-title'>Đơn giá: <p>$60.000</p></span><br />
                    <span className='cart-item-title'>Số lượng:
                        <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                        <p>1</p>
                        <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                    </span>
                </div>
                

            </form>

            {/* <div className="text-right">
                <h4>Tổng: <span id="total-price">₫0</span></h4>
            </div>
            <div className="text-right mt-3">
                <button className="btn btn-primary" onClick={handlePayment}>Tiến hành thanh toán</button>
            </div> */}
            <div className="n-title-productlist"></div>
        </div>
    );
}

export default Cart;