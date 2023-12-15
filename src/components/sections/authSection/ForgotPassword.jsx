import React from 'react';
import '../../styles/ForgotPassword.css'

function ForgotPassword(props) {
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
                <p className="text-center mt-3">Trở về trang <a href="signin.html">đăng nhập</a></p>
            </form>
        </div>
    );
}

export default ForgotPassword;