import React, { useEffect } from 'react';
import "../styles/ViewUserInfo.css";
import SideBarUserInfo from './sideBarSection/SideBarUserInfo';
import UserAddress from './userSection/UserAddress';
import UserInfomation from './userSection/UserInfomation';
import { Route, useLocation } from 'react-router-dom';
import UserOrderManagement from './userSection/UserOrderManagement';

function ViewUserInfo(props) {
    const location = useLocation();
    const displayUserBody = ()=> {
        if(location.pathname === "/userinfo"){
            return <UserInfomation />
        } else if (location.pathname === "/ordermanagement") {
            return <UserOrderManagement />
        } else if (location.pathname === "/useraddress") {
            return <UserAddress />
        }
    }
    
    return (
        <div className='content-user-info'>
            <SideBarUserInfo />
            {displayUserBody()}
        </div>
    );
}

export default ViewUserInfo;