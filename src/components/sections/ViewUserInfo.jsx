import React, { useEffect } from 'react';
import "../styles/ViewUserInfo.css";
import SideBarUserInfo from './sideBarSection/SideBarUserInfo';
import UserAddress from './userSection/UserAddress';
import UserInfomation from './userSection/UserInfomation';
import { Route, useLocation } from 'react-router-dom';
import UserOrderManagement from './userSection/UserOrderManagement';
import UserChangeAvatar from './userSection/UserChangeAvatar';

function ViewUserInfo(props) {
    window.scrollTo(0, 0)
    const location = useLocation();
    const displayUserBody = ()=> {
        if(location.pathname === "/userinfo"){
            return <UserInfomation />
        } else if (location.pathname === "/ordermanagement") {
            return <UserOrderManagement />
        } else if (location.pathname === "/useraddress") {
            return <UserAddress />
        } else if (location.pathname === "/changeavatar") {
            return <UserChangeAvatar />
        }
    }
    //aaaaaaaaaaaaaaaaaaaaaaaaaaa
    return (
        <div className='content-user-info'>
            <SideBarUserInfo />
            {displayUserBody()}
        </div>
    );
}

export default ViewUserInfo;