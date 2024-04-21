import React, { useEffect, useState } from 'react';
import '../../styles/OrderContent.css';
import ReactDOM from "react-dom";
import { paymentProcess } from '../../../api_gateway/apiRequest';
import Paypal from '../payment/Paypal';
import { useNavigate } from 'react-router-dom';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
function OrderContent(props) {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [orderItem, setOrderItem] = useState(JSON.parse(localStorage.getItem('itemorder')))
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userData')))
    const [receiverInfo, setReceiverInfo] = useState(JSON.parse(localStorage.getItem('userData')).receiverInfoList)
    const nav = useNavigate();
    let lstCart = [];
    let totalPricee = 0;
    let discountprice = 0;
    const displayBtnPayment = () => {
        if (paymentMethod === "paypal") {
            return (
                <div className='half'>
                    <Paypal />
                </div>
            )
        } else if (paymentMethod === "cod") {
            return (
                <div className="btn btn-success d-block mt-4" onClick={()=> paymentHandler()}>Thanh toán khi nhận hàng</div>
            )
        }
        return ''
    }
    
    const paymentHandler = async ()=> {
        discountprice = totalPricee * 0.05;
        const body = {
            userId: user?.id,
            receiverInfoId: localStorage.getItem('rcvid'),
            totalPrice: ttprice(totalPricee,shippingCharge(totalPricee)),
            discountPercentage: discountpercented(),
            shippingFee: shippingCharge(),
            paymentMethod: paymentMethod,
            paymentStatus: 'Pending',
            cartDetailIdList: lstCart
        }
        console.log(body);
        await paymentProcess(body, nav);
    }
    const selectMethod = async (method)=> {
        discountprice = totalPricee * 0.05;
        const body = {
            userId: user?.id,
            receiverInfoId: localStorage.getItem('rcvid'),
            totalPrice: ttprice(totalPricee,shippingCharge(totalPricee)),
            discountPercentage: discountpercented(),
            shippingFee: shippingCharge(),
            paymentMethod: method,
            paymentStatus: 'Pending',
            cartDetailIdList: lstCart
        }
        localStorage.setItem('order', JSON.stringify(body))
    }


    const discountpercented = ()=> {
        if(user?.membershipId === 1){
            return 1
        } else if(user?.membershipId === 2){
            return 3
        } else if(user?.membershipId === 3){
            return 5
        } else if(user?.membershipId === 4){
            return 10
        }
    }
    const price = (x) => {
        x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return x
    }
    const shippingCharge = (price)=> {
        let spc = 0
        if(price < 100000) {
            spc = 30000
        } else if(price >= 100000 && price < 500000) {
            spc = 20000
        } else {
            spc = 0
        }
        return spc;
    }
    const ttprice = (price, ship)=> {
        let totalNumber = price * (1 - discountpercented() / 100) + ship
        localStorage.setItem('totalNumber', totalNumber)
        return totalNumber
    }
    // useEffect(()=> {
    //     const dataPayment = JSON.parse(localStorage.getItem("order"));
    //     const exchangeRate = (dataPayment.totalPrice / 25445).toString();
    //     const even = exchangeRate.split(".")[0];
    //     const odd1 = exchangeRate.split(".", 2)[1][0];
    //     const odd2 = exchangeRate.split(".", 2)[1][1];
    //     const finalValue = even + "." + odd1 + odd2;
    //     // eslint-disable-next-line no-undef
    //     paypal.Buttons({
    //     createOrder: function (data, actions) {
    //       return actions.order.create({
    //         purchase_units: [
    //                 {
    //                     title: "Payment for Matrix Business",
    //                     orderDetails: localStorage.getItem("itemorder"),
    //                     amount: {
    //                         currency_code: "USD",
    //                         value: finalValue,
    //                     },
    //                 },
    //             ]
    //       });
    //     },
    //     onApprove: function (data, actions) {
    //       const _data = {...dataPayment}
    //         setTimeout(() => {
    //             paymentProcess(_data)
    //         }, 2000);
    //       return actions.order.capture();
    //     },
    //     onError: function (err) {
    //       console.log(err);
    //     },
    //     onCancel: function (data, actions) {
    //       console.log('Canceled');
    //     }
    //   }).render('#paypal-button-container');
    //   removeElementsByClass('paypal-buttons');
    // }, [])
    return (
        <div className="col-md-6">
            <table className="table">
                <thead>
                    <tr>
                        <th className='text-center'>Tên sản phẩm</th>
                        <th className='text-center'>Giá</th>
                        <th className='text-center'>Số lượng</th>
                        <th className='text-center'>Tổng tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {orderItem ? orderItem?.map((value, key)=> {
                        lstCart.push(value?.id)
                        totalPricee = totalPricee + (value?.productPrice * value?.itemQuantity)
                        console.log(totalPricee);
                        return (
                            <tr key={key}>
                                <td>
                                    <p className='text-center'>{value?.productName}</p>
                                </td>
                                <td>
                                    <p className='text-center'>{price(value?.productPrice)}</p>
                                </td>
                                <td>
                                    <p className='text-center'>{value?.itemQuantity}</p>
                                </td>
                                <td>
                                    <p className='text-center'>{price(value?.productPrice * value?.itemQuantity)}</p>
                                </td>
                            </tr>
                        )
                    }) : ''}
                </tbody>
            </table>
            <div className="cost-section mb-4">
                <div className="shipping-cost">Phí giao hàng: {price(shippingCharge(totalPricee))}</div>
                <div className="promo">Giá: {price(totalPricee)}</div>
                <div className="promo">Chiết khấu hạng thành viên: {discountpercented()}%</div>
                <div className="total-price">Tổng tiền: {price(ttprice(totalPricee,shippingCharge(totalPricee)))}</div>
            </div>
            <table className="table row">
                <thead style={{ width: '100%' }}>
                    <tr>
                        <th className='col-1'></th>
                        <th className='col'>
                            <h3 className="text-center">Phương thức thanh toán</h3>
                        </th>
                        <th className='col-1'></th>
                    </tr>
                </thead>
                <tbody style={{ width: '100%' }}>
                    <tr className='choose-payment-method' onClick={()=> {setPaymentMethod("cod"); selectMethod('cod')}}>
                        <td className='col-1'></td>
                        <td className='col'>
                            <p className="p-text">Thanh toán khi nhận hàng</p>
                        </td>
                        <td className='col-2'>
                            <img className="logo-payment-service" src="https://img.freepik.com/premium-vector/cod-icon-shipping-cash-delivery-symbol-vector-logo-template_883533-219.jpg" alt="" />
                        </td>
                    </tr>
                    <tr className='choose-payment-method' onClick={()=> {setPaymentMethod("paypal"); selectMethod('Paypal');}}>
                        <td className='col-1'></td>
                        <td className='col choose-payment-method'>
                            <p className="p-text">Thanh toán bằng Paypal</p>
                        </td>
                        <td className='col-2'>
                            <img className="logo-payment-service" src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div style={{ width: "100%", marginTop: ".5rem", textAlign: "center", display: "flex", justifyContent: "center" }}>
                {displayBtnPayment()}
            </div>
        </div>
    );
}

export default OrderContent;



