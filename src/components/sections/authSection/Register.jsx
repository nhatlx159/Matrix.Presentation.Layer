import React, { useEffect, useState } from 'react';
import '../../styles/Register.css'
import { Link } from 'react-router-dom';
import $ from 'jquery';

function Register(props) {
    const [showPR, setShowPR] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    let cooldownTime = 300;
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
    const cooldownResendCode = () => {
        let cooldown;
        $(document).ready(function () {
            $('#sendVerifyCodeBtn').on('click', function () {
                $(this).prop('disabled', true).text('Gửi lại mã sau (' + cooldownTime + 's)');
                
                cooldown = setInterval(updateCooldown, 1000);
            });

            function updateCooldown() {
                cooldownTime -= 1;
                $('#sendVerifyCodeBtn').prop('disabled', true).text('Gửi lại mã sau (' + cooldownTime + 's)');
                if (cooldownTime === 0) {
                    clearInterval(cooldown);
                    $('#sendVerifyCodeBtn').prop('disabled', false).text('Gửi mã');
                    cooldownTime = 300; // Reset cooldown time
                }
            }
        });
    }
    const handleVerifyCode = () => {
        setIsVerified(!isVerified);
    }
    const displayAfterVerifiedCode = () => {
        return (
            <>
                <h3 className='form-signin-heading'>Nhập thông tin</h3>
                <label htmlFor="inputFullName" className="sr-only">Họ và tên</label>
                <input type="text" id="inputFullName" className="form-control form-control1" placeholder="Họ và tên" required />
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
                            <i className="fas fa-eye-slash" id="eyeRegisterConfirmIcon" />
                        </span>
                    </div>
                </div>
                <button className="btn btn-rgt btn-primary" type="submit">Đăng ký</button>
            </>
        )
    }
    const checkCooldownValue = ()=> {
        if(cooldownTime > 0) {
            $(this).prop('disabled', true)
        }
    }
    return (
        <div className="container phu-signup-container" id="signUpContainer">
            {cooldownResendCode()}{checkCooldownValue()}
            <form className="form-signup" id="signUpForm">
                <h2 className="form-signin-heading">Đăng ký</h2>
                <div className="input-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Nhập địa chỉ email" required />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" id="sendVerifyCodeBtn">Gửi mã</button>
                    </div>
                </div>
                <div className="input-group my-4">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Nhập mã xác thực" required />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" onClick={handleVerifyCode}>Xác thực</button>
                    </div>
                </div>
                {isVerified ? displayAfterVerifiedCode() : ''}

                <div className="text-center mt-4">
                    <p>Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link></p>
                </div>

            </form>
        </div>
    );
}

export default Register;