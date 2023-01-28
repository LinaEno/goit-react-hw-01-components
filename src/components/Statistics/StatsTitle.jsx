import css from './Statistics.module.css'
import PropTypes from 'prop-types';

export const StatsTitle = ({ text }) => {
    return text && <h2 className={css.title}>{text}</h2>

}

StatsTitle.propTypes = {
    text: PropTypes.string,
}