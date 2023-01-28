import css from './Statistics.module.css'
import PropTypes from 'prop-types';

export const Stats = ({label, percentage}) => {
    return (
            <li className={css.item}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}</span>
            </li>
    )
}

Stats.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}