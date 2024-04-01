import React, { useEffect, useState } from 'react';
import SideBarHomePage from './sideBarSection/SideBarHomePage';
import { useLocation } from 'react-router-dom';
import FilterBar from './productSection/FilterBar';
import '../styles/animatedLoader.css'

function ViewProduct(props) {
    window.scrollTo(0, 0)
    const location = useLocation();
    const [data, setData] = useState(JSON.parse(localStorage.getItem('target')))
    const [dataProduct, setDataProduct] = useState(JSON.parse(localStorage.getItem('searchproduct')))
    const price = (x) => {
        x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return x
    }
    const showTitle = ()=> {
        if(location.pathname === "/category"){
            return <div className='n-title-productlist cart-title mb-4'>{'Danh mục: ' + data?.categoryName}</div>
        } else {
            return <div className='n-title-productlist cart-title mb-4'>Kết quả tìm kiếm</div>
        }
    }
    const displayContent = () => {
        if (location.pathname === "/search") {
            return (
                <>
                    <div className="row n-row-productlist">
                    {dataProduct
                        ? dataProduct?.map((value, key) => {
                            return (
                            <div
                                className="n-product-component mx-2 my-2">
                                <img
                                src={value?.productImages[0].imageLink}
                                alt=""
                                className="n-product-img"
                                />
                                <p className="n-product-title" key={key}>
                                {value?.productName}
                                </p>
                                <div className="n-product-flashsale">Flash Sale</div>
                                <div className="n-product-bottom">
                                <div className="n-product-bottom-left">{price(value?.price)}</div>
                                <div className="n-product-bottom-right">Đã bán {value?.soldQuantity}</div>
                                </div>
                            </div>
                            );
                        })
                        : <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
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
                    {data
                        ? data?.productList.map((value, key) => {
                            return (
                            <div
                                className="n-product-component mx-2 my-2">
                                <img
                                src={value?.productImages[0].imageLink}
                                alt=""
                                className="n-product-img"
                                />
                                <p className="n-product-title" key={key}>
                                {value?.productName}
                                </p>
                                <div className="n-product-flashsale">Flash Sale</div>
                                <div className="n-product-bottom">
                                <div className="n-product-bottom-left">{price(value?.price)}</div>
                                <div className="n-product-bottom-right">Đã bán {value?.soldQuantity}</div>
                                </div>
                            </div>
                            );
                        })
                        : <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
                    </div>
                    <div className='n-btn-productlist mt-4'>
                        <button className="btn btn-primary">Xem thêm</button>
                    </div>
                </>
            )
        }
    }
    useEffect(()=> {
        setData(JSON.parse(localStorage.getItem('target')))
        console.log(data);
    }, [])
    useEffect(()=> {
        setDataProduct(JSON.parse(localStorage.getItem('searchproduct')))
    }, [])
    useEffect(()=> {
        setDataProduct(JSON.parse(localStorage.getItem('searchproduct')))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localStorage.getItem('searchproduct')])
    useEffect(()=> {
        setData(JSON.parse(localStorage.getItem('target')))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localStorage.getItem('target')])
    
    return (
        <div className="row" style={{ marginTop: '100px', marginRight: '0' }}>
            <SideBarHomePage />
            <div className="col">
                {showTitle()}
                <FilterBar />
                {displayContent()}
            </div>
        </div>
    );
}

export default ViewProduct;