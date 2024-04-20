import React from 'react';
import ReactDOM from "react-dom";
import { paymentProcess } from '../../../api_gateway/apiRequest';
import { useNavigate } from 'react-router-dom';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });


function Paypal(props) {
    const nav = useNavigate();
    const dataPayment = JSON.parse(localStorage.getItem("order"));
    const exchangeRate = (dataPayment.totalPrice / 25445).toString();
    const even = exchangeRate.split(".")[0];
    const odd1 = exchangeRate.split(".", 2)[1][0];
    const odd2 = exchangeRate.split(".", 2)[1][1];
    const finalValue = even + "." + odd1 + odd2;
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    title: "Payment for Matrix Business",
                    orderDetails: localStorage.getItem("itemorder"),
                    amount: {
                        currency_code: "USD",
                        value: finalValue,
                    },
                },
            ],
        });
    };
    const onApprove = (data, actions) => {
        const _data = {...dataPayment}
        setTimeout(() => {
            paymentProcess(_data, nav)
        }, 2000);
        return actions.order.capture();
    };
    const onError = (err) => {
        console.log(err);
    };
    const onCancel = (data, actions) => {
        console.log("canceled");
    }

    return (
        <React.StrictMode>
            <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
            onError={(err) => onError(err)}
            onCancel={(data, actions) => onCancel(data, actions)} />
        </React.StrictMode>
    );
}

export default Paypal;
