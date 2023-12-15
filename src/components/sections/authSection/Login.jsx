import React from 'react';
import '../../styles/Login.css'

function Login(props) {
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
                        <span className="input-group-text password-icon" id="showPassword">
                            <i className="fas fa-eye-slash" id="eyeIcon" />
                        </span>
                    </div>
                </div>
                <button className="btn btn-primary btn-lg-submit" type="submit">Đăng nhập</button>
                <a href="ForgotPassword.html" className="forgot-password">Quên mật khẩu?</a>
                <a href="SignUp.html" className="sign-up">Đăng ký</a>
            </form>
        </div>

    );
}

export default Login;