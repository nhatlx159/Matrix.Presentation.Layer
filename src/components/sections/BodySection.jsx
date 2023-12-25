import React from 'react';
import SideBarHomePage from './sideBarSection/SideBarHomePage';
import BestSeller from './homePageSection/BestSeller';
import '../styles/BodySection.css';
import YouMightLike from './homePageSection/YouMightLike';

function BodySection(props) {

    const homePageContent = () => {
        return (
            <>
                <div className='n-title-productlist'>Sản Phẩm bán chạy</div>
                <BestSeller />
                <div className='n-title-productlist mt-4'>Các sản phẩm dành cho bạn</div>
                <YouMightLike />
            </>
        )
    }
    // const productContent = () => {
    //     return (
    //         <div className="product-section product-section1">
    //             <h2>Danh mục: Hàng điện tử</h2>
    //             <FilterBar />
    //             <ProductList />
    //         </div>
    //     )
    // }
    const displayContent = () => {
        return (
            homePageContent()
        )
    }
    return (
        <div className="row" style={{ marginTop: '100px', marginRight: '0' }}>
            <SideBarHomePage />
            <div className="col">
                {displayContent()}
            </div>
        </div>
    );
}

export default BodySection;