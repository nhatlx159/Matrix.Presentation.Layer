import React, { useEffect, useState } from 'react';
import '../../styles/SideBar.css';
import '../../styles/animatedLoader.css'
import { Link, useNavigate } from 'react-router-dom';
import { getAllCategories, getAllProductByCategoryId } from '../../../api_gateway/apiRequest';

function SideBarHomePage(props) {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('categories')));
    const nav = useNavigate();
    const getValues = async (id) => {
        await getAllProductByCategoryId(id);
        nav("/category")
    }

    useEffect( () => {
    getAllCategories()
      setData(JSON.parse(localStorage.getItem('categories')))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="sidebar col-3 col-md-2 py-2">
            <ul style={{fontSize: 'small'}}>
            {data
                ? data?.map((value, key) => {
                    return (
                        <li key={key} onClick={()=>getValues(value.id)}><Link>{value?.categoryName}</Link></li>
                    );
                })
                : ""
            }   
            </ul>
        </div>
    );
}

export default SideBarHomePage;