import React from 'react';
import './App.css';
import Pay from './pay.js';
import {Elements} from 'react-stripe-elements';

function App() {
    return (
        <div className="App">
            <Elements>
                <Pay />
            </Elements>
        </div>
    );
}

export default App;
