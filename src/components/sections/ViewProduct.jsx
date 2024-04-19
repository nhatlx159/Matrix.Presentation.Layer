import React, { useEffect, useState } from 'react';
import SideBarHomePage from './sideBarSection/SideBarHomePage';
import { useLocation } from 'react-router-dom';
import FilterBar from './productSection/FilterBar';
import { useNavigate } from 'react-router-dom';
import '../styles/animatedLoader.css'
import { getProductDetails } from '../../api_gateway/apiRequest';

function ViewProduct(props) {
    window.scrollTo(0, 0)
    const location = useLocation();
    const nav = useNavigate(); 
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
    const redirectToDetails = async (e, id)=> {
        e.preventDefault()
        await getProductDetails(id) 
        nav('/productdetails');
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
                                onClick={(e)=>redirectToDetails(e, value.id)}
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
                                onClick={(e)=>redirectToDetails(e, value.id)}
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