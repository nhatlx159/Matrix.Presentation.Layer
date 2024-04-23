import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
import { getAllProductByName } from "../../api_gateway/apiRequest";
import axios from "axios";

function Header(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [searchText, setSearchText] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("userData")));
  const nav = useNavigate();
  $(document).ready(function () {
    var isHovered = false;

    $("#account-link").mouseover(function () {
      $("#account-dropdown").fadeIn(200);
      isHovered = true;
    });

    $("#account-dropdown").mouseover(function () {
      isHovered = true;
    });

    $("#account-link, #account-dropdown").mouseout(function () {
      isHovered = false;
      setTimeout(function () {
        if (!isHovered) {
          $("#account-dropdown").fadeOut(200);
        }
      }, 500);
    });
  });
  const avatarIcon = () => {
    if(!user?.avatar){
      return (
        <div className="avt-icon">
          <img className="avt-image" src="https://via.placeholder.com/150" alt="avatar" />
        </div>
      )
    }
    return (
      <div className="avt-icon">
        <img className="avt-image" src={user?.avatar} alt="avatar" />
      </div>
    );
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    await getAllProductByName(searchText);
    nav("/search");
  };

  const handleLogout = ()=> {
    localStorage.removeItem("userData")
  }
  const countCart = ()=> {
    let c = 0;
    for (let i = 0; i < user?.cartDetails?.length; i++) {
      const ele = user?.cartDetails[i]
      c = c + ele.itemQuantity
    }
    return c;
  }
  useEffect(() => {
    if (localStorage.getItem("userData")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    setUser(JSON.parse(localStorage.getItem("userData")));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem("userData")]);
  useEffect(() => {
    const fetchUserData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080//api/v1/users/${user?.id}`, {
                headers: {
                    'Accept': '*/*',
                }
            });
            setUser(response.data);
            localStorage.setItem('userData', JSON.stringify(response.data))
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    fetchUserData();
}, []);
  return (
    <nav
      id="phu-navbar"
      className="navbar navbar-expand-lg navbar-light custom-navbar header fixed-top phu-navbar"
      style={{ height: "50px" }}
    >
      <Link className="navbar-brand" to="/" style={{ height: "100%" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/be/Matrix-icon-rounded.svg"
          alt="Logo"
          style={{ height: "100%" }}
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      {/* Form tìm kiếm di chuyển ra ngoài collapse */}
      <form
        className="form-inline my-lg-0 ml-auto"
        onSubmit={(e) => handleSearch(e)}
      >
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-search" />
            </span>
          </div>
          <input
            className="form-control mr-sm-2"
            onChange={e => setSearchText(e.target.value)}
            type="search"
            placeholder="Tìm kiếm..."
            aria-label="Search"
            required
          />
          <div className="input-group-append">
            <button className="btn btn-outline-success my-sm-0" type="submit">
              Tìm Kiếm
            </button>
          </div>
        </div>
      </form>
      {/* Các nút trong thanh điều hướng */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">

            {
              isLogin && user?.roleId === 2 ? (
                <Link className="nav-link" to="/admin">
                  <i className="fas fa-home" />
                  Admin
                </Link>
              ) : (<Link className="nav-link" to="/">
                    <i className="fas fa-home" />
                    Trang Chủ
                  </Link>)
            }
            
          </li>
          <li className="nav-item active">
            <span id="account-link" className="nav-link">
              {isLogin ? (
                avatarIcon()
              ) : (
                <Link to="/login">
                  <i className="fas fa-user" />
                </Link>
              )}
              {isLogin ? (
                <p className="d-inline ml-2">{user?.fullName}</p>
              ) : (
                <Link to="/login" className="acco">
                  <p className="d-inline ml-2" style={{color: "black", textDecoration: "none"}}>Tài khoản</p>
                </Link>
              )}
            </span>
            {isLogin ? (
              <div id="account-dropdown" className="account-dropdown">
                <ul>
                  <li>
                    <Link to="/userinfo">Thông tin tài khoản</Link>
                  </li>
                  <li>
                    <Link to="/ordermanagement">Đơn hàng của tôi</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={handleLogout}>Đăng xuất</Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </li>
          <li className="nav-item active">
            {
              user ? <Link className="nav-link" to="/cartdetails">
              <i className="fas fa-shopping-cart fa-lg fa-relative">
                <span className="badge badge-danger">{countCart()}</span>
              </i>
            </Link> : <Link className="nav-link" to="/login">
              <i className="fas fa-shopping-cart fa-lg fa-relative">
                <span className="badge badge-danger">{countCart()}</span>
              </i>
            </Link> 
            }
            
          </li>
        </ul>
      </div>
      
    </nav>
  );
}

export default Header;
