import React, { useEffect, useState } from 'react';
import Product from './Product';
import Order from './Order';
import '../../styles/adminSection.css'
import { getAllOrders, getAllProducts } from '../../../api_gateway/apiRequest';
import { useLocation, Link, useNavigate } from 'react-router-dom';

function AdminPage(props) {
    const products=JSON.parse(localStorage.getItem('products'));
    const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')));
    const user = JSON.parse(localStorage.getItem('userData'))
    const nav = useNavigate();
    window.scrollTo(0, 0)
    const location = useLocation();
    const displayUserBody = ()=> {
        if(location.pathname === "/admin/product"){
            return <Product products={products} />
        } else if (location.pathname === "/admin/order") {
            return <Order />
        }
    }
    useEffect(()=> {
        if(user?.roleId !== 2){
            nav('/')
        }
    }, [])

    return (
        <div style={{height: "100%"}}>
            <div className='n-title-productlist' style={{marginTop: "100px", 
            marginBottom: "30px",
            fontSize: "30px", fontWeight: "bold"}}>
                Admin page
            </div>
            <div className="n-btn-productlist mb-4">
                <button className="btn btn-primary" onClick={()=> {getAllProducts(nav);}}>Product</button>
                <button className="btn btn-secondary" onClick={()=> {getAllOrders(nav);}}>Order</button>
            </div>
            {displayUserBody()}
        </div>
    );
}

export default AdminPage;