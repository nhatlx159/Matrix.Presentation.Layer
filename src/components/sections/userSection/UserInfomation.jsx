import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/UserInfomation.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateUserInfo } from "../../../api_gateway/apiRequest";

function UserInfomation(props) {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [isDisplay, setIsDisplay] = useState("view-user-info");
  const [dateCalendar, setDateCalendar] = useState(null);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const handleOpenCalendar = () => {
    setIsOpenCalendar(!isOpenCalendar);
  };
  const handleSaveUserInfo = (e) => {
    e.preventDefault();
    formikChangeUserInfo.handleSubmit();
  };
  const handleCancelUserInfo = (e) => {
    e.preventDefault();
    setIsDisplay("view-user-info");
  };
  const handleSaveUpdatePassword = (e) => {
    e.preventDefault();
    formikUpdateUserPassword.handleSubmit();
  };
  const handleCancelUpdatePassword = (e) => {
    e.preventDefault();
    setIsDisplay("view-user-info");
  };
  const formikChangeUserInfo = useFormik({
    initialValues: {
      fullname: user?.fullName,
      gender: "male",
      birthday: user?.dob,
      phone: user?.userPhone,
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .required("Required!")
        .matches(
          /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]{2,}(?: [a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+){0,8}$/,
          "Name isn't valid!"
        ),
      phone: Yup.string()
        .required("Required!")
        .min(8)
        .max(15)
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone isn't valid!"
        ),
      gender: Yup.string().required("Required!"),
      // birthday: Yup.string()
      //     .required("Required!")
      //     .test('test-valid-birthday', 'Please enter exactly your birthday!!', val => new Date().getFullYear() - parseInt(val.split("-")[0]) >= 5)
    }),
    onSubmit: async (values) => {
      let strDob =`${dateCalendar.getFullYear()}-${Number(dateCalendar.getMonth()+1) < 10 ? '0' + Number(dateCalendar.getMonth()+1)
        : Number(dateCalendar.getMonth()+1)}-${dateCalendar.getDate() < 10 ? '0' + Number(dateCalendar.getDate()) : Number(dateCalendar.getDate())}`;
      
      console.log(strDob);
      const data = {
        id: user?.id,
        userEmail: user?.userEmail,
        fullName: values.fullname,
        dob: strDob || user?.dob,
        userPhone: values.phone,
        gender: values.gender,
      };
      console.log(data);
      await updateUserInfo(data);
      setIsDisplay("view-user-info");
    },
  });
  const formikUpdateUserPassword = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      newPasswordConfirmation: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Required!").min(8),
      newPassword: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      newPasswordConfirmation: Yup.string().oneOf(
        [Yup.ref("newPassword"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      const data = {
        password: values.password,
        newPassword: values.newPassword,
        newPasswordConfirmation: values.newPasswordConfirmation,
      };
      setIsDisplay("view-user-info");
      console.log(data);
    },
  });

  const displayContent = () => {
    if (isDisplay === "view-user-info") {
      return (
        <div className="section-user-info">
          <h2>Thông tin tài khoản</h2>
          <div className="info">
            <div className="left-section-user-info">
              <div className="info-item name">
                <p>Họ và tên: {user?.fullName}</p>
              </div>
              <div className="info-item gender">
                <p>Địa chỉ email: {user?.userEmail}</p>
              </div>
              <div className="info-item birthday">
                <p>Ngày sinh: {user?.dob}</p>
              </div>
              <div className="info-item gender">
                <p>Giới tính: {user?.gender}</p>
              </div>
              <div className="info-item gender">
                <p>Số điện thoại: {user?.userPhone}</p>
              </div>
              <div className="btn-group">
                <button
                  className="btn btn-primary float-end"
                  onClick={() => setIsDisplay("change-user-info")}
                >
                  Thay đổi thông tin
                </button>
                <button
                  className="btn btn-primary mx-3"
                  onClick={() => setIsDisplay("update-user-password")}
                >
                  Đổi mật khẩu
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (isDisplay === "change-user-info") {
      return (
        <div className="section-user-info">
          <h2>Thay đổi thông tin</h2>
          <form className="info" onSubmit={(e) => handleSaveUserInfo(e)}>
            <div className="left-section-user-info">
              <div className="info-item name">
                <label
                  htmlFor="change-user-name mr-2"
                  className="lable-change-info"
                >
                  Họ và tên:{" "}
                </label>
                <input
                  type="text"
                  id="change-user-name"
                  name="fullname"
                  value={formikChangeUserInfo.values.fullname}
                  onChange={formikChangeUserInfo.handleChange}
                  onBlur={formikChangeUserInfo.handleBlur}
                  required
                />
              </div>
              {formikChangeUserInfo.errors.fullname &&
              formikChangeUserInfo.touched.fullname ? (
                <p className="text-formik-error">
                  {formikChangeUserInfo.errors.fullname}
                </p>
              ) : null}

              <div className="info-item">
                <p className="mr-4 change-user-bd">
                  Ngày sinh:{" "}
                  {`${
                    dateCalendar
                      ? `${dateCalendar.getFullYear()}-${
                          dateCalendar.getMonth() + 1
                        }-${dateCalendar.getDate()}`
                      : ""
                  } `}
                </p>
                {/* <input type="text" id='change-user-name'
                                    name='birthday'
                                    value={formikChangeUserInfo.values.birthday}
                                    onChange={formikChangeUserInfo.handleChange()}
                                    onBlur={formikChangeUserInfo.handleBlur}
                                    required /> */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/71/Icons8_flat_calendar.svg"
                  onClick={handleOpenCalendar}
                  alt="calendar"
                  className="mr-2"
                  style={{ width: "30px" }}
                />
              </div>
              <div className="info-item birthday">
                {isOpenCalendar ? (
                  <Calendar value={dateCalendar} onChange={setDateCalendar} />
                ) : (
                  ""
                )}
              </div>
              {formikChangeUserInfo.errors.birthday &&
              formikChangeUserInfo.touched.birthday ? (
                <p className="text-formik-error">
                  {formikChangeUserInfo.errors.birthday}
                </p>
              ) : null}
              <div className="info-item gender">
                <label htmlFor="gender mr-2" className="lable-change-info">
                  Giới tính:{" "}
                </label>
                <select
                  name="gender"
                  id="change-user-name"
                  value={formikChangeUserInfo.values.gender}
                  onChange={formikChangeUserInfo.handleChange}
                  onBlur={formikChangeUserInfo.handleBlur}
                >
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="gmail">Gmail</option>
                </select>
              </div>
              {formikChangeUserInfo.errors.gender &&
              formikChangeUserInfo.touched.gender ? (
                <p className="text-formik-error">
                  {formikChangeUserInfo.errors.gender}
                </p>
              ) : null}

              <div className="info-item gender">
                <label
                  htmlFor="change-user-name mr-2"
                  className="lable-change-info"
                >
                  Số điện thoại:{" "}
                </label>
                <input
                  type="text"
                  id="change-user-name"
                  name="phone"
                  value={formikChangeUserInfo.values.phone}
                  onChange={formikChangeUserInfo.handleChange}
                  onBlur={formikChangeUserInfo.handleBlur}
                  required
                />
              </div>
              {formikChangeUserInfo.errors.phone &&
              formikChangeUserInfo.touched.phone ? (
                <p className="text-formik-error">
                  {formikChangeUserInfo.errors.phone}
                </p>
              ) : null}

              <div className="btn-group">
                <button className="btn btn-primary float-end" type="submit">
                  Lưu thông tin
                </button>
                <button
                  className="btn btn-danger mx-3"
                  onClick={(e) => handleCancelUserInfo(e)}
                >
                  Hủy
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    } else if (isDisplay === "update-user-password") {
      return (
        <div className="section-user-info">
          <h2>Cập nhật mật khẩu</h2>
          <form
            className="info row"
            onSubmit={(e) => handleSaveUpdatePassword(e)}
          >
            <div className="left-section-user-info">
              <div className="info-item name">
                <label
                  htmlFor="change-user-name mr-2 col-6"
                  className="lable-change-info"
                >
                  Nhập mật khẩu hiện tại:{" "}
                </label>
                <input
                  type="password"
                  id="change-user-name"
                  className="col-6"
                  name="password"
                  value={formikUpdateUserPassword.values.password}
                  onChange={formikUpdateUserPassword.handleChange}
                  onBlur={formikUpdateUserPassword.handleBlur}
                  required
                />
              </div>
              {formikUpdateUserPassword.errors.password &&
              formikUpdateUserPassword.touched.password ? (
                <p className="text-formik-error">
                  {formikUpdateUserPassword.errors.password}
                </p>
              ) : null}

              <div className="info-item gender">
                <label
                  htmlFor="change-user-name mr-2 col-6"
                  className="lable-change-info"
                >
                  Nhập mật khẩu mới:{" "}
                </label>
                <input
                  type="password"
                  id="change-user-name"
                  className="col-6"
                  name="newPassword"
                  value={formikUpdateUserPassword.values.newPassword}
                  onChange={formikUpdateUserPassword.handleChange}
                  onBlur={formikUpdateUserPassword.handleBlur}
                  required
                />
              </div>
              {formikUpdateUserPassword.errors.newPassword &&
              formikUpdateUserPassword.touched.newPassword ? (
                <p className="text-formik-error">
                  {formikUpdateUserPassword.errors.newPassword}
                </p>
              ) : null}

              <div className="info-item gender">
                <label
                  htmlFor="change-user-name mr-2"
                  className="lable-change-info"
                >
                  Nhập lại mật khẩu mới:{" "}
                </label>
                <input
                  type="password"
                  id="change-user-name"
                  name="newPasswordConfirmation"
                  value={
                    formikUpdateUserPassword.values.newPasswordConfirmation
                  }
                  onChange={formikUpdateUserPassword.handleChange}
                  onBlur={formikUpdateUserPassword.handleBlur}
                  required
                />
              </div>
              {formikUpdateUserPassword.errors.newPasswordConfirmation &&
              formikUpdateUserPassword.touched.newPasswordConfirmation ? (
                <p className="text-formik-error">
                  {formikUpdateUserPassword.errors.newPasswordConfirmation}
                </p>
              ) : null}

              <div className="btn-group">
                <button className="btn btn-primary float-end">
                  Cập nhật mật khẩu
                </button>
                <button
                  className="btn btn-danger mx-3"
                  onClick={handleCancelUpdatePassword}
                >
                  Hủy
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  };
  return <div className="main-content-user-info">{displayContent()}</div>;
}

export default UserInfomation;
