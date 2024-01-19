import React, { useState } from 'react';
import '../../styles/ForgotPassword.css'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useFormik } from 'formik';
import * as Yup from "yup";

function ForgotPassword(props) {
    //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    const [showPR, setShowPR] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    const cooldownResendCode = () => {
        let cooldown;
        let cooldownTime = 60;

        $(document).ready(function () {
            $('#sendVerifyCodeEmailForgotPasswordBtn').on('click', function () {
                $(this).prop('disabled', true).text('Gửi lại mã sau (' + cooldownTime + 's)');
                cooldown = setInterval(updateCooldown, 1000);
            });

            function updateCooldown() {
                cooldownTime--;
                $('#sendVerifyCodeEmailForgotPasswordBtn').prop('disabled', true).text('Gửi lại mã sau (' + cooldownTime + 's)');
                if (cooldownTime === 0) {
                    clearInterval(cooldown);
                    $('#sendVerifyCodeEmailForgotPasswordBtn').prop('disabled', false).text('Gửi mã');
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
    const checkUndefinedEmailForgotPasswordError = () => {
        if (formik.errors.emailForgotPassword !== undefined || $('#inputEmailForgotPassword').val() === '') {
            $('#sendVerifyCodeEmailForgotPasswordBtn').prop('disabled', true)
        } else {
            $('#sendVerifyCodeEmailForgotPasswordBtn').prop('disabled', false)
        }
    }
    const checkUndefinedVerifyCodeForgotPasswordError = () => {
        if (formik.errors.verifyCodeForgotPassword !== undefined || $('#inputVerifyCodeForgotPassword').val() === '') {
            $('#handleVerifyCodeForgotPasswordBtn').prop('disabled', true)
        } else {
            $('#handleVerifyCodeForgotPasswordBtn').prop('disabled', false)
        }
    }
    const handleVerifyCode = () => {
        setIsVerified(true);
    }
    const displayAfterVerifiedCode = () => {
        return (
            <>
                <h3 className='form-signin-heading'>Nhập mật khẩu mới</h3>
                <div className="input-group mb-3">
                    <input type="password" name='newPassword' id="inputPasswordRegister" className="form-control form-control1" placeholder="Mật khẩu" 
                    value={formik.values.newPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required />
                    <div className="input-group-append">
                        <span className="input-group-text password-icon" id="showPasswordForgotPassword" onClick={showPasswordForgotPassword}>
                            <i className="fas fa-eye-slash" id="eyeIconForgotPassword" />
                        </span>
                    </div>
                </div>
                {formik.errors.newPassword && formik.touched.newPassword ? (<p className='text-formik-error'>{formik.errors.newPassword}</p>) : null}
                <label htmlFor="inputConfirmPassword" className="sr-only">Nhập lại mật khẩu</label>
                <div className="input-group mb-3">
                    <input type="password" name='newPasswordConfirmation' id="inputConfirmPasswordForgotPassword" className="form-control form-control1" placeholder="Nhập lại mật khẩu" 
                    value={formik.values.newPasswordConfirmation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required />
                    <div className="input-group-append">
                        <span className="input-group-text password-icon" id="showConfirmPasswordForgotPassword" onClick={showPasswordConfirmForgotPassword}>
                            <i className="fas fa-eye-slash" id="eyeIconForgotPasswordConfirm" />
                        </span>
                    </div>
                </div>
                {formik.errors.newPasswordConfirmation && formik.touched.newPasswordConfirmation ? (<p className='text-formik-error'>{formik.errors.newPasswordConfirmation}</p>) : null}
                <button className="btn btn-lg btn-primary btn-fgpw-submit" type="submit">Tiếp tục</button>
            </>
        )
    }

    const formik = useFormik({
        initialValues: {
            emailForgotPassword: "",
            verifyCodeForgotPassword: "",
            newPassword: "",
            newPasswordConfirmation: ""
        },
        validationSchema: Yup.object({
            emailForgotPassword: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            verifyCodeForgotPassword: Yup.string()
                .required("Required!")
                .test('test-verify-code', 'Must be exactly 6 characters', val => val.toString().length === 6),
            newPassword: Yup.string()
                .required('No password provided.')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
            newPasswordConfirmation: Yup.string()
                .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')

        }),
        onSubmit: values => {
            const data = {
                email: values.emailForgotPassword,
                password: values.newPassword
            }
            console.log(data);
        }
    })
    const handleResetPassword = (e)=> {
        e.preventDefault()
        formik.handleSubmit()
    }
    return (
        <div className="container phu-forgot-container">
            {cooldownResendCode()}
            {checkUndefinedEmailForgotPasswordError()}
            {checkUndefinedVerifyCodeForgotPasswordError()}
            <form className="form-forgot-password" onSubmit={(e)=> handleResetPassword(e)}>
                <h2 className="form-signin-heading">Quên mật khẩu</h2>
                <div className="form-group">
                    <div className="input-group">
                        <input type="email" name='emailForgotPassword' id="inputEmailForgotPassword" className="form-control" placeholder="Nhập địa chỉ email"
                            value={formik.values.emailForgotPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit" id="sendVerifyCodeEmailForgotPasswordBtn" disabled>Gửi mã</button>
                        </div>
                    </div>
                </div>
                {formik.errors.emailForgotPassword && formik.touched.emailForgotPassword ? (<p className='text-formik-error'>{formik.errors.emailForgotPassword}</p>) : null}
                <div className="form-group">
                    <div className="input-group">
                        <input type="text" name='verifyCodeForgotPassword' id="inputVerifyCodeForgotPassword" className="form-control" placeholder="Nhập mã xác thực"
                            value={formik.values.verifyCodeForgotPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required />
                        <div className="input-group-append" onClick={handleVerifyCode}>
                            <button className="btn btn-primary" type="button" id="handleVerifyCodeForgotPasswordBtn" disabled>Xác thực</button>
                        </div>
                    </div>
                </div>
                {formik.errors.verifyCodeForgotPassword && formik.touched.verifyCodeForgotPassword ? (<p className='text-formik-error'>{formik.errors.verifyCodeForgotPassword}</p>) : null}
                {isVerified ? displayAfterVerifiedCode() : ''}
                <p className="text-center mt-3">Trở về trang <Link to="/login">đăng nhập</Link></p>
            </form>
        </div>
    );
}

export default ForgotPassword;