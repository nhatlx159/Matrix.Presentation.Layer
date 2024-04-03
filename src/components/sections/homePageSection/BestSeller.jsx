import React, { useEffect, useState } from "react";
import "../../styles/BestSeller.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDataTopSelling, getProductDetails } from "../../../api_gateway/apiRequest";
import { useNavigate } from "react-router-dom";
function BestSeller(props) {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('topselling')));
  const nav = useNavigate();
    useEffect( () => {
      getDataTopSelling()
      setData(JSON.parse(localStorage.getItem('topselling')))
      console.log(data);
    }, [localStorage.getItem('topselling')])
    useEffect( () => {
      getDataTopSelling()
      setData(JSON.parse(localStorage.getItem('topselling')))
      console.log(data);
    }, [])
    const price = (x) => {
      x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
      return x
    }
  const redirectToDetails = async (e, id)=> {
    e.preventDefault()
    await getProductDetails(id)
    nav('/productdetails');
  }
  getDataTopSelling()
  return (
    <>
      <div className="row n-row-productlist">
      {data
        ? data?.map((value, key) => {
            return (
              <div
                onClick={(e)=>redirectToDetails(e, value.id)}
                className="n-product-component mx-2 my-2">
                <img
                  src={value?.productImages[0].imageLink}
                  alt=""
                  className="n-product-img"
                />
                <p className="n-product-title" key={key}>
                  {value?.productName}
                </p>
                <div className="n-product-flashsale">Flash Sale</div>
                <div className="n-product-bottom">
                  <div className="n-product-bottom-left">{price(value?.price)}</div>
                  <div className="n-product-bottom-right">Đã bán {value?.soldQuantity}</div>
                </div>
              </div>
            );
          })
        : ""}
      </div>
      <div className="n-btn-productlist mt-4">
        <button className="btn btn-primary">Xem thêm</button>
      </div>
    </>
  );
}

export default BestSeller;
