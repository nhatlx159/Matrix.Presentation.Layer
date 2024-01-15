import React from 'react';
import '../../styles/ReviewArea.css';

function ReviewArea(props) {

    
    const imgOpenModal = function () {
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("img01");
        var myImgId = document.getElementById("myImg01");
        modal.style.display = "block";
        console.log(modalImg.src);
        console.log(myImgId.src);
        modalImg.src = myImgId.src;
    }
    const closeModalImg = function () {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    return (
        <div className="n-customer-review mt-4">
            <div className="container-fluid px-1 py-3 mx-auto">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="card n-customer-review-component">
                            <div className="row d-flex">
                                <div className>
                                    <img className="profile-pic" alt='' src="https://pbs.twimg.com/profile_images/1717157364514922496/DpyIOOaZ_400x400.jpg" />
                                </div>
                                <div className="d-flex flex-column">
                                    <h4 className="mt-2 mb-0">Vermillion</h4>
                                    <div>
                                        <p className="text-left"><span className="text-muted">4.0</span>
                                            <span className="fa fa-star star-active ml-3" />
                                            <span className="fa fa-star star-active" />
                                            <span className="fa fa-star star-active" />
                                            <span className="fa fa-star star-active" />
                                            <span className="fa fa-star star-inactive" />
                                        </p>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <p className="text-muted pt-5 pt-sm-3">10/09/23</p>
                                </div>
                            </div>
                            <div className="row text-left">
                                <p className="n-review-content">Tuyệt quáaaaaaaaaaaaaaaaaa .. Sản phẩm rất tuyệt vời, tôi sẽ không mua vì tôi đã có rồi ;;-;;</p>
                            </div>
                            <div id="myModal" className="modal">
                                <span className="close" onClick={closeModalImg}>×</span>
                                <img className="modal-content" id="img01" src='' alt='' />
                            </div>
                            <div className="row text-left">
                                <img className="pic" id="myImg01" onClick={imgOpenModal} src="https://www.digitaltrends.com/wp-content/uploads/2022/04/gigabyte-rtx-3090-ti-gaming-oc-review-12.jpg" alt='' />
                                <img className="pic" id="myImg01" onClick={imgOpenModal} src="https://assets.hardwarezone.com/img/2020/11/Giga_Main.jpg" alt='' />
                                <img className="pic" id="myImg01" onClick={imgOpenModal} src="https://news.tandoanh.vn/wp-content/uploads/2022/04/Asus-RTX-3090-Ti-TUF-2.png" alt='' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewArea;