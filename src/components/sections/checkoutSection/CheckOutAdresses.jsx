import React, { useState } from 'react';
import '../../styles/CheckOutAdresses.css';
import { Link } from 'react-router-dom';

function CheckOutAdresses(props) {
    const [openAddressList, setOpenAddressList] = useState(false);
    const [openFormAddAddress, setOpenFormAddAddress] = useState(false);
    const [receiverInfo, setReceiverInfo] = useState(JSON.parse(localStorage.getItem('userData')).receiverInfoList)
    const handleReceiverId = (value)=> {
        localStorage.setItem('rcvid', value)
        console.log(localStorage.getItem('rcvid'));
    }

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
                {receiverInfo ? receiverInfo?.map((value, key)=> {
                    return (
                        <div className="address-card" key={key}>
                            <input type="radio" id={value?.id} name="age" onClick={()=>handleReceiverId(value?.id)} />
                            <div className="address-field">
                                <span className="address-label">{value?.receiverName}</span>
                            </div>
                            <div className="address-field">
                                <span className="address-value">{value?.receiverPhone}</span>
                            </div>
                            <div className="address-field">
                                <span className="address-value">{value?.receiverAddress}</span>
                            </div>
                            {value?.isDefault === 1 ? 
                            <div className="address-field">
                                <span className="address-value text-success font-italic font-weight-light">Địa chỉ mặc định</span>
                            </div>
                            : ""}
                        </div>
                    )
                }) : ''}
                
                
            </form>
        )
    }
    // const displayFormAddAddress = ()=> {
    //     return (
    //         <div className="form-add-address">
    //             <form>
    //                 <input type='text' placeholder='Họ tên người nhận' className='input-add-address'></input>
    //                 <input type='text' placeholder='Số điện thoại' className='input-add-address'></input>
    //                 <input type='text' placeholder='Địa chỉ nhận hàng' className='input-add-address'></input>
    //                 <button className="btn btn-primary btn-add-address btn-sm" type='submit'>Sử dụng địa chỉ này</button>
    //                 <button className="btn btn-primary btn-add-address btn-sm" type='submit'>Sử dụng và lưu địa chỉ này</button>
    //             </form>
    //         </div>
    //     )
    // }
    return (
        <div className="col-md-6">
            <h3>Chọn địa chỉ giao hàng</h3>
            <div className="btn btn-primary my-2 mr-4" onClick={handleOpenAddressList}>Mở sổ địa chỉ</div>
            {/* <div className="btn btn-primary" onClick={handleOpenFormAddAddress}>Sử dụng địa chỉ khác</div> */}
            {openAddressList ? receiverInfo.length < 1 ?
             <div>
                <span style={{'textAlign': 'center', 'display': 'block'}}>Sổ địa chỉ của bạn đang trống</span>
            </div> : displayAddressList()  : ''}
            {/* {openFormAddAddress ? displayFormAddAddress() : ''} */}
            {openAddressList ?
            <Link to="/useraddress">
                <div className="add-address-button">
                    <i className="fas fa-plus-circle" /> Thêm địa chỉ mới
                </div>
            </Link> : ''}
        </div>
    );
}

export default CheckOutAdresses;