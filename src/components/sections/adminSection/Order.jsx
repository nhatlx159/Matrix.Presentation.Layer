import React, { useEffect, useState } from "react";
import { updateOrder } from "../../../api_gateway/apiRequest";
import { useNavigate } from "react-router-dom";

function Order(props) {
    const { orders } = props;
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [showCount, setShowCount] = useState(5);
    const nav = useNavigate();


    const handleInputChange = event => {
        setKeyword(event.target.value);
    };

    const handleLoadMore = () => {
        setShowCount(prevCount => prevCount + 5);
    };

    useEffect(() => {
        const filtered = orders.filter(order =>
            order.id.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredProducts(filtered.slice(0, showCount));
    }, [orders, keyword, showCount]);

    return (
        <div>
            <form className="ml-4" onSubmit={(e) => e.preventDefault()}>
                <div style={{ fontWeight: "bold" }}>Nhập mã đơn hàng</div>
                <input
                    className="mb-4 mr-2"
                    type="text"
                    value={keyword}
                    onChange={handleInputChange}
                />
                <i className="fas fa-search" />
            </form>
            
            <table id="customers">
                <tbody>
                    <tr>
                        <th>Order Id</th>
                        <th>User Id</th>
                        <th>Order Status</th>
                        <th>Bill Of Lading Code</th>
                        <th>Delivery Date</th>
                        <th>Shipping Unit</th>
                        <th>Estimated Delivery Date</th>
                        <th>Payment Method</th>
                        <th>Shipping Fee</th>
                        <th>Total Price</th>
                        <th>Edit</th>
                    </tr>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((order, index) => {
                            const data = {
                                id: order.id,
                                paymentStatus: order.paymentStatus,
                                billOfLadingCode: order.billOfLadingCode,
                                deliveryDate: order.deliveryDate,
                                // estimatedDeliveryDate: order.estimatedDeliveryDate,
                                // shippingUnit: order.shippingUnit
                            };
                            const handleUpdateOrder = () => {
                                updateOrder(data, nav, order.id);
                            }
                            return (
                                    <tr key={index}>
                                        <td>{order.id}</td>
                                        <td>{order.userId}</td>
                                        <td>{order.paymentStatus}</td>
                                        <td>{order.billOfLadingCode}</td>
                                        <td>{order.deliveryDate}</td>
                                        <td>{order.shippingUnit}</td>
                                        <td>{order.estimatedDeliveryDate}</td>
                                        <td>{order.paymentMethod}</td>
                                        <td>{order.shippingFee}</td>
                                        <td>{order.totalPrice}</td>
                                    <td>
                                    <button type="button" className="btn btn-primary" data-toggle="modal" 
                                        data-target={`#modal-${order.id}`}>
                                        Edit
                                    </button>
                                    <div className="modal fade" id={`modal-${order.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" style={{textAlign: "center", display: "block", width: "100%"}} id="exampleModalLabel">Update Order</h5>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="mb-4">
                                                        <div>Product id: {order?.id}</div> <br/>
                                                        <div>User id: {order?.userId}</div> <br/>

                                                        <select defaultValue={order?.paymentStatus} onChange={(e) => { data.paymentStatus = e.target.value }}>
                                                            <option value='Pending'>Pending</option>
                                                            <option value='Delivering'>Delivering</option>
                                                            <option value='Delivered'>Delivered</option>
                                                        </select><br />



                                                        <label htmlFor="billOfLadingCode">Bill Of Lading Code</label><br/>
                                                        <textarea type="text" name="billOfLadingCode" defaultValue={order?.billOfLadingCode} onChange={(e)=> {data.billOfLadingCode = e.target.value}}/><br/>
                                                        {/* <label htmlFor="estimatedDeliveryDate">Estimated Delivery Date</label><br/>
                                                        <textarea type="text" name="estimatedDeliveryDate" defaultValue={order?.estimatedDeliveryDate} onChange={(e)=> {data.estimatedDeliveryDate = e.target.value}}/><br/> */}
                                                        <label htmlFor="deliveryDate">Delivery Date</label><br/>
                                                        <textarea type="text" name="deliveryDate" defaultValue={order?.deliveryDate} onChange={(e)=> {data.deliveryDate = e.target.value}}/><br/>
                                                        {/* <label htmlFor="shippingUnit">Shipping Unit</label><br/>
                                                        <textarea type="text" name="shippingUnit" defaultValue={order?.shippingUnit} onChange={(e)=> {data.shippingUnit = e.target.value}}/><br/> */}
                                                        
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary" onClick={()=> handleUpdateOrder()}>Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                            )
                        })
                    ) : (
                        <tr>
                            <td colSpan="6">Không có sản phẩm phù hợp</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {filteredProducts.length < orders.length && (
                <div className="n-btn-productlist mb-4 mt-4">
                    <button className="btn btn-primary" onClick={()=> {setTimeout(() => {
                        handleLoadMore()
                    }, 1000);}}>Xem thêm</button>
                </div>
            )}
    </div>
    );
}

export default Order;
