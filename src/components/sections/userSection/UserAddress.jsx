import React, { useState } from 'react';
import "../../styles/UserAddress.css";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { addNewAddress } from '../../../api_gateway/apiRequest';

function UserAddress(props) {
    const [isDisplay, setIsDisplay] = useState('view-user-address');
    const [isDefault, setIsDefault] = useState(false);
    const [isUpdateDefault, setIsUpdateDefault] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('userData')));
    const [receiverInfo, setReceiverInfo] = useState(JSON.parse(localStorage.getItem('userData')).receiverInfoList)


    const handleSubmitNewAddress = (e) => {
        e.preventDefault()
        formikNewAddress.handleSubmit()

    }
    const handleCancelNewAddress = (e) => {
        e.preventDefault()
        setIsDisplay('view-user-address')
    }
    const handleUpdateAddress = (e) => {
        e.preventDefault()
        formikUpdateAddress.handleSubmit()
    }
    const handleCancelUpdateAddress = (e) => {
        e.preventDefault()
        setIsDisplay('view-user-address')
    }

    const formikNewAddress = useFormik({
        initialValues: {
            fullname: "",
            phone: "",
            address: "",
        },
        validationSchema: Yup.object({
            fullname: Yup.string()
                .required("Required!")
                .matches(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]{2,}(?: [a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+){0,8}$/, "Name isn't valid!"),
            phone: Yup.string()
                .required("Required!")
                .min(8)
                .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Phone isn't valid!"),
            address: Yup.string()
                .required("Required!"),

        }),
        onSubmit: values => {
            let adefault = 0;
            const data = {
                receiverName: values.fullname,
                receiverPhone: values.phone,
                receiverAddress: values.address,
                isDefault: adefault,
                userId: user?.id
            }
            setIsDisplay('view-user-address')
            console.log(data);
            addNewAddress(data)
        }
    });
    const formikUpdateAddress = useFormik({
        initialValues: {
            fullname: "",
            phone: "",
            address: "",
        },
        validationSchema: Yup.object({
            fullname: Yup.string()
                .required("Required!")
                .matches(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]{2,}(?: [a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+){0,8}$/, "Name isn't valid!"),
            phone: Yup.string()
                .required("Required!")
                .min(8)
                .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "Phone isn't valid!"),
            address: Yup.string()
                .required("Required!"),

        }),
        onSubmit: values => {
            const data = {
                receiverName: values.fullname,
                receiverPhone: values.phone,
                receiverAddress: values.address,
                default: 0,
                userId: user?.id
            }
            setIsDisplay('view-user-address')
            console.log(data);
            
        }
    });


    const displayUserAddressBody = () => {
        if (isDisplay === 'view-user-address') {
            return (
                <>
                    <div className="add-address-button" onClick={() => setIsDisplay('add-new-address')}>
                        <i className="fas fa-plus-circle" /> Thêm địa chỉ mới
                    </div>
                    {receiverInfo ? receiverInfo?.map((value, key)=> {
                        return (
                            <div className="address-card address-container" key={key}>
                                <div className="address-field">
                                    <span className="address-label">{value?.receiverName}</span>
                                </div>
                                <div className="address-field">
                                    <span className="address-value">{value?.receiverPhone}</span>
                                </div>
                                <div className="address-field">
                                    <span className="address-value">{value?.receiverAddress}</span>
                                </div>
                                <div className="btn-group">
                                    <button className="btn btn-primary btn-sm mr-2" onClick={() => setIsDisplay('update-address')}>Chỉnh sửa</button>
                                    {value?.isDefault === 1 ? '' : <button className="btn btn-danger btn-sm">Xóa</button>}
                                </div>
                                {value?.isDefault === 1 ? 
                                <div className="address-field">
                                    <span className="address-value text-success font-italic font-weight-light">Địa chỉ mặc định</span>
                                </div>
                                : ""}
                            </div>
                        )
                    }): ''}
                </>
            )
        } else if (isDisplay === 'add-new-address') {
            return (
                <>
                    <div className='title-add-new-address'>Thêm địa chỉ mới</div>
                    <div className="form-add-address add-new-address">
                        <form>
                            <input type='text' placeholder='Họ tên người nhận' name='fullname' className='input-add-address'
                                value={formikNewAddress.values.fullname}
                                onChange={formikNewAddress.handleChange}
                                onBlur={formikNewAddress.handleBlur}
                                required
                            />
                            {formikNewAddress.errors.fullname && formikNewAddress.touched.fullname ? (<p className='text-formik-error ml-4'>{formikNewAddress.errors.fullname}</p>) : null}
                            <input type='text' placeholder='Số điện thoại' name='phone' className='input-add-address'
                                value={formikNewAddress.values.phone}
                                onChange={formikNewAddress.handleChange}
                                onBlur={formikNewAddress.handleBlur}
                                required
                            />
                            {formikNewAddress.errors.phone && formikNewAddress.touched.phone ? (<p className='text-formik-error ml-4'>{formikNewAddress.errors.phone}</p>) : null}
                            <input type='text' placeholder='Địa chỉ nhận hàng' name='address' className='input-add-address'
                                value={formikNewAddress.values.address}
                                onChange={formikNewAddress.handleChange}
                                onBlur={formikNewAddress.handleBlur}
                                required
                            />
                            {formikNewAddress.errors.address && formikNewAddress.touched.address ? (<p className='text-formik-error ml-4'>{formikNewAddress.errors.address}</p>) : null}
                            <input type="checkbox" className='input-check-box' name='check-default-address'/>
                            <label htmlFor="check-default-address" className='float-end'>Đặt làm địa chỉ mặc định</label>
                            <div>
                                <button className="btn btn-primary btn-add-address btn-sm" type='submit' onClick={(e) => handleSubmitNewAddress(e)}>Thêm địa chỉ</button>
                                <button className="btn btn-danger btn-add-address btn-sm" type='submit' onClick={(e) => handleCancelNewAddress(e)}>Hủy</button>
                            </div>
                        </form>
                    </div>
                </>
            )
        } else if (isDisplay === 'update-address') {
            return (
                <>
                    <div className='title-add-new-address'>Thay đổi thông tin địa chỉ</div>
                    <div className="form-add-address add-new-address">
                        <form onSubmit={(e) => handleUpdateAddress(e)}>
                            <input type='text' placeholder='Họ tên người nhận' className='input-add-address'
                                name='fullname'
                                value={formikUpdateAddress.values.fullname}
                                onChange={formikUpdateAddress.handleChange}
                                onBlur={formikUpdateAddress.handleBlur}
                                required
                            />
                            {formikUpdateAddress.errors.fullname && formikUpdateAddress.touched.fullname ? (<p className='text-formik-error ml-4'>{formikUpdateAddress.errors.fullname}</p>) : null}

                            <input type='text' placeholder='Số điện thoại' className='input-add-address'
                                name='phone'
                                value={formikUpdateAddress.values.phone}
                                onChange={formikUpdateAddress.handleChange}
                                onBlur={formikUpdateAddress.handleBlur}
                                required
                            />
                            {formikUpdateAddress.errors.phone && formikUpdateAddress.touched.phone ? (<p className='text-formik-error ml-4'>{formikUpdateAddress.errors.phone}</p>) : null}

                            <input type='text' placeholder='Địa chỉ nhận hàng' className='input-add-address'
                                name='address'
                                value={formikUpdateAddress.values.address}
                                onChange={formikUpdateAddress.handleChange}
                                onBlur={formikUpdateAddress.handleBlur}
                                required
                            />
                            {formikUpdateAddress.errors.address && formikUpdateAddress.touched.address ? (<p className='text-formik-error ml-4'>{formikUpdateAddress.errors.address}</p>) : null}

                            <input type="checkbox" className='input-check-box' name='check-default-address'

                            />
                            <label htmlFor="check-default-address" className='float-end'>Đặt làm địa chỉ mặc định</label>
                            <div>
                                <button className="btn btn-primary btn-add-address btn-sm" type='submit' >Thêm địa chỉ</button>
                                <button className="btn btn-danger btn-add-address btn-sm" type='submit' onClick={(e) => handleCancelUpdateAddress(e)}>Hủy</button>
                            </div>
                        </form>
                    </div>
                </>
            )
        }
    }
    return (
        <div className="main-content-user-info">
            <h3>Sổ địa chỉ</h3>
            {displayUserAddressBody()}
        </div>
    );
}

export default UserAddress;