import React, { useEffect, useState } from 'react';
import '../../styles/ReviewArea.css';
import { getProductDetails } from '../../../api_gateway/apiRequest';

function ReviewArea(props) {
    const [productDetails] = useState(JSON.parse(localStorage.getItem('productdetails')))
    const [sort, setSort] = useState(false)
    const [displayedReviews, setDisplayedReviews] = useState(5);
    const [allReviewsDisplayed, setAllReviewsDisplayed] = useState(false);
    
    const imgOpenModal = function (id) {
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("img01");
        var myImgId = document.getElementById(id);
        modal.style.display = "block";
        modalImg.src = myImgId.src;
    }
    const closeModalImg = function () {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    const rating = (reviewRating)=> {
        if(reviewRating == 5) {
            return (<>
                <span className="fa fa-star star-active" />
                <span className="fa fa-star star-active" />
                <span className="fa fa-star star-active" />
                <span className="fa fa-star star-active" />
            </>)
        } else if(reviewRating == 4) {
            return (<>
                <span className="fa fa-star star-active" />
                <span className="fa fa-star star-active" />
                <span className="fa fa-star star-active" />
            </>)
        } else if(reviewRating == 3) {
            return (<>
                <span className="fa fa-star star-active" />
                <span className="fa fa-star star-active" />
            </>)
        } else if(reviewRating == 2) {
            return (<>
                <span className="fa fa-star star-active" />
            </>)
        } else return
    }
    
    const bubbleSort = (array) => {
        for (let i = 0; i < array.length; i++) {
          for (let x = 0; x < array.length - 1 - i; x++) {
            if (array[x].reviewRating > array[x + 1].reviewRating) {
              [array[x], array[x + 1]] = [array[x + 1], array[x]];
            }
          }
        }
        return array;
      }
    let reviews = []
    reviews = bubbleSort(productDetails?.productReviews).reverse()
    if(!sort) {
        reviews = bubbleSort(productDetails?.productReviews).reverse()
    } else {
        reviews = bubbleSort(productDetails?.productReviews)
    }
    useEffect(()=> {
        getProductDetails(productDetails?.id)
    }, [productDetails])

    const loadMoreReviews = () => {
        setTimeout(() => setDisplayedReviews(prevCount => prevCount + 5), 1000);
    };
    return (
        <div className="n-customer-review mt-4">
            <div className="container-fluid px-1 py-3 mx-auto">
                <div className='mb-4'>
                    <span className='d-block mb-4' style={{'fontWeight': 'bold'}}>Sắp xếp bình luận theo</span>
                    <button className="btn btn-sm btn-primary" onClick={() => {setSort(false); setTimeout(() => setDisplayedReviews(5), 1000);}}>Tích cực</button>
                    <button className="btn btn-sm btn-danger ml-4" onClick={() => {setSort(true); setTimeout(() => setDisplayedReviews(5), 1000);}}>Tiêu cực</button>

                </div>
                    
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        {reviews ? reviews.slice(0, displayedReviews).map((value, key) => {
                            return (
                                <div className="card n-customer-review-component mb-4" key={key}> 
                                <div className="row d-flex">
                                    <div className>
                                        <img className="profile-pic" alt='' src={value?.userAvatar} />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <h4 className="mt-2 mb-0">{value.userFullName}</h4>
                                        <div>
                                            <p className="text-left"><span className="text-muted">{value.reviewRating}</span>
                                                <span className="fa fa-star star-active ml-3" />
                                                {rating(value.reviewRating)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <p className="text-muted pt-5 pt-sm-3">{value.createdAt}</p>
                                    </div>
                                </div>
                                <div className="row text-left">
                                    <p className="n-review-content">{value.reviewContent}</p>
                                </div>
                                <div id="myModal" className="modal">
                                    <span className="close" onClick={closeModalImg}>×</span>
                                    <img className="modal-content" id="img01" src='' alt='' />
                                </div>
                                <div className="row text-left">
                                {value.reviewImages ? 
                                    value.reviewImages.map((value, key)=> {
                                        return (
                                            <img className="pic" id={value.id} onClick={()=>imgOpenModal(value.id)} src={value.userReviewImage} alt='' key={key} />
                                        )
                                    }) : ''
                                }
                                </div>
                        </div>
                            )
                        }) : ''}
                    </div>
                </div>
                {!allReviewsDisplayed && 
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={loadMoreReviews}>Xem thêm</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default ReviewArea;