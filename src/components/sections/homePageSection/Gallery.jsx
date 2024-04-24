import {React, useState} from 'react';
import '../../styles/Gallery.css'
import { getAllProductByName } from "../../../api_gateway/apiRequest";
import { useNavigate } from "react-router-dom";
function Gallery(props) {
    const nav = useNavigate();
    const redirectSearch = async(e, text)=> {
        e.preventDefault();
        await getAllProductByName(text);
        nav("/search");
    }

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
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component py-1" onClick={e => redirectSearch(e, 'Tai nghe')}>
                        <p>Tai nghe</p>
                    </div>
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component py-1" onClick={e => redirectSearch(e, 'Laptop')}>
                        <p>Laptop</p>
                    </div>
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component py-1" onClick={e => redirectSearch(e, 'Amply')}>
                        <p>Amply</p>
                    </div>
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component py-1" onClick={e => redirectSearch(e, 'Lót chuột')}>
                        <p>Lót chuột</p>
                    </div>
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component py-1" onClick={e => redirectSearch(e, 'Lò')}>
                        <p>Lò</p>
                    </div>
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component py-1" onClick={e => redirectSearch(e, 'Samsung')}>
                        <p>Samsung</p>
                    </div>
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component py-1" onClick={e => redirectSearch(e, 'Nồi cơm')}>
                        <p>Nồi cơm điện</p>
                    </div>
                    <div className="col-3 col-sm-3 col-lg-4 gallery-right-component py-1" onClick={e => redirectSearch(e, 'Lò vi sóng')}>
                        <p>Lò vi sóng</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;