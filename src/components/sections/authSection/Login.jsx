import React, { useEffect, useState } from 'react';
import '../../styles/Login.css'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import $ from 'jquery';
import * as Yup from "yup";
import axios from 'axios';

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
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            agent: "",
            ipInfo: null,
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            password: Yup.string()
                .required('No password provided.')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        }),
        onSubmit: (values) => {
            const data = {
                email: values.email,
                password: values.password,
                agent: navigator.userAgent,
                ipInfo: "ipInfo"
            }
            console.log(data);
        }
    })
    let ipInfo = async () => {
        const request = await fetch("https://ipinfo.io/json?token=022deb5242c70d")
        const jsonResponse = await request.json()
        console.log(jsonResponse)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        
        // console.log(ipInfo);
        // formik.handleSubmit();
    }
    return (
        <div className="container phu-signin-container" id="signInContainer">
            <form className="form-signin" id="signInForm" onSubmit={(e) => handleLogin(e)}>
                <h2 className="form-signin-heading">Đăng nhập</h2>
                <label htmlFor="inputEmail" className="sr-only">Email</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required autofocus />
                {formik.errors.email && formik.touched.email ? (<p className='text-formik-error'>{formik.errors.email}</p>) : null}
                <label htmlFor="inputPassword" className="sr-only">Mật khẩu</label>
                <div className="input-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Mật khẩu"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required />
                    <div className="input-group-append">
                        <span className="input-group-text password-icon" id="showPassword" onClick={showPassword}>
                            <i className="fas fa-eye-slash" id="eyeIcon" />
                        </span>
                    </div>
                </div>
                {formik.errors.password && formik.touched.password ? (<p className='text-formik-error'>{formik.errors.password}</p>) : null}
                <button className="btn btn-primary btn-lg-submit" type="submit">Đăng nhập</button>
                <Link to="/forgotpassword" className="forgot-password">Quên mật khẩu?</Link>
                <Link to="/register" className="sign-up">Đăng ký</Link>
            </form>
        </div>

    );
}

export default Login;