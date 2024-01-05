import React from 'react';
import '../../styles/Gallery.css'

function Gallery(props) {
    return (
        <div className="row n-row-productlist gallery">
            <div className="col-12 col-lg-8 left-gallery">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" style={{ borderRadius: '10px' }}>
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://lzd-img-global.slatic.net/us/domino/df001e6a-a730-44bf-9a8d-3621a8a1d7f9_VN-1976-688.jpg_2200x2200q80.jpg_.webp" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://lzd-img-global.slatic.net/us/domino/48309a22-8f08-4939-9e8b-f1f13f2fa0df_VN-1976-688.jpg_2200x2200q80.jpg_.webp" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://lzd-img-global.slatic.net/us/domino/1b05f092-724c-4a34-96fb-aa8b61f6f400_VN-1976-688.jpg_2200x2200q80.jpg_.webp" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
            <div className="col-12 col-lg-4 right-gallery">
                <div className="row">
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component py-1">
                        <p>Sách</p>
                    </div>
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component py-1">
                        <p>Đèn pin</p>
                    </div>
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component py-1">
                        <p>Tivi</p>
                    </div>
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component py-1">
                        <p>Loa</p>
                    </div>
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component py-1">
                        <p>Máy lạnh</p>
                    </div>
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component py-1">
                        <p>Máy giặt</p>
                    </div>
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component py-1">
                        <p>Nồi cơm điện</p>
                    </div>
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component py-1">
                        <p>Lò vi sóng</p>
                    </div>
                    {/* <div className="col-3 col-sm-3 col-lg-4 gallery-right-component"><img className="d-block w-100" src="https://media.bongda.com.vn/files/tung.nguyen/2023/12/29/epl-rule-changes-2023-1459.jpg" alt="Third slide" /></div>
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component"><img className="d-block w-100" src="https://media.bongda.com.vn/files/tung.nguyen/2023/12/29/epl-rule-changes-2023-1459.jpg" alt="Third slide" /></div>
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component"><img className="d-block w-100" src="https://media.bongda.com.vn/files/tung.nguyen/2023/12/29/epl-rule-changes-2023-1459.jpg" alt="Third slide" /></div> 
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component"><img className="d-block w-100" src="https://media.bongda.com.vn/files/tung.nguyen/2023/12/29/epl-rule-changes-2023-1459.jpg" alt="Third slide" /></div>
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component"><img className="d-block w-100" src="https://media.bongda.com.vn/files/tung.nguyen/2023/12/29/epl-rule-changes-2023-1459.jpg" alt="Third slide" /></div> 
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component"><img className="d-block w-100" src="https://media.bongda.com.vn/files/tung.nguyen/2023/12/29/epl-rule-changes-2023-1459.jpg" alt="Third slide" /></div> 
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component"><img className="d-block w-100" src="https://media.bongda.com.vn/files/tung.nguyen/2023/12/29/epl-rule-changes-2023-1459.jpg" alt="Third slide" /></div> */}
                    
                </div>
            </div>
        </div>
    );
}

export default Gallery;