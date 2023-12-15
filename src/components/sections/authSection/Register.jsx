import React from 'react';
import '../../styles/Register.css'

function Register(props) {
    return (
        <div className="container phu-signup-container" id="signUpContainer">
            <form className="form-signup" id="signUpForm">
                <h2 className="form-signin-heading">Đăng ký</h2>
                <label htmlFor="inputFullName" className="sr-only">Họ và tên</label>
                <input type="text" id="inputFullName" className="form-control form-control1" placeholder="Họ và tên" required />
                <label htmlFor="inputEmail" className="sr-only">Địa chỉ email</label>
                <input type="email" id="inputEmail" className="form-control 1" placeholder="Địa chỉ email" required />
                <label htmlFor="inputPhone" className="sr-only">Số điện thoại</label>
                <input type="tel" id="inputPhone" className="form-control form-control1" placeholder="Số điện thoại" required />
                <label htmlFor="inputPassword" className="sr-only">Mật khẩu</label>
                <div className="input-group">
                    <input type="password" id="inputPassword" className="form-control form-control1" placeholder="Mật khẩu" required />
                    <div className="input-group-append">
                        <span className="input-group-text password-icon" id="showPasswordRegister">
                            <i className="fas fa-eye-slash" id="eyeIcon" />
                        </span>
                    </div>
                </div>
                <label htmlFor="inputConfirmPassword" className="sr-only">Nhập lại mật khẩu</label>
                <div className="input-group">
                    <input type="password" id="inputConfirmPassword" className="form-control form-control1" placeholder="Nhập lại mật khẩu" required />
                    <div className="input-group-append">
                        <span className="input-group-text password-icon" id="showConfirmPasswordRegister">
                            <i className="fas fa-eye-slash" id="eyeConfirmIcon" />
                        </span>
                    </div>
                </div>
                <div className="text-center">
                    <p>Đã có tài khoản? <a href="SignIn.html">Đăng nhập ngay</a></p>
                </div>
                <button className="btn btn-rgt btn-primary" type="submit">Đăng nhập</button>
            </form>
        </div>
    );
}

export default Register;