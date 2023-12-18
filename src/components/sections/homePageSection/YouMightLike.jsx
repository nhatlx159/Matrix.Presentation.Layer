import React, { useEffect } from 'react';
import $ from 'jquery';
import '../../styles/YouMightLike.css';

function YouMightLike(props) {

    const sliderEffect = () => {
        $(document).ready(function () {
            let scrollInterval;

            $('.prev-button-2').click(function () {
                let slider = $('.slider-2');
                let scrollAmount = slider.find('.product-card').first().outerWidth(); // Chiều rộng của sản phẩm
                let currentPosition = slider.scrollLeft();

                if (currentPosition === 0) {
                    slider.animate({ scrollLeft: slider[0].scrollWidth - slider.outerWidth() }, 'slow');
                } else {
                    slider.animate({ scrollLeft: '-=' + scrollAmount }, 'slow');
                }
            });

            $('.next-button-2').click(function () {
                let slider = $('.slider-2');
                let scrollAmount = slider.find('.product-card').first().outerWidth(); // Chiều rộng của sản phẩm
                let currentPosition = slider.scrollLeft();
                let totalWidth = slider[0].scrollWidth - slider.outerWidth();

                if (currentPosition >= totalWidth) {
                    slider.animate({ scrollLeft: 0 }, 'slow');
                } else {
                    slider.animate({ scrollLeft: '+=' + scrollAmount }, 'slow');
                }
            });

            function slideNext() {
                let slider = document.querySelector('.slider-2');
                let ww = $(window).width();
                let scrollAmount = ww / 4; // Kích thước cuộn 4 sản phẩm
                let currentPosition = slider.scrollLeft;
                console.log(ww);
                currentPosition += scrollAmount;
                if (currentPosition >= slider.scrollWidth - ww) {
                    currentPosition = 0; // Quay lại đầu danh sách nếu đang ở cuối
                }

                slider.scrollTo({
                    left: currentPosition,
                    behavior: 'smooth'
                });
            }
            scrollInterval = setInterval(slideNext, 5000); // Tự động di chuyển sau mỗi 5 giây

            $('.slider-2').hover(function () {
                clearInterval(scrollInterval);
            }, function () {
                scrollInterval = setInterval(slideNext, 5000);
            });
        });
    }
    useEffect(()=> {
        sliderEffect()
    }, [])
    

    return (
        <div className="for-you">
            <div className="slider-2">
                <div className="product-card" data-url="ProductInfo.html">
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
                    <div className="product-price">
                        <h2>50.000.000 VNĐ<p />
                        </h2></div>
                </div>
                <div className="product-card" data-url="ProductInfo.html">
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
                    <div className="product-price">
                        <h2>50.000.000 VNĐ<p />
                        </h2></div>
                </div>
                <div className="product-card" data-url="ProductInfo.html">
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
                    <div className="product-price">
                        <h2>50.000.000 VNĐ<p />
                        </h2></div>
                </div>
                <div className="product-card" data-url="ProductInfo.html">
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
                    <div className="product-price">
                        <h2>50.000.000 VNĐ<p />
                        </h2></div>
                </div>
                <div className="product-card" data-url="ProductInfo.html">
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
                    <div className="product-price">
                        <h2>50.000.000 VNĐ<p />
                        </h2></div>
                </div>
                <div className="product-card" data-url="ProductInfo.html">
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
                    <div className="product-price">
                        <h2>50.000.000 VNĐ<p />
                        </h2></div>
                </div>
                <div className="product-card" data-url="ProductInfo.html">
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
                    <div className="product-price">
                        <h2>50.000.000 VNĐ<p />
                        </h2></div>
                </div>
                <div className="product-card" data-url="ProductInfo.html">
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
                    <div className="product-price">
                        <h2>50.000.000 VNĐ<p />
                        </h2></div>
                </div>
                <div className="product-card" data-url="ProductInfo.html">
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
                    <div className="product-price">
                        <h2>50.000.000 VNĐ<p />
                        </h2></div>
                </div>
                <div className="product-card" data-url="ProductInfo.html">
                    <img src="https://mobileworld.com.vn/uploads/product/Redmi_K60_series/Redmi-K60-Ultra_den.png" alt="Product 1" />
                    <h3>Sản Phẩm 10</h3>
                    <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Veniam
                        cumque distinctio voluptatum atque provident ipsum adipisci, tenetur iure minima ratione
                        totam vel quidem odit sapiente eligendi eius eaque ex pariatur!
                        Quo ratione magnam vero? Doloribus pariatur perspiciatis maxime. Facilis, nulla. Vitae
                        natus
                        harum nam sapiente officiis quia, accusantium est blanditiis deleniti quos doloribus
                        exercitationem amet suscipit laborum consequuntur perspiciatis qui.</p>
                    <div className="product-price">
                        <h2>50.000.000 VNĐ<p />
                        </h2></div>
                </div>
                <div className="product-card" data-url="ProductInfo.html">
                    <img src="https://mobileworld.com.vn/uploads/product/Redmi_K60_series/Redmi-K60-Ultra_den.png" alt="Product 1" />
                    <h3>Sản Phẩm 11</h3>
                    <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Veniam
                        cumque distinctio voluptatum atque provident ipsum adipisci, tenetur iure minima ratione
                        totam vel quidem odit sapiente eligendi eius eaque ex pariatur!
                        Quo ratione magnam vero? Doloribus pariatur perspiciatis maxime. Facilis, nulla. Vitae
                        natus
                        harum nam sapiente officiis quia, accusantium est blanditiis deleniti quos doloribus
                        exercitationem amet suscipit laborum consequuntur perspiciatis qui.</p>
                    <div className="product-price">
                        <h2>50.000.000 VNĐ<p />
                        </h2></div>
                </div>
                <div className="product-card" data-url="ProductInfo.html">
                    <img src="https://mobileworld.com.vn/uploads/product/Redmi_K60_series/Redmi-K60-Ultra_den.png" alt="Product 1" />
                    <h3>Sản Phẩm 12</h3>
                    <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Veniam
                        cumque distinctio voluptatum atque provident ipsum adipisci, tenetur iure minima ratione
                        totam vel quidem odit sapiente eligendi eius eaque ex pariatur!
                        Quo ratione magnam vero? Doloribus pariatur perspiciatis maxime. Facilis, nulla. Vitae
                        natus
                        harum nam sapiente officiis quia, accusantium est blanditiis deleniti quos doloribus
                        exercitationem amet suscipit laborum consequuntur perspiciatis qui.</p>
                    <div className="product-price">
                        <h2>50.000.000 VNĐ<p />
                        </h2></div>
                </div>
                <div className="product-card" data-url="ProductInfo.html">
                    <img src="https://mobileworld.com.vn/uploads/product/Redmi_K60_series/Redmi-K60-Ultra_den.png" alt="Product 1" />
                    <h3>Sản Phẩm 13</h3>
                    <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Veniam
                        cumque distinctio voluptatum atque provident ipsum adipisci, tenetur iure minima ratione
                        totam vel quidem odit sapiente eligendi eius eaque ex pariatur!
                        Quo ratione magnam vero? Doloribus pariatur perspiciatis maxime. Facilis, nulla. Vitae
                        natus
                        harum nam sapiente officiis quia, accusantium est blanditiis deleniti quos doloribus
                        exercitationem amet suscipit laborum consequuntur perspiciatis qui.</p>
                    <div className="product-price">
                        <h2>50.000.000 VNĐ<p />
                        </h2></div>
                </div>
                <div className="product-card" data-url="ProductInfo.html">
                    <img src="https://mobileworld.com.vn/uploads/product/Redmi_K60_series/Redmi-K60-Ultra_den.png" alt="Product 1" />
                    <h3>Sản Phẩm 14</h3>
                    <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Veniam
                        cumque distinctio voluptatum atque provident ipsum adipisci, tenetur iure minima ratione
                        totam vel quidem odit sapiente eligendi eius eaque ex pariatur!
                        Quo ratione magnam vero? Doloribus pariatur perspiciatis maxime. Facilis, nulla. Vitae
                        natus
                        harum nam sapiente officiis quia, accusantium est blanditiis deleniti quos doloribus
                        exercitationem amet suscipit laborum consequuntur perspiciatis qui.</p>
                    <div className="product-price">
                        <h2>50.000.000 VNĐ<p />
                        </h2></div>
                </div>
            </div>
            <button className="prev-button prev-button-2">
                <i className="fas fa-chevron-left" />
            </button>
            <button className="next-button next-button-2">
                <i className="fas fa-chevron-right" />
            </button>
        </div>
    );
}

export default YouMightLike;