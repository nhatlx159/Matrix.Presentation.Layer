import React from 'react';
import SideBarHomePage from './sideBarSection/SideBarHomePage';
import BestSeller from './homePageSection/BestSeller';
import '../styles/BodySection.css';
import YouMightLike from './homePageSection/YouMightLike';
import TodayList from './homePageSection/TodayList';
import ProductList from './productSection/ProductList';
import FilterBar from './productSection/FilterBar';

function BodySection(props) {

    const homePageContent = () => {
        return (
            <div className="product-section product-section1">
                <h2>Sản phẩm bán chạy</h2>
                <BestSeller />
                <h2>Có thể bạn thích</h2>
                <YouMightLike />
                <h2>Sản phẩm hôm nay</h2>
                <TodayList />
            </div>
        )
    }
    const productContent = () => {
        return (
            <div className="product-section product-section1">
                <h2>Danh mục: Hàng điện tử</h2>
                <FilterBar />
                <ProductList />
            </div>
        )
    }
    const displayContent = () => {
        return homePageContent()
    }
    return (
        <div className="content" style={{ marginTop: '50px' }}>
            <SideBarHomePage />
            <div className="main-content main-content1">
                {displayContent()}
            </div>
        </div>
    );
}

export default BodySection;