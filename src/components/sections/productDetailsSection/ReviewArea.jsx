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
                                <p className="n-review-content">no such file or directory, open 'C:\Users\DELL\Documents\Matrix\matrix.presentation.layer\src\components\styles\style.css.map'.</p>
                            </div>
                            <div id="myModal" className="modal">
                                <span className="close" onClick={closeModalImg}>×</span>
                                <img className="modal-content" id="img01" src='' alt='' />
                            </div>
                            <div className="row text-left">
                                <img className="pic" id="myImg01" onClick={imgOpenModal} src="https://pbs.twimg.com/media/GCh7_qsbwAABxo8?format=jpg&name=4096x4096" alt='' />
                                <img className="pic" id="myImg01" onClick={imgOpenModal} src="https://pbs.twimg.com/media/GC4PycZa0AAL-Tc?format=jpg&name=large" alt='' />
                                <img className="pic" id="myImg01" onClick={imgOpenModal} src="https://pbs.twimg.com/media/GCruK_3XUAAzjhQ?format=jpg&name=medium" alt='' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewArea;