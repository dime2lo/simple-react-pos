import { connect } from 'react-redux'
import PaymentList from '../components/PaymentList'

const mapStateToProps = (state) => {
    return {
        payments: state.payments
    }
}

const PaymentListContainer = connect(mapStateToProps)(PaymentList)

export default PaymentListContainer