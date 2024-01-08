import React from 'react';
import "../../styles/UserSidebar.css";
import { Link } from 'react-router-dom';

function SideBarUserInfo(props) {
    return (
        <aside className="sidebar-user-info">
            <div className="user">
                <div className="profile-avatar">
                    <img className='profile-avatar-img' src="https://avatars.githubusercontent.com/u/75898680?v=4" alt="user avatar" />
                    <Link className="change-avt" to="/changeavatar"><i className="fas fa-edit"></i></Link>
                </div>
                <div className="user-name">Vermillion</div>
                <p>Hạng thành viên: Diamond</p>
                <p>(Points: 198.675)</p>
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