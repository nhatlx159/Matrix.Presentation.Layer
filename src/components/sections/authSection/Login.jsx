import React, { useEffect, useState } from 'react';
import '../../styles/Login.css'
import { Link } from 'react-router-dom';
import $ from 'jquery';

function Login(props) {
    const [showPw, setShowPw] = useState(false);
    const showPassword = () => {
        setShowPw(!showPw)
        const passwordField = $('#inputPassword');
        const fieldType = passwordField.attr('type');
        if (fieldType === 'password') {
            passwordField.attr('type', 'text');
            $('#eyeIcon').removeClass('fa-eye-slash').addClass('fa-eye');
        } else {
            passwordField.attr('type', 'password');
            $('#eyeIcon').removeClass('fa-eye').addClass('fa-eye-slash');
        }
    }
    
    return (
        <div className="container phu-signin-container" id="signInContainer">
            <form className="form-signin" id="signInForm">
                <h2 className="form-signin-heading">Đăng nhập</h2>
                <label htmlFor="inputEmail" className="sr-only">Email</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email" required autofocus />
                <label htmlFor="inputPassword" className="sr-only">Mật khẩu</label>
                <div className="input-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Mật khẩu" required />
                    <div className="input-group-append">
                        <span className="input-group-text password-icon" id="showPassword" onClick={showPassword}>
                            <i className="fas fa-eye-slash" id="eyeIcon" />
                        </span>
                    </div>
                </div>
                <button className="btn btn-primary btn-lg-submit" type="submit">Đăng nhập</button>
                <Link to="/forgotpassword" className="forgot-password">Quên mật khẩu?</Link>
                <Link to="/register" className="sign-up">Đăng ký</Link>
            </form>
        </div>

    );
}

export default Login;