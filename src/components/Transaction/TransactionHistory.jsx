import PropTypes from 'prop-types';
import css from './Transaction.module.css';
import { TransactionHead } from './TransactionHead';
import { TransactionBody } from './TransactionBody';


export const TransactionHistory = ({ transactions }) => {
    return (
        <table className={css.transactionHistory}>
            <TransactionHead typeText='Type' amountText='Amount' currencyText='Currency' />
            <tbody>
                {transactions.map(({ id, type, amount, currency }) =>
                    <TransactionBody key={id} type={type} amount={amount} currency={currency } />)
                    
                }
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
    ),
}
