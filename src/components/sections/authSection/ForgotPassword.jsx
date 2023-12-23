import React, { useEffect, useState } from 'react';
import '../../styles/ForgotPassword.css'
import { Link } from 'react-router-dom';
import $ from 'jquery';

function ForgotPassword(props) {
    const [showPR, setShowPR] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const cooldownResendCode = ()=> {
        let cooldown;
        let cooldownTime = 60; // 60 seconds

        $(document).ready(function () {
            $('#sendCodeBtn').on('click', function () {
                $(this).prop('disabled', true).text('Gửi lại mã sau (' + cooldownTime + 's)');
                cooldown = setInterval(updateCooldown, 1000);
            });

            function updateCooldown() {
                cooldownTime--;
                $('#sendCodeBtn').prop('disabled', true).text('Gửi lại mã sau (' + cooldownTime + 's)');
                if (cooldownTime === 0) {
                    clearInterval(cooldown);
                    $('#sendCodeBtn').prop('disabled', false).text('Gửi mã');
                    cooldownTime = 60; // Reset cooldown time
                }
            }
        });
    }
    const showPasswordForgotPassword = () => {
        setShowPR(!showPR)
        const passwordField = $('#inputPasswordRegister');
        const fieldType = passwordField.attr('type');
        if (fieldType === 'password') {
            passwordField.attr('type', 'text');
            $('#eyeIconForgotPassword').removeClass('fa-eye-slash').addClass('fa-eye');
        } else {
            passwordField.attr('type', 'password');
            $('#eyeIconForgotPassword').removeClass('fa-eye').addClass('fa-eye-slash');
        }
    }
    const showPasswordConfirmForgotPassword = () => {
        setShowPR(!showPR)
        const passwordField = $('#inputConfirmPasswordForgotPassword');
        const fieldType = passwordField.attr('type');
        if (fieldType === 'password') {
            passwordField.attr('type', 'text');
            $('#eyeIconForgotPasswordConfirm').removeClass('fa-eye-slash').addClass('fa-eye');
        } else {
            passwordField.attr('type', 'password');
            $('#eyeIconForgotPasswordConfirm').removeClass('fa-eye').addClass('fa-eye-slash');
        }
    }
    const handleVerifyCode = () => {
        setIsVerified(!isVerified);
    }
    const displayAfterVerifiedCode = () => {
        return (
            <>
                <h3 className='form-signin-heading'>Nhập mật khẩu mới</h3>
                <div className="input-group mb-3">
                    <input type="password" id="inputPasswordRegister" className="form-control form-control1" placeholder="Mật khẩu" required />
                    <div className="input-group-append">
                        <span className="input-group-text password-icon" id="showPasswordForgotPassword" onClick={showPasswordForgotPassword}>
                            <i className="fas fa-eye-slash" id="eyeIconForgotPassword" />
                        </span>
                    </div>
                </div>
                <label htmlFor="inputConfirmPassword" className="sr-only">Nhập lại mật khẩu</label>
                <div className="input-group mb-3">
                    <input type="password" id="inputConfirmPasswordForgotPassword" className="form-control form-control1" placeholder="Nhập lại mật khẩu" required />
                    <div className="input-group-append">
                        <span className="input-group-text password-icon" id="showConfirmPasswordForgotPassword" onClick={showPasswordConfirmForgotPassword}>
                            <i className="fas fa-eye-slash" id="eyeIconForgotPasswordConfirm" />
                        </span>
                    </div>
                </div>
                <button className="btn btn-lg btn-primary btn-fgpw-submit" type="submit">Tiếp tục</button>
            </>
        )
    }
    useEffect(()=> {
        cooldownResendCode()
    }, [])
    return (
        <div className="container phu-forgot-container">
            <form className="form-forgot-password">
                <h2 className="form-signin-heading">Quên mật khẩu</h2>
                <div className="form-group">
                    <div className="input-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Nhập địa chỉ email" required />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" id="sendCodeBtn">Gửi mã</button>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Nhập mã xác thực" required />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" id="sendCodeBtn" onClick={handleVerifyCode}>Xác thực</button>
                        </div>
                    </div>
                </div>
                {isVerified ? displayAfterVerifiedCode() : ''}
                <p className="text-center mt-3">Trở về trang <Link to="/login">đăng nhập</Link></p>
            </form>
        </div>
    );
}

export default ForgotPassword;