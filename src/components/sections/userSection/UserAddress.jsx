import React, { useState } from 'react';
import "../../styles/UserAddress.css";

function UserAddress(props) {
    const [isDisplay, setIsDisplay] = useState('view-user-address');
    
    const handleSubmitNewAddress = (e)=> {
        e.preventDefault()
        setIsDisplay('view-user-address')
    }
    const handleCancelNewAddress = (e)=> {
        e.preventDefault()
        setIsDisplay('view-user-address')
    }
    const handleUpdateAddress = (e)=> {
        e.preventDefault()
        setIsDisplay('view-user-address')
    }
    const handleCancelUpdateAddress = (e)=> {
        e.preventDefault()
        setIsDisplay('view-user-address')
    }
    const displayUserAddressBody = () => {
        if (isDisplay === 'view-user-address') {
            return (
                <>
                    <div className="add-address-button" onClick={()=>setIsDisplay('add-new-address')}>
                        <i className="fas fa-plus-circle" /> Thêm địa chỉ mới
                    </div>

                    <div className="address-card address-container">
                        <div className="address-field">
                            <span className="address-label">Hoàng Nhật</span>
                        </div>
                        <div className="address-field">
                            <span className="address-value">0123456789</span>
                        </div>
                        <div className="address-field">
                            <span className="address-value">184 Lê Đại Hành, Phường 15, Quận 11, TP Hồ Chí Minh</span>
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-primary btn-sm mr-2" onClick={()=>setIsDisplay('update-address')}>Chỉnh sửa</button>
                        </div>
                        <div className="address-field">
                            <span className="address-value text-success font-italic font-weight-light">Địa chỉ mặc định</span>
                        </div>
                    </div>
                    <div className="address-card address-container">
                        <div className="address-field">
                            <span className="address-label">Hoàng Nhật</span>
                        </div>
                        <div className="address-field">
                            <span className="address-value">0123456789</span>
                        </div>
                        <div className="address-field">
                            <span className="address-value">184 Lê Đại Hành, Phường 15, Quận 11, TP Hồ Chí Minh</span>
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-primary btn-sm mr-2" onClick={()=>setIsDisplay('update-address')}>Chỉnh sửa</button>
                            <button className="btn btn-danger btn-sm">Xóa</button>
                        </div>
                    </div>
                    <div className="address-card address-container">
                        <div className="address-field">
                            <span className="address-label">Hoàng Nhật</span>
                        </div>
                        <div className="address-field">
                            <span className="address-value">0123456789</span>
                        </div>
                        <div className="address-field">
                            <span className="address-value">184 Lê Đại Hành, Phường 15, Quận 11, TP Hồ Chí Minh</span>
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-primary btn-sm mr-2" onClick={()=>setIsDisplay('update-address')}>Chỉnh sửa</button>
                            <button className="btn btn-danger btn-sm">Xóa</button>
                        </div>
                    </div>
                </>
            )
        } else if (isDisplay === 'add-new-address') {
            return (
                <>
                    <div className='title-add-new-address'>Thêm địa chỉ mới</div>
                    <div className="form-add-address add-new-address">
                        <form>
                            <input type='text' placeholder='Họ tên người nhận' className='input-add-address'></input>
                            <input type='text' placeholder='Số điện thoại' className='input-add-address'></input>
                            <input type='text' placeholder='Địa chỉ nhận hàng' className='input-add-address'></input>
                            <button className="btn btn-primary btn-add-address btn-sm" type='submit' onClick={(e)=>handleSubmitNewAddress(e)}>Thêm địa chỉ</button>
                            <button className="btn btn-danger btn-add-address btn-sm" type='submit' onClick={(e)=>handleCancelNewAddress(e)}>Hủy</button>
                        </form>
                    </div>
                </>
            )
        } else if (isDisplay === 'update-address') {
            return (
                <>
                    <div className='title-add-new-address'>Thay đổi thông tin địa chỉ</div>
                    <div className="form-add-address add-new-address">
                        <form>
                            <input type='text' placeholder='Họ tên người nhận' className='input-add-address'></input>
                            <input type='text' placeholder='Số điện thoại' className='input-add-address'></input>
                            <input type='text' placeholder='Địa chỉ nhận hàng' className='input-add-address'></input>
                            <button className="btn btn-primary btn-add-address btn-sm" type='submit' onClick={(e)=>handleUpdateAddress(e)}>Thay đổi</button>
                            <button className="btn btn-danger btn-add-address btn-sm" type='submit' onClick={(e)=>handleCancelUpdateAddress(e)}>Hủy</button>
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