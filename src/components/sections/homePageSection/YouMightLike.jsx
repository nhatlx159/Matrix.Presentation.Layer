import React from 'react';
import '../../styles/YouMightLike.css';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function YouMightLike(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const nav = useNavigate();
    const redirectToDetails = () => {
        nav('/productdetails')
    }

    return (
        <div className="for-you">
            <div className="slider slider-1" style={{ width: '1000px' }}>
                <Slider {...settings}>
                    <div className="product-card product-card-1 mx-2" onClick={redirectToDetails}>
                        <img src="https://mobileworld.com.vn/uploads/product/Redmi_K60_series/Redmi-K60-Ultra_den.png" alt="Product 1" />
                        <h3>Sản Phẩm 1</h3>
                        <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Veniam
                            cumque distinctio voluptatum atque provident ipsum adipisci, tenetur iure minima ratione
                            totam vel quidem odit sapiente eligendi eius eaque ex pariatur!
                            Quo ratione magnam vero? Doloribus pariatur perspiciatis maxime. Facilis, nulla. Vitae
                            natus
                            harum nam sapiente officiis quia, accusantium est blanditiis deleniti quos doloribus
                            exercitationem amet suscipit laborum consequuntur perspiciatis qui.</p>
                        <div className="product-price"><h2>50.000.000 VNĐ<p /></h2>
                        </div>
                    </div>
                    <div className="product-card product-card-1 mx-2" onClick={redirectToDetails}>
                        <img src="https://mobileworld.com.vn/uploads/product/Redmi_K60_series/Redmi-K60-Ultra_den.png" alt="Product 1" />
                        <h3>Sản Phẩm 2</h3>
                        <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Veniam
                            cumque distinctio voluptatum atque provident ipsum adipisci, tenetur iure minima ratione
                            totam vel quidem odit sapiente eligendi eius eaque ex pariatur!
                            Quo ratione magnam vero? Doloribus pariatur perspiciatis maxime. Facilis, nulla. Vitae
                            natus
                            harum nam sapiente officiis quia, accusantium est blanditiis deleniti quos doloribus
                            exercitationem amet suscipit laborum consequuntur perspiciatis qui.</p>
                        <div className="product-price"><h2>50.000.000 VNĐ<p /></h2>
                        </div>
                    </div>
                    <div className="product-card product-card-1 mx-2" onClick={redirectToDetails}>
                        <img src="https://mobileworld.com.vn/uploads/product/Redmi_K60_series/Redmi-K60-Ultra_den.png" alt="Product 1" />
                        <h3>Sản Phẩm 3</h3>
                        <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Veniam
                            cumque distinctio voluptatum atque provident ipsum adipisci, tenetur iure minima ratione
                            totam vel quidem odit sapiente eligendi eius eaque ex pariatur!
                            Quo ratione magnam vero? Doloribus pariatur perspiciatis maxime. Facilis, nulla. Vitae
                            natus
                            harum nam sapiente officiis quia, accusantium est blanditiis deleniti quos doloribus
                            exercitationem amet suscipit laborum consequuntur perspiciatis qui.</p>
                        <div className="product-price"><h2>50.000.000 VNĐ<p /></h2>
                        </div>
                    </div>
                    <div className="product-card product-card-1 mx-2" onClick={redirectToDetails}>
                        <img src="https://mobileworld.com.vn/uploads/product/Redmi_K60_series/Redmi-K60-Ultra_den.png" alt="Product 1" />
                        <h3>Sản Phẩm 4</h3>
                        <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Veniam
                            cumque distinctio voluptatum atque provident ipsum adipisci, tenetur iure minima ratione
                            totam vel quidem odit sapiente eligendi eius eaque ex pariatur!
                            Quo ratione magnam vero? Doloribus pariatur perspiciatis maxime. Facilis, nulla. Vitae
                            natus
                            harum nam sapiente officiis quia, accusantium est blanditiis deleniti quos doloribus
                            exercitationem amet suscipit laborum consequuntur perspiciatis qui.</p>
                        <div className="product-price"><h2>50.000.000 VNĐ<p /></h2>
                        </div>
                    </div>
                    <div className="product-card product-card-1 mx-2" onClick={redirectToDetails}>
                        <img src="https://mobileworld.com.vn/uploads/product/Redmi_K60_series/Redmi-K60-Ultra_den.png" alt="Product 1" />
                        <h3>Sản Phẩm 5</h3>
                        <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Veniam
                            cumque distinctio voluptatum atque provident ipsum adipisci, tenetur iure minima ratione
                            totam vel quidem odit sapiente eligendi eius eaque ex pariatur!
                            Quo ratione magnam vero? Doloribus pariatur perspiciatis maxime. Facilis, nulla. Vitae
                            natus
                            harum nam sapiente officiis quia, accusantium est blanditiis deleniti quos doloribus
                            exercitationem amet suscipit laborum consequuntur perspiciatis qui.</p>
                        <div className="product-price"><h2>50.000.000 VNĐ<p /></h2>
                        </div>
                    </div>
                    <div className="product-card product-card-1 mx-2" onClick={redirectToDetails}>
                        <img src="https://mobileworld.com.vn/uploads/product/Redmi_K60_series/Redmi-K60-Ultra_den.png" alt="Product 1" />
                        <h3>Sản Phẩm 6</h3>
                        <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Veniam
                            cumque distinctio voluptatum atque provident ipsum adipisci, tenetur iure minima ratione
                            totam vel quidem odit sapiente eligendi eius eaque ex pariatur!
                            Quo ratione magnam vero? Doloribus pariatur perspiciatis maxime. Facilis, nulla. Vitae
                            natus
                            harum nam sapiente officiis quia, accusantium est blanditiis deleniti quos doloribus
                            exercitationem amet suscipit laborum consequuntur perspiciatis qui.</p>
                        <div className="product-price"><h2>50.000.000 VNĐ<p /></h2>
                        </div>
                    </div>
                    <div className="product-card product-card-1 mx-2" onClick={redirectToDetails}>
                        <img src="https://mobileworld.com.vn/uploads/product/Redmi_K60_series/Redmi-K60-Ultra_den.png" alt="Product 1" />
                        <h3>Sản Phẩm 7</h3>
                        <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Veniam
                            cumque distinctio voluptatum atque provident ipsum adipisci, tenetur iure minima ratione
                            totam vel quidem odit sapiente eligendi eius eaque ex pariatur!
                            Quo ratione magnam vero? Doloribus pariatur perspiciatis maxime. Facilis, nulla. Vitae
                            natus
                            harum nam sapiente officiis quia, accusantium est blanditiis deleniti quos doloribus
                            exercitationem amet suscipit laborum consequuntur perspiciatis qui.</p>
                        <div className="product-price"><h2>50.000.000 VNĐ<p /></h2>
                        </div>
                    </div>
                    <div className="product-card product-card-1 mx-2" onClick={redirectToDetails}>
                        <img src="https://mobileworld.com.vn/uploads/product/Redmi_K60_series/Redmi-K60-Ultra_den.png" alt="Product 1" />
                        <h3>Sản Phẩm 8</h3>
                        <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Veniam
                            cumque distinctio voluptatum atque provident ipsum adipisci, tenetur iure minima ratione
                            totam vel quidem odit sapiente eligendi eius eaque ex pariatur!
                            Quo ratione magnam vero? Doloribus pariatur perspiciatis maxime. Facilis, nulla. Vitae
                            natus
                            harum nam sapiente officiis quia, accusantium est blanditiis deleniti quos doloribus
                            exercitationem amet suscipit laborum consequuntur perspiciatis qui.</p>
                        <div className="product-price"><h2>50.000.000 VNĐ<p /></h2>
                        </div>
                    </div>
                    <div className="product-card product-card-1 mx-2" onClick={redirectToDetails}>
                        <img src="https://mobileworld.com.vn/uploads/product/Redmi_K60_series/Redmi-K60-Ultra_den.png" alt="Product 1" />
                        <h3>Sản Phẩm 9</h3>
                        <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Veniam
                            cumque distinctio voluptatum atque provident ipsum adipisci, tenetur iure minima ratione
                            totam vel quidem odit sapiente eligendi eius eaque ex pariatur!
                            Quo ratione magnam vero? Doloribus pariatur perspiciatis maxime. Facilis, nulla. Vitae
                            natus
                            harum nam sapiente officiis quia, accusantium est blanditiis deleniti quos doloribus
                            exercitationem amet suscipit laborum consequuntur perspiciatis qui.</p>
                        <div className="product-price"><h2>50.000.000 VNĐ<p /></h2>
                        </div>
                    </div>
                </Slider>
            </div>
            {/* <button className="prev-button prev-button-2">
                <i className="fas fa-chevron-left" />
            </button>
            <button className="next-button next-button-2">
                <i className="fas fa-chevron-right" />
            </button> */}
        </div>
    );
}

export default YouMightLike;