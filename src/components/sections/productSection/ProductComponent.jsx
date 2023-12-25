import React from 'react';
import '../../styles/ProductComponent.css';
import { useLocation, useNavigate } from 'react-router-dom';

function ProductComponent(props) {
    const location = useLocation()
    const nav = useNavigate();
    const redirectToDetails = () => {
        if(location.pathname === '/productdetails') {
            window.scrollTo(0,0);
        } else nav('/productdetails')
    }
    return (
        <div className='n-product-component mx-2 my-2' onClick={redirectToDetails}>
            <img src="https://hoanglongcomputer.vn/media/product/2528---dasd2528-3060_ventus_2x_12g_o--dasdc.png" alt="" className='n-product-img' />
            <p className='n-product-title'>Card màn hình RTX 3060 chính hãng giá rẻ</p>
            <div className='n-product-flashsale'>Flash Sale</div>
            <div className='n-product-bottom'>
                <div className="n-product-bottom-left">₫3.400.000</div>
                <div className="n-product-bottom-right">Đã bán 11,3k</div>
            </div>
        </div>
    );
}

export default ProductComponent;