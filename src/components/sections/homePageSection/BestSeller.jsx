/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/BestSeller.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductComponent from '../productSection/ProductComponent';

function BestSeller(props) {
    const [data, setData] = useState()
    useEffect( async ()=> {
        const data = await axios.get("http://localhost:8080/api/v1/users/products/topselling");
        setData(data);
    }, [])
    return (
        <>
            <div className="row n-row-productlist">
                <ProductComponent data={data} />
            </div>
            <div className='n-btn-productlist mt-4'>
                <button className="btn btn-primary">Xem thêm</button>
            </div>
        </>

    );
}

export default BestSeller;