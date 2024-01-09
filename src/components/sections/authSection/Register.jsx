import React, { useState } from 'react';
import '../../styles/Register.css'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useFormik } from 'formik';
import * as Yup from "yup";

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
    const checkUndefinedEmailError = () => {
        if (formik.errors.email !== undefined || $('#inputEmail').val() === '') {
            $('#sendVerifyCodeBtn').prop('disabled', true)
        } else {
            $('#sendVerifyCodeBtn').prop('disabled', false)
        }
    }
    const checkUndefinedVerifyCodeError = () => {
        if (formik.errors.verifyCode !== undefined || $('#inputVerifyCode').val() === '') {
            $('#handleVerifyCodeBtn').prop('disabled', true)
        } else {
            $('#handleVerifyCodeBtn').prop('disabled', false)
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
        setIsVerified(true);
    }
    const displayAfterVerifiedCode = () => {
        return (
            <>
                <h3 className='form-signin-heading'>Nhập thông tin</h3>
                <label htmlFor="inputFullName" className="sr-only">Họ và tên</label>
                <input type="text" id="inputFullName" className="form-control form-control1" placeholder="Họ và tên"
                    name='fullname'
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required />
                {formik.errors.fullname && formik.touched.fullname ? (<p className='text-formik-error'>{formik.errors.fullname}</p>) : null}
                <label htmlFor="inputPhone" className="sr-only">Số điện thoại</label>
                <input type="tel" id="inputPhone" className="form-control form-control1" placeholder="Số điện thoại"
                    name='phone'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required />
                {formik.errors.phone && formik.touched.phone ? (<p className='text-formik-error'>{formik.errors.phone}</p>) : null}
                <label htmlFor="inputPassword" className="sr-only">Mật khẩu</label>
                <div className="input-group mb-3">
                    <input type="password" id="inputPasswordRegister" className="form-control form-control1" placeholder="Mật khẩu"
                        name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required />
                    <div className="input-group-append">
                        <span className="input-group-text password-icon" id="showPasswordRegister" onClick={showPasswordRegister}>
                            <i className="fas fa-eye-slash" id="eyeIconPasswordRegister" />
                        </span>
                    </div>
                </div>
                {formik.errors.password && formik.touched.password ? (<p className='text-formik-error'>{formik.errors.password}</p>) : null}

                <label htmlFor="inputConfirmPassword" className="sr-only">Nhập lại mật khẩu</label>
                <div className="input-group mb-3">
                    <input type="password" id="inputConfirmPasswordRegister" className="form-control form-control1" placeholder="Nhập lại mật khẩu" 
                    name='passwordConfirmation'
                    value={formik.values.passwordConfirmation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required />
                    <div className="input-group-append">
                        <span className="input-group-text password-icon" id="showConfirmPasswordRegister" onClick={showPasswordConfirmRegister}>
                            <i className="fas fa-eye-slash" id="eyeRegisterConfirmIcon" />
                        </span>
                    </div>
                </div>
                {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation ? (<p className='text-formik-error'>{formik.errors.passwordConfirmation}</p>) : null}
                <button className="btn btn-rgt btn-primary" type="submit">Đăng ký</button>
            </>
        )
    }
    const checkCooldownValue = () => {
        if (cooldownTime > 0) {
            $(this).prop('disabled', true)
        }
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            verifyCode: "",
            fullname: "",
            phone: "",
            password: "",
            passwordConfirmation: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            verifyCode: Yup.string()
                .required("Required!")
                .test('test-verify-code', 'Must be exactly 6 characters', val => val.toString().length === 6),
            fullname: Yup.string()
                .required("Required!")
                .matches(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]{2,}(?: [a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+){0,8}$/, "Name isn't valid!"),
            phone: Yup.string()
                .required("Required!")
                .min(8)
                .max(15)
                .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Phone isn't valid!"),
            password: Yup.string()
                .required('No password provided.')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
            passwordConfirmation: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')

        }),
        onSubmit: values => {
            const data = {
                email: values.email,
                fullname: values.fullname,
                phone: values.phone,
                password: values.password
            }
            console.log(data);
        }
    })
    const handleRegister = (e) => {
        e.preventDefault()
        formik.handleSubmit()
    }

    return (
        <div className="container phu-signup-container" id="signUpContainer">
            {cooldownResendCode()}{checkCooldownValue()}{checkUndefinedEmailError()}{checkUndefinedVerifyCodeError()}
            <form className="form-signup" id="signUpForm" onSubmit={(e) => handleRegister(e)}>
                <h2 className="form-signin-heading">Đăng ký</h2>
                <div className="input-group">
                    <input type="text" name='email' id="inputEmail" className="form-control" placeholder="Nhập địa chỉ email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" id="sendVerifyCodeBtn" disabled>Gửi mã</button>
                    </div>
                </div>
                {formik.errors.email && formik.touched.email ? (<p className='text-formik-error'>{formik.errors.email}</p>) : null}
                <div className="input-group mt-4">
                    <input type="text" name='verifyCode' id="inputVerifyCode" className="form-control verify-code" placeholder="Nhập mã xác thực"
                        value={formik.values.verifyCode}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required />
                    <div className="input-group-append" onClick={() => handleVerifyCode()}>
                        <button className="btn btn-primary" type="button" id="handleVerifyCodeBtn" disabled>Xác thực</button>
                    </div>
                </div>
                {formik.errors.verifyCode && formik.touched.verifyCode ? (<p className='text-formik-error'>{formik.errors.verifyCode}</p>) : null}
                {isVerified ? displayAfterVerifiedCode() : ''}

                <div className="text-center mt-4">
                    <p>Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link></p>
                </div>

            </form>
        </div>
    );
}

export default Register;