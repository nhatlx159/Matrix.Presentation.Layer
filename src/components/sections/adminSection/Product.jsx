import React, { useEffect, useState } from "react";
import { createProductApi, deleteProduct, unDeleteProduct, updateProduct } from "../../../api_gateway/apiRequest";
import { useNavigate } from "react-router-dom";

function Product(props) {
    const { products } = props;
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [showCount, setShowCount] = useState(10);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [productQuantity, setProductQuantity] = useState(0);
    const [brand, setBrand] = useState('');
    const [categoryId, setCategoryId] = useState(1);
    const [imageArray, setImageArray] = useState([]);
    const categories = JSON.parse(localStorage.getItem('categories'))
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

    const createProduct = ()=> {
        const body = {
            version: 0,
            productName: productName,
            productDescription: productDescription,
            price: price,
            productQuantity: productQuantity,
            brand: brand,
            soldQuantity: 0,
            categoryId: categoryId,
            productImages: arrReviewImage
        }
        if(body.productName !== '' && body.productName != null &&
           body.productDescription !== '' && body.productDescription != null &&
           body.price !== 0 && body.price > 500 && body.price != null &&
           body.productQuantity !== 0 && body.productQuantity > 0 && body.productQuantity != null &&
           body.brand !== '' && body.brand != null &&
           body.categoryId !== '' && body.categoryId > 0 && body.categoryId != null &&
           body.productImages.length !== 0 && body.productImages != null
        ) {
            createProductApi(body, nav)
        } else {
            alert('Vui lòng nhập thông tin hợp lệ!!!')
        }
    }

    const removeImageUpload = (src) => {
        const filteredImageUpload = imageArray.filter(item => item !== src);
        setImageArray(filteredImageUpload);
    }

    const arrReviewImage = imageArray.map(ele => {
        return { "imageLink": ele, "imageDescription": `images ${productName} - ${brand}` };
    });

    useEffect(() => {
        var myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: "dit0eba5q",
                uploadPreset: 'kmf6t5hg',
                apiKey: "591847415579884",
                cropping: false,
                folder: 'Matrix.ProductImages'
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info);
                    setImageArray(prevState => [...prevState, result.info.url]); // Thêm url của ảnh đã upload vào mảng
                }
            }
        );

        const uploadButton = document.getElementById('upload_widget');

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
    }, []); // useEffect này chỉ chạy một lần sau khi component mount
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
                <div className="btn btn-danger" style={{marginLeft: '50%', marginBottom: '20px'}} type="button" 
                data-toggle="modal" 
                data-target='#createproduct'>Tạo sản phẩm</div>
                <div className="modal fade" id='createproduct' tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" style={{textAlign: "center", display: "block", width: "100%"}} id="exampleModalLabel">Create Product</h5>
                            </div>
                            <div className="modal-body">
                                <div className="mb-4">
                                    <label htmlFor="productname">Product Name</label><br/>
                                    <textarea type="text" name="productname" onChange={(e)=> setProductName(e.target.value)}/><br/>
                                    <label htmlFor="productprice">Product Price</label><br/>
                                    <input type="text" name="productprice" onChange={(e)=> setPrice(e.target.value)}/><br />
                                    <label htmlFor="productqtt">Product Quantity</label><br/>
                                    <input type="text" name="productqtt" onChange={(e)=> setProductQuantity(e.target.value)}/><br />
                                    <label htmlFor="productbrand">Product Brand</label><br/>
                                    <input type="text" name="productbrand" onChange={(e)=> setBrand(e.target.value)}/><br />
                                    <label htmlFor="productdes">Product Desciption</label><br/>
                                    <textarea type="text" name="productdes" onChange={(e)=> setProductDescription(e.target.value)}/><br />
                                    <label htmlFor="productcategory">Product Category</label><br/>
                                    <select defaultValue={1} onChange={(e) => { setCategoryId(parseInt(e.target.value)) }}>
                                        {
                                            categories.length > 0 ? categories.map((v, k)=> {
                                                return <option value={v.id} key={k}>{v.id}: {v.categoryName}</option>
                                            }) : <option value="">Các danh mục hiện chưa được thiết lập</option>
                                        }
                                    </select><br />
                                    <div className="mt-2">Ảnh sản phẩm</div>
                                    <button id="upload_widget" className="btn btn-success mt-2">
                                        Upload
                                    </button><br />
                                    {imageArray.length > 0 ? imageArray.map((url, index) => (
                                        <div className='image-file' key={index}>
                                            <img className='pic pic-upload' src={url} alt={`Uploaded Image ${index}`} />
                                            <span className='remove-image-file' onClick={() => removeImageUpload(url)}>×</span>
                                        </div>
                                    )) : "No file uploaded!!!"}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={()=> createProduct()}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
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
                                                            {
                                                                categories.length > 0 ? categories.map((v, k)=> {
                                                                    return <option value={v.id} key={k}>{v.id}: {v.categoryName}</option>
                                                                }) : <option value="">Các danh mục hiện chưa được thiết lập</option>
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    {product.isDeleted === null ? <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>deleteProduct(product.id, nav)}>Delete</button> : <button type="button" className="btn btn-success" data-dismiss="modal" onClick={()=>unDeleteProduct(product.id, nav)}>Undelete</button>}
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
