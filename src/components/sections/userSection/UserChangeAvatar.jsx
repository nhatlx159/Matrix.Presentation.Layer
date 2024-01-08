import React, { useState } from 'react';
import '../../styles/UserChangeAvatar.css';

function UserChangeAvatar(props) {
    const [avatarUpload, setAvatarUpload] = useState(null);
    const handleChangeAvatar = (e) => {
        e.preventDefault();
        if(!avatarUpload) {
            alert("Please input your image!!!")
            return;
        }
    }
    const handleChange = (value) => {
        setAvatarUpload(value);
    }
    return (
        <div className="main-content-user-info">
            <form className='form-change-avatar row' onSubmit={(e) => handleChangeAvatar(e)}>
                <input type="file" accept='image/*' onChange={(e) => handleChange(e.target.files[0])} className='change-user-avatar col-12 col-sm-4' /> <br />
                {avatarUpload ?
                    <img src={URL.createObjectURL(avatarUpload)} className='pic pic-avatar-upload' alt="avatar upload" />
                    : 'No file uploaded!!'}
                <button className="d-block btn btn-primary my-4" type='submit'>Thay đổi ảnh đại diện</button>
            </form>
        </div>
    );
}

export default UserChangeAvatar;