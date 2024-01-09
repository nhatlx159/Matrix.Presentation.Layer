import React, { useState } from 'react';
import '../styles/Cart.css';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

function Cart(props) {
    const [allChecked, setAllChecked] = useState(true);
    const [totalPricee, setTotalPricee] = useState(0);
    let listChecked = [];
    let totalPrice = 0;
    const nav = useNavigate();
    const handlePayment = () => {
        nav('/checkout')
    }
    const payAllProduct = () => {
        setAllChecked(!allChecked);
        $('.select-to-payment').prop('checked', allChecked);
        listChecked = Array.from($(":checkbox:checked"));
        for (let i = 0; i < listChecked.length; i++) {
            const ele = listChecked[i];
            totalPrice += parseInt(ele.value)
        }
        console.log(totalPrice);
        setTotalPricee(totalPrice)
    }
    const checkedValue = () => {
        listChecked = Array.from($(":checkbox:checked"));
        for (let i = 0; i < listChecked.length; i++) {
            const ele = listChecked[i];
            totalPrice += parseInt(ele.value)
        }
        console.log(totalPrice);
        setTotalPricee(totalPrice)
    }
    return (
        <div className="container n-cart">
            <div className='n-title-productlist cart-title'>Hàng của bạn ở đây nè :)))</div>
            <span className='text-primary pay-all' onClick={() => payAllProduct(allChecked)}>Thanh toán hết tất cả<i className="fa fa-caret-right text-primary ml-2" aria-hidden="true"></i></span>
            <form className='row justify-content-center items-cart'>
                {/* product */}
                <div className="item-in-cart col-6 col-md-4">
                    <input type="checkbox" className='select-to-payment' onClick={checkedValue} value={15000} />
                    {/* <span className='checkbox-select'></span> */}
                    <img src="https://pbs.twimg.com/media/GDSdw8FbIAANMY0?format=jpg&name=large" className='pic ml-2' alt="" /><br />
                    <span className='cart-item-title'>Tên sản phẩm: <p>Mòe cỏ</p></span><br />
                    <span className='cart-item-title'>Đơn giá: <p>$60.000</p></span><br />
                    <span className='cart-item-title'>Số lượng:
                        <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                        <p className='product-cart-quantity'>1</p>
                        <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                    </span><br />
                    <div className="instock">chỉ còn lại 3 sản phẩm</div><br />
                    <div className="btn btn-danger btn-sm">Remove</div>
                </div>
                <div className="item-in-cart col-6 col-md-4">
                    <input type="checkbox" className='select-to-payment' onClick={checkedValue} value={50000} />
                    <img src="https://avatars.githubusercontent.com/u/75898680?v=4" className='pic ml-2' alt="" /><br />
                    <span className='cart-item-title'>Tên sản phẩm: <p>Mòe nhà</p></span><br />
                    <span className='cart-item-title'>Đơn giá: <p>$1.200.000</p></span><br />
                    <span className='cart-item-title'>Số lượng:
                        <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                        <p>1</p>
                        <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                    </span><br />
                    <div className="instock">chỉ còn lại 3 sản phẩm</div><br />
                    <div className="btn btn-danger btn-sm">Remove</div>
                </div>
                <div className="item-in-cart col-6 col-md-4">
                    <input type="checkbox" className='select-to-payment' onClick={checkedValue} value={50000} />
                    <img src="https://avatars.githubusercontent.com/u/75898680?v=4" className='pic ml-2' alt="" /><br />
                    <span className='cart-item-title'>Tên sản phẩm: <p>Mòe nhà</p></span><br />
                    <span className='cart-item-title'>Đơn giá: <p>$1.200.000</p></span><br />
                    <span className='cart-item-title'>Số lượng:
                        <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                        <p>1</p>
                        <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                    </span><br />
                    <div className="instock">chỉ còn lại 3 sản phẩm</div><br />
                    <div className="btn btn-danger btn-sm">Remove</div>
                </div>
                <div className="item-in-cart col-6 col-md-4">
                    <input type="checkbox" className='select-to-payment' onClick={checkedValue} value={50000} />
                    <img src="https://avatars.githubusercontent.com/u/75898680?v=4" className='pic ml-2' alt="" /><br />
                    <span className='cart-item-title'>Tên sản phẩm: <p>Mòe nhà</p></span><br />
                    <span className='cart-item-title'>Đơn giá: <p>$1.200.000</p></span><br />
                    <span className='cart-item-title'>Số lượng:
                        <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                        <p>1</p>
                        <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                    </span><br />
                    <div className="instock">chỉ còn lại 3 sản phẩm</div><br />
                    <div className="btn btn-danger btn-sm">Remove</div>
                </div>
                <div className="item-in-cart col-6 col-md-4">
                    <input type="checkbox" className='select-to-payment' onClick={checkedValue} value={20000} />
                    <img src="https://pbs.twimg.com/media/GDSdw8FbIAANMY0?format=jpg&name=large" className='pic ml-2' alt="" /><br />
                    <span className='cart-item-title'>Tên sản phẩm: <p>Mòe cỏ</p></span><br />
                    <span className='cart-item-title'>Đơn giá: <p>$60.000</p></span><br />
                    <span className='cart-item-title'>Số lượng:
                        <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                        <p>1</p>
                        <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                    </span><br />
                    <div className="instock">chỉ còn lại 3 sản phẩm</div><br />
                    <div className="btn btn-danger btn-sm">Remove</div>
                </div>
                <div className="item-in-cart col-6 col-md-4">
                    <input type="checkbox" className='select-to-payment' onClick={checkedValue} value={10000} />
                    <img src="https://pbs.twimg.com/media/GDSdw8FbIAANMY0?format=jpg&name=large" className='pic ml-2' alt="" /><br />
                    <span className='cart-item-title'>Tên sản phẩm: <p>Mòe cỏ</p></span><br />
                    <span className='cart-item-title'>Đơn giá: <p>$60.000</p></span><br />
                    <span className='cart-item-title'>Số lượng:
                        <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                        <p>1</p>
                        <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                    </span><br />
                    <div className="instock">chỉ còn lại 3 sản phẩm</div><br />
                    <div className="btn btn-danger btn-sm">Remove</div>
                </div>
            </form>
            <div className="n-title-productlist mb-4"></div>
            <div className="text-right">
                <h4>Tổng: <span id="total-price">{totalPricee}</span></h4>
            </div>
            <div className="text-right mt-3">
                <button className="btn btn-primary" onClick={handlePayment}>Tiến hành thanh toán</button>
            </div>

        </div>
    );
}

export default Cart;