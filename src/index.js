import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {StripeProvider} from 'react-stripe-elements';

// const Application = () => {
//     return (
//         <StripeProvider apiKey="pk_test_JlUzuu3KmFDR3wxvlKLxDaYX">
//             <App />
//         </StripeProvider>
//     );
// };

class Application extends React.Component {
    constructor() {
        super();
        this.state = {stripe: null};
    }

    componentDidMount() {
        let key = 'pk_test_JlUzuu3KmFDR3wxvlKLxDaYX';
        if (window.Stripe) {
            this.setState({stripe: window.Stripe(key)});
        } else {
            document.querySelector('#stripe-js').addEventListener('load', () => {
                // Create Stripe instance once Stripe.js loads
                this.setState({stripe: window.Stripe(key)});
            });
        }
    }

    render() {
        // this.state.stripe will either be null or a Stripe instance
        // depending on whether Stripe.js has loaded.
        return (
            <StripeProvider stripe={this.state.stripe}>
                <App />
            </StripeProvider>
        );
    }
}

ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
