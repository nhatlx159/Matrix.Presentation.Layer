import React, { useEffect, useState } from 'react';
import SideBarHomePage from './sideBarSection/SideBarHomePage';
import { useLocation } from 'react-router-dom';
import FilterBar from './productSection/FilterBar';
import { useNavigate } from 'react-router-dom';
import '../styles/animatedLoader.css';
import { getProductDetails } from '../../api_gateway/apiRequest';

function ViewProduct(props) {
    window.scrollTo(0, 0);
    const location = useLocation();
    const nav = useNavigate(); 
    const [data, setData] = useState(JSON.parse(localStorage.getItem('target')));
    const [dataProduct, setDataProduct] = useState(JSON.parse(localStorage.getItem('searchproduct')));
    const [visibleProducts, setVisibleProducts] = useState(10); // Số lượng sản phẩm hiển thị ban đầu
    const productsPerPage = 10; // Số lượng sản phẩm được hiển thị mỗi lần nhấn "Xem thêm"
    const [sortAsc, setSortAsc] = useState(true); // Biến để xác định thứ tự sắp xếp giá (tăng dần hay giảm dần)

    const price = (x) => {
        x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return x;
    };

    const showTitle = () => {
        if (location.pathname === "/category") {
            return <div className='n-title-productlist cart-title mb-4'>{'Danh mục: ' + data?.categoryName}</div>;
        } else {
            return <div className='n-title-productlist cart-title mb-4'>Kết quả tìm kiếm</div>;
        }
    };

    const redirectToDetails = async (e, id) => {
        e.preventDefault();
        await getProductDetails(id);
        nav('/productdetails');
    };

    const handleLoadMore = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + productsPerPage);
    };

    const handleSortPrice = () => {
        setSortAsc(!sortAsc); // Đảo ngược thứ tự sắp xếp giá
    };

    const displayContent = () => {
        let productsToDisplay = [];
        if (location.pathname === "/search") {
            productsToDisplay = dataProduct?.slice(0, visibleProducts);
        } else if (location.pathname === "/category") {
            productsToDisplay = data?.productList?.slice(0, visibleProducts);
        }

        // Sắp xếp sản phẩm theo giá (tăng/giảm dần)
        if (!sortAsc) {
            productsToDisplay.sort((a, b) => b.price - a.price);
        } else {
            productsToDisplay.sort((a, b) => a.price - b.price);
        }

        return (
            <>
                <div className="row n-row-productlist">
                    {productsToDisplay && productsToDisplay.map((value, key) => (
                        <div
                            key={key}
                            onClick={(e) => redirectToDetails(e, value.id)}
                            className="n-product-component mx-2 my-2">
                            <img
                                src={value?.productImages[0].imageLink}
                                alt=""
                                className="n-product-img"
                            />
                            <p className="n-product-title">{value?.productName}</p>
                            <div className="n-product-flashsale">Flash Sale</div>
                            <div className="n-product-bottom">
                                <div className="n-product-bottom-left">{price(value?.price)}</div>
                                <div className="n-product-bottom-right">Đã bán {value?.soldQuantity}</div>
                            </div>
                        </div>
                    ))}
                </div>
                {productsToDisplay && productsToDisplay.length < (location.pathname === "/search" ? dataProduct?.length : data?.productList?.length) &&
                    <div className='n-btn-productlist mt-4'>
                        <button className="btn btn-primary" onClick={handleLoadMore}>Xem thêm</button>
                    </div>
                }
                
            </>
        );
    };

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('target')));
        setVisibleProducts(10); // Reset lại số lượng sản phẩm hiển thị về 10 khi dữ liệu danh mục thay đổi
    }, [localStorage.getItem('target')]);

    useEffect(() => {
        setDataProduct(JSON.parse(localStorage.getItem('searchproduct')));
        setVisibleProducts(10); // Reset lại số lượng sản phẩm hiển thị về 10 khi dữ liệu tìm kiếm thay đổi
    }, [localStorage.getItem('searchproduct')]);

    return (
        <div className="row" style={{ marginTop: '100px', marginRight: '0' }}>
            <SideBarHomePage />
            <div className="col">
                {showTitle()}
                <div className="mt-4">
                    <button className="btn btn-secondary ml-2 mb-4" onClick={handleSortPrice}>
                        {sortAsc ? "Giá tăng dần" : "Giá giảm dần"}
                    </button>
                </div>
                {displayContent()}
            </div>
        </div>
    );
}

export default ViewProduct;
