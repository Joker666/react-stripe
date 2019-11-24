import React, { Component } from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class Pay extends Component {
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (ev) => {
        // We don't want to let default form submission happen here, which would refresh the page.
        ev.preventDefault();
        console.log("Hi");
        const cardElement = this.props.elements.getElement('card');

        this.props.stripe
            .createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details: {name: 'Jenny Rosen'},
            })
            .then(({paymentMethod}) => {
                console.log('Received Stripe PaymentMethod:', paymentMethod);
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <CardElement style={{base: {fontSize: '18px'}}} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default injectStripe(Pay);
