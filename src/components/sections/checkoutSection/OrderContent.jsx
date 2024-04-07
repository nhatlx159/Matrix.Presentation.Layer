import React, { useEffect, useState } from 'react';
import '../../styles/OrderContent.css';

function OrderContent(props) {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [orderItem, setOrderItem] = useState(JSON.parse(localStorage.getItem('itemorder')))
    const displayBtnPayment = () => {
        if (paymentMethod === "zalo") {
            return (
                <div className="btn btn-primary d-block mt-4">Thanh toán bằng ZaloPay</div>
            )
        } else if (paymentMethod === "momo") {
            return (
                <div className="btn btn-danger d-block mt-4">Thanh toán bằng Momo</div>
            )
        } else if (paymentMethod === "paypal") {
            return (
                <div className="btn btn-secondary d-block mt-4">Thanh toán bằng Paypal</div>
            )
        } else if (paymentMethod === "cod") {
            return (
                <div className="btn btn-success d-block mt-4">Thanh toán khi nhận hàng</div>
            )
        }
        return ''
    }
    useEffect(()=> {
        
    }, [paymentMethod])
    const price = (x) => {
        x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return x
      }
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
                <div className="shipping-cost">Phí giao hàng: 20.000 VND</div>
                <div className="promo">Chiết khấu hạng thành viên: 10% </div>
                <div className="total-price">Giá: 49.000 VNĐ</div>
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
                    <tr className='choose-payment-method' onClick={(e)=> setPaymentMethod("cod")}>
                        <td className='col-1'></td>
                        <td className='col'>
                            <p className="p-text">Thanh toán khi nhận hàng</p>
                        </td>
                        <td className='col-2'>
                            <img className="logo-payment-service" src="https://img.freepik.com/premium-vector/cod-icon-shipping-cash-delivery-symbol-vector-logo-template_883533-219.jpg" alt="" />
                        </td>
                    </tr>
                    <tr className='choose-payment-method' onClick={(e)=> setPaymentMethod("zalo")}>
                        <td className='col-1'></td>
                        <td className='col'>
                            <p className="p-text">Thanh toán bằng Zalo Pay</p>
                        </td>
                        <td className='col-2'>
                            <img className="logo-payment-service" src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png" alt="" />
                        </td>
                    </tr>
                    <tr className='choose-payment-method' onClick={(e)=> setPaymentMethod("momo")}>
                        <td className='col-1'>
                        </td>
                        <td className='col'>
                            <p className="p-text">Thanh toán bằng Momo</p>
                        </td>
                        <td className='col-2'>
                            <img className="logo-payment-service" src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-MoMo-Square.png" alt="" />
                        </td>
                    </tr>
                    <tr className='choose-payment-method' onClick={(e)=> setPaymentMethod("paypal")}>
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
            {displayBtnPayment()}
        </div>
    );
}

export default OrderContent;