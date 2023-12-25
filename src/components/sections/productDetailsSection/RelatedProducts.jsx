import React from 'react';
import '../../styles/RelatedProducts.css';
import ProductComponent from '../productSection/ProductComponent';

function RelatedProducts(props) {

    return (
        <div className="mt-4">
            <div className="n-title-productlist">Sản phẩm tương tự</div>
            <div className="row n-row-productlist">
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
            </div>
            <div className='n-btn-productlist mt-4'>
                <button className="btn btn-primary">Xem thêm</button>
            </div>
        </div>
    );
}

export default RelatedProducts;