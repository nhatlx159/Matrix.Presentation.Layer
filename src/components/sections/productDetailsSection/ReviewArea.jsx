import React from 'react';
import '../../styles/ReviewArea.css';

function ReviewArea(props) {
    return (
        <div className="n-customer-review mt-4">
            <div className="container-fluid px-1 py-3 mx-auto">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="card n-customer-review-component">
                            <div className="row d-flex">
                                <div className="d-flex flex-column">
                                    <h3 className="mt-2 mb-0">Vermillion</h3>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewArea;