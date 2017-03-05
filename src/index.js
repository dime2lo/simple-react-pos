import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import posApp from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createPayment } from './actions'

let store = createStore(posApp)

store.dispatch(createPayment(100, '455634******6246', 'VISA', 9, 2020, 'Lorem Ipsun Visa', '123'))
store.dispatch(createPayment(100, '455634******6246', 'VISA', 9, 2020, 'Lorem Ipsun Visa', '123'))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


    // const payments = [
    //     {
    //         id: 'c5afe7e4-0106-11e7-93ae-92361f002671',
    //         status: 'authorized',
    //         amount: 12.00,
    //         cardHolder: 'Lorem Ipsun Visa',
    //         cardNumber: '455634******6246',
    //         cardBrand: 'VISA',
    //         expMonth: '09',
    //         expYear: '2020'
    //     },
    //     {
    //         id: 'c5afe7e4-0106-11e7-93ae-92361f002672',
    //         status: 'paid',
    //         amount: 98.00,
    //         cardHolder: 'Lorem Ipsun Mast',
    //         cardNumber: '531111******7601',
    //         cardBrand: 'MASTER',
    //         expMonth: '09',
    //         expYear: '2020'            
    //     },
    //     {
    //         id: 'c5afe7e4-0106-11e7-93ae-92361f002673',
    //         status: 'canceled',
    //         amount: 4.00,
    //         cardHolder: 'Lorem Ipsun Disc',
    //         cardNumber: '601125******9204',
    //         cardBrand: 'DISCOVER',
    //         expMonth: '09',
    //         expYear: '2020'            
    //     }
    // ];