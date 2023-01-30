import PropTypes from 'prop-types';
import { Table } from './TransactionHistory.styled';
import { TransactionHead } from '../TransactionHead/TransactionHead';
import { TransactionBody } from '../TransactionBody/TransactionBody';


export const TransactionHistory = ({ transactions }) => {
    return (
        <Table>
            <TransactionHead typeText='Type' amountText='Amount' currencyText='Currency' />
            <tbody>
                {transactions.map(({ id, type, amount, currency }) =>
                    <TransactionBody key={id} type={type} amount={amount} currency={currency } />)
                    
                }
            </tbody>
        </Table>
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
