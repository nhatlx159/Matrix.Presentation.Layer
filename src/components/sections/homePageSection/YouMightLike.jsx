import React, { useEffect, useState } from 'react';
import '../../styles/YouMightLike.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getDataForYou, getProductDetails } from '../../../api_gateway/apiRequest';
import { useNavigate } from 'react-router-dom';

function YouMightLike(props) {
    
  const [data, setData] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [numDisplayed, setNumDisplayed] = useState(5);
  const nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const forYouData = JSON.parse(localStorage.getItem('foryou'));
      if (forYouData) {
        setData(forYouData);
        setDisplayedProducts(forYouData.slice(0, numDisplayed));
      } else {
        const response = await getDataForYou();
        setData(response);
        setDisplayedProducts(response.slice(0, numDisplayed));
      }
    };

    fetchData();
  }, [numDisplayed]);

  const price = (x) => {
    x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    return x
  };

  const redirectToDetails = async (e, id)=> {
    e.preventDefault()
    await getProductDetails(id)
    nav('/productdetails');
  }

  const loadMoreProducts = () => {
    setNumDisplayed(prevNumDisplayed => prevNumDisplayed + 5);
  };

  return (
    <>
      <div className="row n-row-productlist">
        {displayedProducts.map((value, key) => (
          <div
            onClick={(e)=>redirectToDetails(e, value.id)}
            className="n-product-component mx-2 my-2"
            key={key}
          >
            <img
              src={value?.productImages[0].imageLink}
              alt=""
              className="n-product-img"
            />
            <p className="n-product-title">{value?.productName}</p>
            <div className="n-product-flashsale">Flash Sale</div>
            <div className="n-product-bottom">
              <div className="n-product-bottom-left">{price(value?.price)}</div>
              <div className="n-product-bottom-right">Đã bán {value?.soldQuantity}</div>
            </div>
          </div>
        ))}
      </div>
      {data.length > numDisplayed && (
        <div className="n-btn-productlist mt-4">
          <button className="btn btn-primary" onClick={loadMoreProducts}>Xem thêm</button>
        </div>
      )}
    </>
  );
}

export default YouMightLike;
