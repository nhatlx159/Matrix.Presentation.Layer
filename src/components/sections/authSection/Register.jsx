import React, { useState } from 'react';
import '../../styles/Register.css'
import { Link } from 'react-router-dom';
import $ from 'jquery';

function Register(props) {
    const [showPR, setShowPR] = useState(false);
    const showPasswordRegister = () => {
        setShowPR(!showPR)
        const passwordField = $('#inputPasswordRegister');
        const fieldType = passwordField.attr('type');
        if (fieldType === 'password') {
            passwordField.attr('type', 'text');
            $('#eyeIconPasswordRegister').removeClass('fa-eye-slash').addClass('fa-eye');
        } else {
            passwordField.attr('type', 'password');
            $('#eyeIconPasswordRegister').removeClass('fa-eye').addClass('fa-eye-slash');
        }
    }
    const showPasswordConfirmRegister = () => {
        setShowPR(!showPR)
        const passwordField = $('#inputConfirmPasswordRegister');
        const fieldType = passwordField.attr('type');
        if (fieldType === 'password') {
            passwordField.attr('type', 'text');
            $('#eyeRegisterConfirmIcon').removeClass('fa-eye-slash').addClass('fa-eye');
        } else {
            passwordField.attr('type', 'password');
            $('#eyeRegisterConfirmIcon').removeClass('fa-eye').addClass('fa-eye-slash');
        }
    }
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
                <div className="input-group mb-3">
                    <input type="password" id="inputPasswordRegister" className="form-control form-control1" placeholder="Mật khẩu" required />
                    <div className="input-group-append">
                        <span className="input-group-text password-icon" id="showPasswordRegister" onClick={showPasswordRegister}>
                            <i className="fas fa-eye-slash" id="eyeIconPasswordRegister" />
                        </span>
                    </div>
                </div>
                <label htmlFor="inputConfirmPassword" className="sr-only">Nhập lại mật khẩu</label>
                <div className="input-group mb-3">
                    <input type="password" id="inputConfirmPasswordRegister" className="form-control form-control1" placeholder="Nhập lại mật khẩu" required />
                    <div className="input-group-append">
                        <span className="input-group-text password-icon" id="showConfirmPasswordRegister" onClick={showPasswordConfirmRegister}>
                            <i className="fas fa-eye-slash" id="eyeRegiste  rConfirmIcon" />
                        </span>
                    </div>
                </div>
                <div className="text-center">
                    <p>Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link></p>
                </div>
                <button className="btn btn-rgt btn-primary" type="submit">Đăng nhập</button>
            </form>
        </div>
    );
}

export default Register;