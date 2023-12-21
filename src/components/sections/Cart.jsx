import React from 'react';
import '../styles/Cart.css';
import { useNavigate } from 'react-router-dom';

function Cart(props) {
    const nav = useNavigate();
    const handlePayment = ()=> {
        nav('/checkout')
    }
    return (
        <div className="container n-cart">
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center" scope="col-1"></th>
                        <th className="text-center" scope="col-1"></th>
                        <th className="text-center" scope="col-2">Tên sản phẩm</th>
                        <th className="text-center" scope="col-2">Giá</th>
                        <th className="text-center" scope="col-2">Số lượng</th>
                        <th className="text-center" scope="col-2">Tổng tiền</th>
                        <th className="text-center" scope="col-1"></th>
                    </tr>
                </thead>
                <tbody>
                    {/* Product 1 */}
                    <tr data-price={50.00}>
                        <td className="text-center">
                            <input type="checkbox" className="form-check-input product-checkbox" />
                        </td>
                        <td className="text-center"><img src="https://3dcomputer.vn/uploads/images/products/cac-man-hinh/rtx2080-gigabyte/geforce-rtx-2080-gaming-oc-8g.png" alt="Product 1" className="image-cart" /></td>
                        <td className="text-center">Product 1 ./node_modules/source-maptyleductInfomation.css</td>
                        <td className="text-center">₫60.000.000</td>
                        <td className="text-center">
                            <input type="number" className="form-control form-control-cart quantity-input" defaultValue={1} min={1} />
                            <p className='instock'>còn lại: 10</p>
                        </td>
                        <td className="total-price text-center">₫60.000.000</td>
                        <td className="text-center"><i className="fa fa-trash"></i></td>
                    </tr>
                    <tr data-price={50.00}>
                        <td className="text-center">
                            <input type="checkbox" className="form-check-input product-checkbox" />
                        </td>
                        <td className="text-center"><img src="https://halinhcomputer.vn/uploads/images/products/cac-man-hinh/galax-rtx-2080-sg-edition-8gb-gddr6.jpg" alt="Product 1" className="img-thumbnail" style={{ width: '100px' }} /></td>
                        <td className="text-center">Product 1 ./node_modules/source-maptyleductInfomation.css</td>
                        <td className="text-center">₫60.000.000</td>
                        <td className="text-center">
                            <input type="number" className="form-control form-control-cart quantity-input" defaultValue={1} min={1} />
                            <p className='instock'>còn lại: 10</p>
                        </td>
                        <td className="total-price text-center">₫60.000.000</td>
                        <td className="text-center"><i className="fa fa-trash"></i></td>
                    </tr>
                    
                    {/* Add more products as needed */}
                </tbody>
            </table>
            {/* Total Price */}
            <div className="text-right">
                <h4>Tổng: <span id="total-price">₫0</span></h4>
            </div>
            {/* Checkout Button */}
            <div className="text-right mt-3">
                <button className="btn btn-primary" onClick={handlePayment}>Tiến hành thanh toán</button>
            </div>
        </div>
    );
}

export default Cart;