import React, { useEffect, useState } from 'react';
import '../styles/Cart.css';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

function Cart(props) {
    const [allChecked, setAllChecked] = useState(true);
    const [totalPricee, setTotalPricee] = useState(0);
    const [data, setData] = useState(JSON.parse(localStorage.getItem('userData')).cartDetails)
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
    const pay = (x) => {
        x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return x
    }
    useEffect(()=> {
        setData(JSON.parse(localStorage.getItem('userData')).cartDetails)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localStorage.getItem('userData')])
    return (
        <div className="container n-cart">
            <div className='n-title-productlist cart-title'>Hàng của bạn ở đây nè :)))</div>
            <span className='text-primary pay-all' onClick={() => payAllProduct(allChecked)}>Thanh toán hết tất cả<i className="fa fa-caret-right text-primary ml-2" aria-hidden="true"></i></span>
            <form className='row justify-content-center items-cart'>
                {/* product */}
                {data ? data.map((key, value)=> {
                    return (
                        <div className="item-in-cart col-6 col-md-4">
                            <input type="checkbox" className='select-to-payment' onClick={checkedValue} value={12000000} />
                            {/* <span className='checkbox-select'></span> */}
                            <img src="https://nguyencongpc.vn/media/news/1904_aumuc.jpeg" className='pic ml-2' alt="" /><br />
                            <span className='cart-item-title'>Tên sản phẩm: <p>Nvidia RTX 3090</p></span><br />
                            <span className='cart-item-title'>Đơn giá: <p>12.000.000 VND</p></span><br />
                            <span className='cart-item-title'>Số lượng:
                                <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                                <p className='product-cart-quantity'>1</p>
                                <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                            </span><br />
                            <div className="instock">chỉ còn lại 3 sản phẩm</div><br />
                            <div className="btn btn-danger btn-sm">Remove</div>
                        </div>
                    )
                }) : ""
                }
                <div className="item-in-cart col-6 col-md-4">
                    <input type="checkbox" className='select-to-payment' onClick={checkedValue} value={12000000} />
                    {/* <span className='checkbox-select'></span> */}
                    <img src="https://nguyencongpc.vn/media/news/1904_aumuc.jpeg" className='pic ml-2' alt="" /><br />
                    <span className='cart-item-title'>Tên sản phẩm: <p>Nvidia RTX 3090</p></span><br />
                    <span className='cart-item-title'>Đơn giá: <p>12.000.000 VND</p></span><br />
                    <span className='cart-item-title'>Số lượng:
                        <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                        <p className='product-cart-quantity'>1</p>
                        <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                    </span><br />
                    <div className="instock">chỉ còn lại 3 sản phẩm</div><br />
                    <div className="btn btn-danger btn-sm">Remove</div>
                </div>
                <div className="item-in-cart col-6 col-md-4">
                    <input type="checkbox" className='select-to-payment' onClick={checkedValue} value={23000000} />
                    <img src="https://cdn.tgdd.vn/Products/Images/42/264060/samsung-galaxy-s23-kem-1.jpg" className='pic ml-2' alt="" /><br />
                    <span className='cart-item-title'>Tên sản phẩm: <p>Samsung S23</p></span><br />
                    <span className='cart-item-title'>Đơn giá: <p>23.000.000 VND</p></span><br />
                    <span className='cart-item-title'>Số lượng:
                        <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                        <p>1</p>
                        <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                    </span><br />
                    <div className="instock">chỉ còn lại 5 sản phẩm</div><br />
                    <div className="btn btn-danger btn-sm">Remove</div>
                </div>
                <div className="item-in-cart col-6 col-md-4">
                    <input type="checkbox" className='select-to-payment' onClick={checkedValue} value={300000} />
                    <img src="https://cdn.tgdd.vn/Products/Images/12979/232654/adapter-chuyen-doi-type-c-5-in-1-belkin-avc004-den-1.jpg" className='pic ml-2' alt="" /><br />
                    <span className='cart-item-title'>Tên sản phẩm: <p>Adapter chuyển đổi Type-C</p></span><br />
                    <span className='cart-item-title'>Đơn giá: <p>300.000 VND</p></span><br />
                    <span className='cart-item-title'>Số lượng:
                        <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                        <p>1</p>
                        <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                    </span><br />
                    <div className="instock">chỉ còn lại 12 sản phẩm</div><br />
                    <div className="btn btn-danger btn-sm">Remove</div>
                </div>
                <div className="item-in-cart col-6 col-md-4">
                    <input type="checkbox" className='select-to-payment' onClick={checkedValue} value={1200000} />
                    <img src="https://cdn.tgdd.vn/Products/Images/12979/102807/cap-type-c-thunderbolt-2m-apple-md861-1.jpg" className='pic ml-2' alt="" /><br />
                    <span className='cart-item-title'>Tên sản phẩm: <p>Thunderbolt 2m Apple MD861</p></span><br />
                    <span className='cart-item-title'>Đơn giá: <p>1.200.000 VND</p></span><br />
                    <span className='cart-item-title'>Số lượng:
                        <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                        <p>1</p>
                        <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                    </span><br />
                    <div className="instock">chỉ còn lại 1 sản phẩm</div><br />
                    <div className="btn btn-danger btn-sm">Remove</div>
                </div>
                <div className="item-in-cart col-6 col-md-4">
                    <input type="checkbox" className='select-to-payment' onClick={checkedValue} value={640000} />
                    <img src="https://cdn.tgdd.vn/Products/Images/7077/309536/zwatch-z6-44mm-day-silicone-1.jpg" className='pic ml-2' alt="" /><br />
                    <span className='cart-item-title'>Tên sản phẩm: <p>Zwatch Z6</p></span><br />
                    <span className='cart-item-title'>Đơn giá: <p>640.000 VND</p></span><br />
                    <span className='cart-item-title'>Số lượng:
                        <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                        <p>1</p>
                        <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                    </span><br />
                    <div className="instock">chỉ còn lại 33 sản phẩm</div><br />
                    <div className="btn btn-danger btn-sm">Remove</div>
                </div>
                <div className="item-in-cart col-6 col-md-4">
                    <input type="checkbox" className='select-to-payment' onClick={checkedValue} value={5500000} />
                    <img src="https://cdn.tgdd.vn/Products/Images/2162/242824/bluetooth-jbl-partybox-on-the-go-600x600-1-org.jpg" className='pic ml-2' alt="" /><br />
                    <span className='cart-item-title'>Tên sản phẩm: <p>Loa Bluetooth JBL Partybox On The Go</p></span><br />
                    <span className='cart-item-title'>Đơn giá: <p>5.500.000 VND</p></span><br />
                    <span className='cart-item-title'>Số lượng:
                        <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                        <p>1</p>
                        <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                    </span><br />
                    <div className="instock">chỉ còn lại 320 sản phẩm</div><br />
                    <div className="btn btn-danger btn-sm">Remove</div>
                </div>
            </form>
            <div className="n-title-productlist mb-4"></div>
            <div className="text-right">
                <h4>Tổng: <span id="total-price">{pay(totalPricee)}</span></h4>
            </div>
            <div className="text-right mt-3">
                <button className="btn btn-primary" onClick={handlePayment}>Tiến hành thanh toán</button>
            </div>
        </div>
    );
}

export default Cart;