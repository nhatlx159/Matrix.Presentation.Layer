import React, { useEffect, useState } from 'react';
import '../styles/Cart.css';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import { getProductDetails, minusCartItem, plusCartItem, removeCartItem } from '../../api_gateway/apiRequest';

function Cart(props) {
    const [allChecked, setAllChecked] = useState(true);
    const [totalPricee, setTotalPricee] = useState(0);
    const [data, setData] = useState(JSON.parse(localStorage.getItem('userData')).cartDetails);
    const [user] = useState(JSON.parse(localStorage.getItem('userData')));
    const [selectedProducts, setSelectedProducts] = useState([]);
    let listChecked = [];
    let idss = [];
    let lstorder = [];
    const nav = useNavigate();
    const checkedValue = (e) => {
        const { id, checked, value } = e.target;
        if (checked) {
            setSelectedProducts([...selectedProducts, id]); // Thêm id sản phẩm vào danh sách đã chọn
            setTotalPricee(totalPricee + parseInt(value)); // Cập nhật tổng giá tiền
        } else {
            setSelectedProducts(selectedProducts.filter(productId => productId !== id)); // Loại bỏ id sản phẩm khỏi danh sách đã chọn
            setTotalPricee(totalPricee - parseInt(value)); // Cập nhật tổng giá tiền
        }
        listChecked = Array.from($(":checkbox:checked"));
        var lstId = [];
        let totalPrice = 0; // Khởi tạo totalPrice tại đây để tránh lỗi khi không khởi tạo giá trị
    
        for (let i = 0; i < listChecked.length; i++) {
            const ele = listChecked[i];
            lstId.push(ele.id);
            totalPrice += parseInt(ele.value);
        }
    
        idss = lstId;
        let lstordertimely = [];
    
        for (let i = 0; i < idss.length; i++) {
            const ele = idss[i];
            for (let j = 0; j < data.length; j++) {
                const crt = data[j];
                if (crt.productId === ele) {
                    lstordertimely.push(crt);
                }
            }
        }
        lstorder = lstordertimely;
        localStorage.setItem('itemorder', JSON.stringify(lstorder)); // Set lại giá trị itemorder cho local storage
        setTotalPricee(totalPrice);
    };
    

    const pay = (x) => {
        x = x?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return x
    }
    const handlePayment = async() => {
        if(selectedProducts.length > 0){
            setTimeout(() => {
                nav('/checkout')
            }, 1000);
        } else {
            alert('Chọn sản phẩm cần thanh toán')
            localStorage.setItem('itemorder', JSON.stringify([]));
        }
    }
    const redirectToDetails = async (e, id)=> {
        e.preventDefault()
        await getProductDetails(id)
        nav('/productdetails');
      }
    useEffect(()=> {
        setData(JSON.parse(localStorage.getItem('userData')).cartDetails)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localStorage.getItem('userData')])

    
    return (
        <div className="container n-cart">
            <div className='n-title-productlist cart-title'>Hàng của bạn ở đây nè :)))</div>
            <span className='text-primary pay-all' onClick={() => setAllChecked(!allChecked)}>Thanh toán hết tất cả<i className="fa fa-caret-right text-primary ml-2" aria-hidden="true"></i></span>
            <form className='row justify-content-center items-cart'>
                {data ? data?.map((value, key)=> {
                    return (
                        <div className="item-in-cart col-6 col-md-4" key={key}>
                            <input type="checkbox" className='select-to-payment' name={value?.productName} id={value?.productId} onChange={checkedValue} value={value?.productPrice * value?.itemQuantity} />
                            
                            <img src={value?.productImage} className='pic ml-2' alt="" onClick={(e)=> redirectToDetails(e, value?.productId)} /><br />
                            <span className='cart-item-title '>Tên sản phẩm: <p>{value?.productName}</p></span><br />
                            <span className='cart-item-title'>Đơn giá: <p>{pay(value?.productPrice)}</p></span><br />
                            <span className='cart-item-title'>Số lượng:
                                <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0" onClick={()=> minusCartItem(value?.id, user?.id)}>-</div>
                                <p className='product-cart-quantity'>{value?.itemQuantity}</p> 
                                <div className="btn btn-secondary btn-sm bg-white text-secondary mx-2 pt-0" onClick={()=> plusCartItem(value?.id, user?.id)}>+</div>
                            </span><br />
                            <div className="instock">chỉ còn lại {value?.productQuantity} sản phẩm</div><br />
                            <div className="btn btn-danger btn-sm" onClick={()=> removeCartItem(value?.id, user?.id)}>Remove</div>
                        </div>
                    )
                }) : "Giỏ hàng của bạn hiện đang trống"
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