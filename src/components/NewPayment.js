import React from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import {createPayment} from '../actions'

const initialState = {
            amount: 0,
            cardNumber: '',
            cardBrand: '',
            expMonth: '',
            expYear: '',
            cardHolder: '',
            cvv: '',
            errors: {}      
        }

class NewPayment extends React.Component {

    constructor(props) {
        super(props)
        this.state = initialState
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
            const {
                    amount,
                    cardNumber,
                    cardBrand,
                    expMonth,
                    expYear,
                    cardHolder,
                    cvv                
                } = this.state;


        let errors = {};
        if (amount === '') errors.amount = "Can't be empty";
        if (cardNumber === '') errors.cardNumber = "Can't be empty";
        if (cardBrand === '') errors.cardBrand = "Can't be empty";
        if (expMonth === '') errors.expMonth = "Can't be empty";

        this.setState({errors})
        
        const isValid = Object.keys(errors).length == 0

        if (isValid) {
            this.props.createPayment(
                    parseInt(amount, 10), 
                    cardNumber, 
                    cardBrand, 
                    parseInt(expMonth, 10), 
                    parseInt(expYear, 10), 
                    cardHolder, 
                    cvv
                    )
            this.clear()
        }   
    }

    handleClear = (e) => {
        e.preventDefault()
        this.clear()
    }

    clear = () => {
        this.setState(initialState);
    }

    render() { 
        return(    
            <form className="ui form" ref="newPayment" onSubmit={this.handleSubmit}>
                <h2 className="ui header">New Payment</h2>
                
                <div className={classnames("field", { error: !!this.state.errors.amount })}>
                    <label>Amount</label>
                    <input 
                        name="amount"
                        value={this.state.amount}
                        onChange={this.handleChange}
                        id="amount"
                    />
                    <span>{this.state.errors.amount}</span>
                </div>
                <div className={classnames("field", { error: !!this.state.errors.cardNumber })}>
                    <label>Card Number</label>
                    <input 
                        name="cardNumber"
                        value={this.state.cardNumber}
                        onChange={this.handleChange}
                        id="cardNumber"
                    />
                    <span>{this.state.errors.cardNumber}</span>                    
                </div>   
                <div className={classnames("field", { error: !!this.state.errors.cardBrand })}>
                    <label>Card Brand</label>
                    <input 
                        name="cardBrand"
                        value={this.state.cardBrand}
                        onChange={this.handleChange}
                        id="cardBrand"
                    />
                    <span>{this.state.errors.cardBrand}</span>                    
                </div>            
                <div className="field">
                    <label>Valid Thru</label>
                    <div className="three fields">                            
                        <div className="four wide field">                       
                            <input 
                                name="expMonth"
                                value={this.state.expMonth}
                                onChange={this.handleChange}
                                id="expMonth"
                            />
                        </div>
                        <div className="one wide field">
                            /
                        </div>
                        <div className="five wide field">                        
                            <input 
                                name="expYear"
                                value={this.state.expYear}
                                onChange={this.handleChange}
                                id="expYear"
                            />  
                        </div> 
                    </div>           
                </div>                        
                <div className="field">
                    <label>Card Holder Name</label>
                    <input 
                        name="cardHolder"
                        value={this.state.cardHolder}
                        onChange={this.handleChange}
                        id="cardHolder"
                    />
                </div>  
                <div className="six wide field">
                    <label>Security Code (CVV)</label>
                    <input 
                        name="cvv"
                        value={this.state.cvv}
                        onChange={this.handleChange}
                        id="cvv"
                    />
                </div>
                <button className="ui button" onClick={this.handleClear}>Clear</button>
                <input className="ui primary button" type="submit" value="Charge" />                       
            </form>              
        )
    }
}

export default connect(null, {createPayment})(NewPayment);