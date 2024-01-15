import React, { useEffect, useState } from 'react';
import SideBarHomePage from './sideBarSection/SideBarHomePage';
import { useLocation } from 'react-router-dom';
import FilterBar from './productSection/FilterBar';
import ProductComponent from './productSection/ProductComponent';

function ViewProduct(props) {
    window.scrollTo(0, 0)
    const location = useLocation();
    const [titleContent, setTitleContent] = useState('');
    const displayContent = () => {
        if (location.pathname === "/search") {
            return (
                <>
                    <div className="row n-row-productlist">
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
                </>
            )
        } else if (location.pathname === "/category") {
            return (
                <>
                    <div className="row n-row-productlist">
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
                </>
            )
        }
    }
    useEffect(() => {
        setTitleContent(location.pathname.split('/')[1])
    }, [location.pathname])
    return (
        <div className="row" style={{ marginTop: '100px', marginRight: '0' }}>
            <SideBarHomePage />
            <div className="col">
                <div className='n-title-productlist cart-title mb-4'>{titleContent}</div>
                <FilterBar />
                {displayContent()}
            </div>
        </div>
    );
}

export default ViewProduct;