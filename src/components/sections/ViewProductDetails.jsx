import React from 'react';
import ProductInfomation from './productDetailsSection/ProductInfomation';
import RelatedProducts from './productDetailsSection/RelatedProducts';
import ReviewContent from './productDetailsSection/ReviewContent';
import ReviewArea from './productDetailsSection/ReviewArea';

function ViewProductDetails(props) {
    window.scrollTo(0, 0)
    return (
        <div className='container'>
            <ProductInfomation />
            <RelatedProducts />
            <ReviewContent />
            <ReviewArea />
            <ReviewArea />
            <ReviewArea />
        </div>
    );
}

export default ViewProductDetails;