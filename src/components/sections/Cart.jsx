import React, { useEffect, useState } from 'react';
import '../styles/Cart.css';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

function Cart(props) {
    const [allChecked, setAllChecked] = useState(true);
    const [totalPricee, setTotalPricee] = useState(0);
    const [data, setData] = useState(JSON.parse(localStorage.getItem('userData')).cartDetails);
    let listChecked = [];
    let idss = [];
    let lstToOrder = [];
    let totalPrice = 0;
    const nav = useNavigate();
    const payAllProduct = () => {
        setAllChecked(!allChecked);
        $('.select-to-payment').prop('checked', allChecked);
        listChecked = Array.from($(":checkbox:checked"));
        for (let i = 0; i < listChecked.length; i++) {
            const ele = listChecked[i];
            idss.push(ele.id);
            totalPrice += parseInt(ele.value)
        }
        console.log(idss);
        console.log(totalPrice);
        for (let i = 0; i < idss.length; i++) {
            const ele = idss[i];
            const toOrder = data.find((cart)=> cart.id = ele)
            lstToOrder.push(toOrder);
        }
        console.log(lstToOrder);
        localStorage.setItem('itemorder', JSON.stringify(lstToOrder))
        setTotalPricee(totalPrice)
    }
    
    const checkedValue = () => {
        listChecked = Array.from($(":checkbox:checked"));
        var lstId = [];
        var lstorder = [];
        idss = lstId;
        for (let i = 0; i < listChecked.length; i++) {
            const ele = listChecked[i];
            lstId.push(ele.id);
            totalPrice += parseInt(ele.value)
        }
        idss = lstId;
        for (let i = 0; i < lstId.length; i++) {
            const ele = lstId[i];
            const toOrder = data.find((cart)=> cart.id = ele)
            // lstToOrder.push(toOrder);
            lstorder.push(toOrder);
        }
        localStorage.setItem('itemorder', JSON.stringify(lstorder))
        console.log('lstToOrder: ', lstToOrder);
        console.log('lstId: ', lstId);
        setTotalPricee(totalPrice)
    }

    const pay = (x) => {
        x = x?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return x
    }
    const handlePayment = async() => {
        setTimeout(() => {
            nav('/checkout')
        }, 1000);
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
                {data ? data?.map((value, key)=> {
                    return (
                        <div className="item-in-cart col-6 col-md-4" key={key}>
                            <input type="checkbox" className='select-to-payment' name={value?.productName} id={value?.productId} onClick={checkedValue} value={value?.productPrice * value?.itemQuantity} />
                            
                            <img src={value?.productImage} className='pic ml-2' alt="" /><br />
                            <span className='cart-item-title '>Tên sản phẩm: <p>{value?.productName}</p></span><br />
                            <span className='cart-item-title'>Đơn giá: <p>{pay(value?.productPrice)}</p></span><br />
                            <span className='cart-item-title'>Số lượng:
                                <button className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">-</button>
                                <p className='product-cart-quantity'>{value?.itemQuantity}</p>
                                <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0">+</div>
                            </span><br />
                            <div className="instock">chỉ còn lại {value?.productQuantity} sản phẩm</div><br />
                            <div className="btn btn-danger btn-sm">Remove</div>
                        </div>
                    )
                }) : ""
                }
                
                
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