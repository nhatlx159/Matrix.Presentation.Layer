import React from 'react';
import '../../styles/SideBar.css';
import { Link } from 'react-router-dom';

function SideBarHomePage(props) {
    return (
        <div className="sidebar col-3 col-md-2 py-2">
            <ul style={{fontSize: 'small'}}>
                <li><Link to="/category"><i className="fas fa-book" /> Sách</Link></li>
                <li><Link to="/category"><i className="fas fa-laptop" /> Hàng điện tử</Link></li>
                <li><Link to="/category"><i className="fas fa-tshirt" /> Thời trang</Link></li>
                <li><Link to="/category"><i className="fas fa-gift" /> Quà lưu niệm</Link></li>
                <li><Link to="/category"><i className="fas fa-bicycle" /> Xe đạp</Link></li>
                <li><Link to="/category"><i className="fas fa-gamepad" /> Đồ chơi</Link></li>
                <li><Link to="/category"><i className="fas fa-baby" /> Đồ dùng cho trẻ em</Link></li>
                {/* <li><Link to="/category"><i className="fas fa-tools" /> Công cụ</Link></li>
                <li><Link to="/category"><i className="fas fa-heartbeat" /> Sức khỏe và làm đẹp</Link></li>
                <li><Link to="/category"><i className="fas fa-paint-brush" /> Mỹ thuật</Link></li>
                <li><Link to="/category"><i className="fas fa-futbol" /> Thể thao</Link></li>
                <li><Link to="/category"><i className="fas fa-music" /> Âm nhạc</Link></li>
                <li><Link to="/category"><i className="fas fa-utensils" /> Đồ ăn</Link></li>
                <li><Link to="/category"><i className="fas fa-flask" /> Hóa học</Link></li>
                <li><Link to="/category"><i className="fas fa-paw" /> Vật nuôi</Link></li>
                <li><Link to="/category"><i className="fas fa-mobile-alt" /> Điện thoại di động</Link></li>
                <li><Link to="/category"><i className="fas fa-camera" /> Máy ảnh</Link></li>
                <li><Link to="/category"><i className="fas fa-home" /> Nội thất</Link></li>
                <li><Link to="/category"><i className="fas fa-plane" /> Du lịch</Link></li>
                <li><Link to="/category"><i className="fas fa-wrench" /> Sửa chữa</Link></li> */}
                {/* Thêm các mục liên kết khác nếu cần */}
            </ul>
        </div>
    );
}

export default SideBarHomePage;