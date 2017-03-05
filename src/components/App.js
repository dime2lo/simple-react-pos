import React from 'react'
import PaymentListContainer from '../containers/PaymentListContainer';
import NewPayment from './NewPayment';

const App = () => (
    <div className="ui container">
        <div className="ui header">
            <h1>Simple Point of Sale</h1>
        </div>        
        <div className="ui vertically divided stackable grid">
            <div className="two column row">
                <div className="four wide column">
                    <NewPayment />        
                </div>
                <div className="twelve wide column">
                    <PaymentListContainer />
                </div>
            </div>
        </div>
    </div>
)

export default App