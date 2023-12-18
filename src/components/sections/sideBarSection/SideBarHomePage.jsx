import React from 'react';
import '../../styles/SideBar.css';

function SideBarHomePage(props) {
    return (
        <div className="sidebar">
            <ul>
                <li><a href="./ProductCategory.html"><i className="fas fa-book" /> Sách</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-laptop" /> Hàng điện tử</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-tshirt" /> Thời trang</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-gift" /> Quà lưu niệm</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-bicycle" /> Xe đạp</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-gamepad" /> Đồ chơi</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-baby" /> Đồ dùng cho trẻ em</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-tools" /> Công cụ</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-heartbeat" /> Sức khỏe và làm đẹp</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-paint-brush" /> Mỹ thuật</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-futbol" /> Thể thao</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-music" /> Âm nhạc</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-utensils" /> Đồ ăn</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-flask" /> Hóa học</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-paw" /> Vật nuôi</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-mobile-alt" /> Điện thoại di động</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-camera" /> Máy ảnh</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-home" /> Nội thất</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-plane" /> Du lịch</a></li>
                <li><a href="./ProductCategory.html"><i className="fas fa-wrench" /> Sửa chữa</a></li>
                {/* Thêm các mục liên kết khác nếu cần */}
            </ul>
        </div>
    );
}

export default SideBarHomePage;