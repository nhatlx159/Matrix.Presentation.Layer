import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../../styles/UserInfomation.css";

function UserInfomation(props) {
    const [isOpenCalendar, setIsOpenCalendar] = useState(false)
    const [isDisplay, setIsDisplay] = useState('view-user-info');
    const handleOpenCalendar = () => {
        setIsOpenCalendar(!isOpenCalendar);
    }
    const handleSaveUserInfo = (e)=> {
        e.preventDefault();
        setIsDisplay('view-user-info');
    }
    const handleCancelUserInfo = (e)=> {
        e.preventDefault();
        setIsDisplay('view-user-info');
    }
    const handleSaveUpdatePassword = (e)=> {
        e.preventDefault();
        setIsDisplay('view-user-info');
    }
    const handleCancelUpdatePassword = (e)=> {
        e.preventDefault();
        setIsDisplay('view-user-info');
    }
    const displayContent = () => {
        if (isDisplay === 'view-user-info') {
            return (
                <div className="section-user-info">
                    <h2>Thông tin tài khoản</h2>
                    <div className="info">
                        <div className="left-section-user-info">
                            <div className="info-item name">
                                <p>Họ và tên: Vermillion</p>
                            </div>
                            <div className="info-item birthday">
                                <p>Ngày sinh: 13/10/????</p>
                            </div>
                            <div className="info-item gender">
                                <p>Giới tính: gmail</p>
                            </div>
                            <div className="info-item gender">
                                <p>Số điện thoại: 0908776554</p>
                            </div>
                            <div className="info-item gender">
                                <p>Địa chỉ email: vermillion@gmail.com</p>
                            </div>
                            <div className="btn-group">
                                <button className="btn btn-primary float-end" onClick={()=>setIsDisplay('change-user-info')}>Thay đổi thông tin</button>
                                <button className="btn btn-primary mx-3" onClick={()=>setIsDisplay('update-user-password')}>Đổi mật khẩu</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (isDisplay === 'change-user-info') {
            return (
                <div className="section-user-info">
                    <h2>Thay đổi thông tin</h2>
                    <form className="info">
                        <div className="left-section-user-info">
                            <div className="info-item name">
                                <label htmlFor="change-user-name mr-2" className='lable-change-info'>Họ và tên: </label>
                                <input type="text" id='change-user-name' />
                            </div>
                            <div className="info-item birthday">
                                <p className='mr-4 change-user-bd'>Ngày sinh: 13/10/????</p> <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Icons8_flat_calendar.svg" onClick={handleOpenCalendar} alt='calendar' className='mr-2' style={{ width: "30px" }} />
                            </div>
                            <div className="info-item birthday">
                                {isOpenCalendar ? <Calendar /> : ''}
                            </div>

                            <div className="info-item gender">
                                <label htmlFor="change-user-name mr-2" className='lable-change-info'>Giới tính: </label>
                                <select name="change-user-name" id="change-user-name">
                                    <option value="male">Nam</option>
                                    <option value="female">Nữ</option>
                                    <option value="gmail">Gmail</option>
                                </select>
                            </div>
                            <div className="info-item gender">
                                <label htmlFor="change-user-name mr-2" className='lable-change-info'>Số điện thoại: </label>
                                <input type="text" id='change-user-name' />
                            </div>
                            <div className="info-item gender">
                                <label htmlFor="change-user-name mr-2" className='lable-change-info'>Địa chỉ email: </label>
                                <input type="text" id='change-user-name' />
                            </div>
                            <div className="btn-group">
                                <button className="btn btn-primary float-end" onClick={(e)=> handleSaveUserInfo(e)}>Lưu thông tin</button>
                                <button className="btn btn-danger mx-3" onClick={(e)=> handleCancelUserInfo(e)}>Hủy</button>
                            </div>
                        </div>
                    </form>
                </div>
            )
        } else if (isDisplay === 'update-user-password') {
            return (
                <div className="section-user-info">
                    <h2>Cập nhật mật khẩu</h2>
                    <form className="info row">
                        <div className="left-section-user-info">
                            <div className="info-item name">
                                <label htmlFor="change-user-name mr-2 col-6" className='lable-change-info'>Nhập mật khẩu hiện tại: </label>
                                <input type="text" id='change-user-name' className='col-6' />
                            </div>

                            <div className="info-item gender">
                                <label htmlFor="change-user-name mr-2 col-6" className='lable-change-info'>Nhập mật khẩu mới: </label>
                                <input type="text" id='change-user-name' className='col-6' />
                            </div>
                            <div className="info-item gender">
                                <label htmlFor="change-user-name mr-2" className='lable-change-info'>Nhập lại mật khẩu mới: </label>
                                <input type="text" id='change-user-name' />
                            </div>
                            <div className="btn-group">
                                <button className="btn btn-primary float-end" onClick={handleSaveUpdatePassword}>Cập nhật mật khẩu</button>
                                <button className="btn btn-danger mx-3" onClick={handleCancelUpdatePassword}>Hủy</button>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }

    }
    return (
        <div className="main-content-user-info">
            {displayContent()}
        </div>


    );
}

export default UserInfomation;