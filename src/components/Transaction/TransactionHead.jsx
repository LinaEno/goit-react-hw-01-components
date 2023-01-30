import PropTypes from 'prop-types';


export const TransactionHead = ({typeText, amountText, currencyText}) => {
    return (
        <thead>
            <tr>
                <th>{typeText}</th>
                <th>{amountText}</th>
                <th>{currencyText}</th>
            </tr>
        </thead>
    )
}

TransactionHead.propTypes = {
    typeText: PropTypes.string.isRequired,
    amountText: PropTypes.string.isRequired,
    currencyText: PropTypes.string.isRequired,
}