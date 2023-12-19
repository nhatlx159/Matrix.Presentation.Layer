import React, { useEffect } from 'react';
import '../../styles/ForgotPassword.css'
import { Link } from 'react-router-dom';
import $ from 'jquery';

function ForgotPassword(props) {
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
                $('#sendCodeBtn').text('Gửi lại mã sau (' + cooldownTime + 's)');
                if (cooldownTime === 0) {
                    clearInterval(cooldown);
                    $('#sendCodeBtn').prop('disabled', false).text('Gửi mã');
                    cooldownTime = 60; // Reset cooldown time
                }
            }
        });
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
                <div className="form-group mt-4">
                    <input type="text" id="inputCode" className="form-control" placeholder="Nhập mã" required />
                </div>
                <button className="btn btn-lg btn-primary btn-fgpw-submit" type="submit">Tiếp tục</button>
                <p className="text-center mt-3">Trở về trang <Link to="/login">đăng nhập</Link></p>
            </form>
        </div>
    );
}

export default ForgotPassword;