import React from 'react';
import '../../styles/FilterBar.css';

function FilterBar(props) {
    return (
        <div className='mb-4'>
            <form className='sort-bar'>
                <label htmlFor="sort-by-price" style={{fontSize: "13px", marginBottom: "0px"}}>Giá:</label>
                <select className='sort-bar-component mx-2' name="sort-by-price" id="sort-by-price">
                    <option value="increase">tăng dần</option>
                    <option value="decrease">giảm dần</option>
                </select>
                <label htmlFor="sort-by-rating" style={{fontSize: "13px", marginBottom: "0px"}}>Đánh giá:</label>
                <select className='sort-bar-component mx-2' name="sort-by-rating" id="sort-by-rating">
                    <option value="increase">cao</option>
                    <option value="decrease">thấp</option>
                </select>
                <div className="btn btn-danger btn-sm mr-1">Hủy lọc</div>
                <div className="btn btn-success btn-sm">Lọc</div>
            </form>
        </div>
    );
}

export default FilterBar;