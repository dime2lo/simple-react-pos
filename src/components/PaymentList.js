import React from 'react'
import Payment from './Payment'

const PaymentList = ({payments}) => {

    return (
        <div>
            <h2 className="ui header">Payments</h2>
            <div className="ui three cards">
                {payments.map(payment => 
                    <Payment key={payment.id} {...payment} />
                )}
            </div>
        </div>
    )
}

export default PaymentList;