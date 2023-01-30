import { Item, Label, Percentage } from './Stats.styled';
import PropTypes from 'prop-types';

export const Stats = ({id, label, percentage}) => {
    return (
            <Item key={id}>
                <Label>{label}</Label>
                <Percentage>{percentage}%</Percentage>
            </Item>
    )
}

Stats.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

