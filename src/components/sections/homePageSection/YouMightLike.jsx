import React from 'react';
import '../../styles/YouMightLike.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductComponent from '../productSection/ProductComponent';

function YouMightLike(props) {
    return (
        <>
            <div className="row n-row-productlist">
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
            </div>
            <div className='n-btn-productlist mt-4'>
                <button className="btn btn-primary">Xem thêm</button>
            </div>
        </>
    );
}

export default YouMightLike;