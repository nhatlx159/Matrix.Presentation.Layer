import React, { useState } from 'react';
import "../../styles/UserSidebar.css";
import { Link } from 'react-router-dom';

function SideBarUserInfo(props) {
    const [user] = useState(
        JSON.parse(localStorage.getItem("userData"))
      );
    return (
        <aside className="sidebar-user-info">
            <div className="user">
                <div className="profile-avatar">
                    <img className='profile-avatar-img' src={user?.avatar} alt="user avatar" />
                    <Link className="change-avt" to="/changeavatar"><i className="fas fa-edit"></i></Link>
                </div>
                <div className="user-name">{user?.fullName}</div>
                <p>Hạng thành viên: {user?.membershipRank}</p>
                <p>(Points: {user?.membershipPoint})</p>
            </div>
            <Link to='/userinfo' className="sidebar-item">
                <i className="fas fa-user" /> Thông tin tài khoản
            </Link>
            <Link to='/ordermanagement' className="sidebar-item">
                <i className="fas fa-clipboard-list" /> Quản lí đơn hàng
            </Link>
            <Link to='/useraddress' className="sidebar-item">
                <i className="fas fa-address-book" /> Sổ địa chỉ
            </Link>
        </aside>
    );
}

export default SideBarUserInfo;