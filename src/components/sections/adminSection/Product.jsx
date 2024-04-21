import React, { useEffect, useState } from "react";
import { updateProduct } from "../../../api_gateway/apiRequest";
import { useNavigate } from "react-router-dom";

function Product(props) {
    const { products } = props;
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [showCount, setShowCount] = useState(10);
    const nav = useNavigate();
    
    useEffect(() => {
        const filtered = products.filter(product =>
            product.productName.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredProducts(filtered.slice(0, showCount));
    }, [products, keyword, showCount]);

    const handleInputChange = event => {
        setKeyword(event.target.value);
    };

    const handleLoadMore = () => {
        setShowCount(prevCount => prevCount + 10);
    };

    return (
        <div>
            <form className="ml-4" onSubmit={(e) => e.preventDefault()}>
                <div style={{ fontWeight: "bold" }}>Nhập tên sản phẩm cần tìm</div>
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
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Quantity</th>
                        <th>Active</th>
                        <th>Edit</th>
                    </tr>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => {
                            const data = {
                                productName: product.productName,
                                productDescription: product.productDescription,
                                price: product.price,
                                productQuantity: product.productQuantity,
                                soldQuantity: product.soldQuantity,
                                brand: product.brand,
                                categoryId: product.categoryId,
                                productImages: product.productImages
                            };
                            const handleUpdateProduct = () => {
                                updateProduct(data, nav, product.id);
                            }
                            return (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.price}</td>
                                    <td>{product.productQuantity}</td>
                                    <td>{product.isDeleted === null ? "true" : "false"}</td>
                                    <td>
                                    <button type="button" className="btn btn-primary" data-toggle="modal" 
                                        data-target={`#modal-${product.id}`}>
                                        Edit
                                    </button>
                                    <div className="modal fade" id={`modal-${product.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" style={{textAlign: "center", display: "block", width: "100%"}} id="exampleModalLabel">Update Product</h5>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="mb-4">
                                                        <div>Product id: {product?.id}</div> <br/>
                                                        <label htmlFor="productname">Product Name</label><br/>
                                                        <textarea type="text" name="productname" defaultValue={product?.productName} onChange={(e)=> {data.productName = e.target.value}}/><br/>
                                                        <label htmlFor="productprice">Product Price</label><br/>
                                                        <input type="text" name="productprice" defaultValue={product?.price} onChange={(e)=> {data.price = e.target.value}}/><br />
                                                        <label htmlFor="productqtt">Product Quantity</label><br/>
                                                        <input type="text" name="productqtt" defaultValue={product?.productQuantity} onChange={(e)=> {data.productQuantity = e.target.value}}/><br />
                                                        <label htmlFor="productbrand">Product Brand</label><br/>
                                                        <input type="text" name="productbrand" defaultValue={product?.brand} onChange={(e)=> {data.brand = e.target.value}}/><br />
                                                        <label htmlFor="productdes">Product Desciption</label><br/>
                                                        <textarea type="text" name="productdes" defaultValue={product?.productDescription} onChange={(e)=> {data.productDescription = e.target.value}}/><br />
                                                        <label htmlFor="productcategory">Product Category (current: {product?.categoryId})</label><br/>
                                                        <select defaultValue={product?.categoryId} onChange={(e) => { data.categoryId = parseInt(e.target.value) }}>
                                                            <option value="1">1: Thiết Bị Số - Phụ Kiện Số</option>
                                                            <option value="2">2: Điện Gia Dụng</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    {product.isDeleted === null ? <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button> : <button type="button" className="btn btn-success" data-dismiss="modal">Undelete</button>}
                                                    <button type="button" className="btn btn-primary" onClick={()=> handleUpdateProduct()}>Save changes</button>
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
            {filteredProducts.length < products.length && (
                <div className="n-btn-productlist mb-4 mt-4">
                    <button className="btn btn-primary" onClick={()=> {setTimeout(() => {
                        handleLoadMore()
                    }, 1000);}}>Xem thêm</button>
                </div>
            )}
            
    </div>
    );
}

export default Product;
