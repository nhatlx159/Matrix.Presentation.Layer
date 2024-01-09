import React, { useState } from 'react';
import '../../styles/CheckOutAdresses.css';

function CheckOutAdresses(props) {
    const [openAddressList, setOpenAddressList] = useState(false);
    const [openFormAddAddress, setOpenFormAddAddress] = useState(false);

    const handleOpenAddressList = ()=> {
        setOpenFormAddAddress(false);
        setOpenAddressList(!openAddressList);
    }
    const handleOpenFormAddAddress = ()=> {
        setOpenAddressList(false);
        setOpenFormAddAddress(!openFormAddAddress);
    }
    const displayAddressList = ()=> {
        return (
            <form id="addressForm">
                <div className="address-card">
                    <input type="radio" id="age1" name="age" defaultValue={30} />
                    <div className="address-field">
                        <span className="address-label">Hoàng Nhật</span>
                    </div>
                    <div className="address-field">
                        <span className="address-value">0123456789</span>
                    </div>
                    <div className="address-field">
                        <span className="address-value">184 Lê Đại Hành, Phường 15, Quận 11, TP Hồ Chí Minh 184 Lê Đại Hành, Phường 15, Quận 11, TP Hồ Chí Minh</span>
                    </div>
                    <div className="address-field">
                        <span className="address-value text-success font-italic font-weight-light">Địa chỉ mặc định</span>
                    </div>
                </div>
                <div className="address-card">
                    <input type="radio" id="age1" name="age" defaultValue={30} />
                    
                    <div className="address-field">
                        <span className="address-label">Chunpapo</span>
                    </div>
                    <div className="address-field">
                        <span className="address-value">0909887665</span>
                    </div>
                    <div className="address-field">
                        <span className="address-value">12 Hồng Hà, Phường 2, Quận Tân Bình, TP Hồ Chí Minh</span>
                    </div>
                </div>
                <div className="address-card">
                    <input type="radio" id="age1" name="age" defaultValue={30} />
                    
                    <div className="address-field">
                        <span className="address-label">Võ Hồng Phú</span>
                    </div>
                    <div className="address-field">
                        <span className="address-value">0356776060</span>
                    </div>
                    <div className="address-field">
                        <span className="address-value">268 Lý Thường Kiệt, Phường 14, Quận 10, Hồ Chí Minh</span>
                    </div>
                </div>
            </form>
        )
    }
    const displayFormAddAddress = ()=> {
        return (
            <div className="form-add-address">
                <form>
                    <input type='text' placeholder='Họ tên người nhận' className='input-add-address'></input>
                    <input type='text' placeholder='Số điện thoại' className='input-add-address'></input>
                    <input type='text' placeholder='Địa chỉ nhận hàng' className='input-add-address'></input>
                    <button className="btn btn-primary btn-add-address btn-sm" type='submit'>Sử dụng địa chỉ này</button>
                    <button className="btn btn-primary btn-add-address btn-sm" type='submit'>Sử dụng và lưu địa chỉ này</button>
                </form>
            </div>
        )
    }
    return (
        <div className="col-md-6">
            <h3>Chọn địa chỉ giao hàng</h3>
            <div className="btn btn-primary my-2 mr-4" onClick={handleOpenAddressList}>Mở sổ địa chỉ</div>
            <div className="btn btn-primary" onClick={handleOpenFormAddAddress}>Sử dụng địa chỉ khác</div>
            {openAddressList ? displayAddressList() : ''}
            {openFormAddAddress ? displayFormAddAddress() : ''}
        </div>
    );
}

export default CheckOutAdresses;