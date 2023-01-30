import { Title } from './StatsTitle.styled';
import PropTypes from 'prop-types';

export const StatsTitle = ({ text }) => {
    return text && <Title>{text}</Title>

}

StatsTitle.propTypes = {
    text: PropTypes.string,
}