import React from 'react';
import '../styles/Header.css';

function Header(props) {
    
    return (
        <nav id="phu-navbar" className="navbar navbar-expand-lg navbar-light bg-light custom-navbar header fixed-top phu-navbar" style={{ height: '50px' }}>
            <a className="navbar-brand" href="HomePage.html" style={{ height: '100%' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Matrix-icon-rounded.svg" alt="Logo" style={{ height: '100%' }} />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            {/* Form tìm kiếm di chuyển ra ngoài collapse */}
            <form className="form-inline my-2 my-lg-0 ml-auto">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fas fa-search" />
                        </span>
                    </div>
                    <input className="form-control mr-sm-2" type="search" placeholder="Tìm kiếm..." aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm Kiếm</button>
                    </div>
                </div>
            </form>
            {/* Các nút trong thanh điều hướng */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="HomePage.html">
                            <i className="fas fa-home" />
                            Trang Chủ
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a id="account-link" className="nav-link" href="#">
                            <i className="fas fa-user" />
                            Tài Khoản
                        </a>
                        <div id="account-dropdown" className="account-dropdown">
                            <ul>
                                <li><a href="UserInfo.html">Thông tin tài khoản</a></li>
                                <li><a href="OrderManagement.html">Đơn hàng của tôi</a></li>
                                <li><a href="SignOut.html">Đăng xuất</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            <i className="fas fa-shopping-cart fa-lg fa-relative">
                                <span className="badge badge-danger">3</span>
                            </i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Header;