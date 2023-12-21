import React from 'react';
import CheckOutAdresses from './checkoutSection/CheckOutAdresses';
import OrderContent from './checkoutSection/OrderContent';

function CheckOut(props) {
    return (
        <div className="container checkout-section">
            <div className="row">
                {/* Left Section: Address Selection */}
                <CheckOutAdresses />
                {/* Right Section: Product Information and Payment Details */}
                <OrderContent />
            </div>
        </div>

    );
}

export default CheckOut;