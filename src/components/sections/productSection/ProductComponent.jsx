import React from "react";
import "../../styles/ProductComponent.css";
import { useLocation, useNavigate } from "react-router-dom";

function ProductComponent(props) {
  const { data } = props;
  const location = useLocation();
  const nav = useNavigate();
  const redirectToDetails = () => {
    if (location.pathname === "/productdetails/1") {
      window.scrollTo(0, 0);
    } else nav("/productdetails/1");
  };
  return (
    <>
      {data
        ? data.map((key, value) => {
            return (
              <div
                className="n-product-component mx-2 my-2"
                onClick={redirectToDetails}
              >
                <img
                  src={value.productImages[0]}
                  alt=""
                  className="n-product-img"
                />
                <p className="n-product-title" key={key}>
                  {value.productName}
                </p>
                <div className="n-product-flashsale">Flash Sale</div>
                <div className="n-product-bottom">
                  <div className="n-product-bottom-left">{value.price}</div>
                  <div className="n-product-bottom-right">Đã bán {value.soldQuantity}</div>
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
}

export default ProductComponent;
