import React, { useEffect, useState } from 'react';
import '../../styles/UserChangeAvatar.css';
import { updateAvatar } from '../../../api_gateway/apiRequest';

function UserChangeAvatar(props) {
    const [userId] = useState(JSON.parse(localStorage.getItem('userData'))?.id)
    const [avatarUpload, setAvatarUpload] = useState(null);
    const handleChangeAvatar = (e) => {
        e.preventDefault();
        // if(!avatarUpload) {
        //     alert("Please input your image!!!")
        //     return;
        // }

    }
    const handleChange = () => {
        const body = {
            id: userId,
            avatar: avatarUpload
        }
        updateAvatar(body)
    }
    useEffect(() => {
        var myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: "dit0eba5q",
                uploadPreset: 'kmf6t5hg',
                apiKey: "591847415579884",
                cropping: false,
                folder: 'Matrix.UserAvatar'
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info);
                    setAvatarUpload(result.info.url); // Thêm url của ảnh đã upload vào mảng
                }
            }
        );

        const uploadButton = document.getElementById('upload_widget_avatar');

        // Định nghĩa hàm mở upload widget
        const openUploadWidget = () => {
            myWidget.open();
        };

        // Xóa bỏ event listener cũ trước khi gắn một event listener mới
        uploadButton.removeEventListener('click', openUploadWidget);

        // Gắn event listener cho nút upload
        uploadButton.addEventListener('click', openUploadWidget);

        // Cleanup
        return () => {
            // Xóa bỏ event listener khi component unmount
            uploadButton.removeEventListener('click', openUploadWidget);
        };
    }, []);
    
    return (
        <div className="main-content-user-info">
            
            <div className='form-change-avatar row'>
                            <button id="upload_widget_avatar" className="cloudinary-button mt-4 mb-4">
                                Upload new your avatar
                            </button>
                {/* <input type="file" accept='image/*' onChange={(e) => handleChange(e.target.files[0])} className='change-user-avatar col-12 col-sm-4' /> <br /> */}
                {avatarUpload ?
                    <img src={avatarUpload} className='pic pic-avatar-upload' alt="avatar upload" />
                    : 'No file uploaded!!'}
                <button className="d-block btn btn-primary my-4" onClick={handleChange}>Thay đổi ảnh đại diện</button>
            </div>
        </div>
    );
}

export default UserChangeAvatar;