import { Stats } from "../Stats/Stats"
import { Section, StatList } from "./Statistics.styled";
import PropTypes from 'prop-types';
import { StatsTitle } from "../StatsTitle/StatsTitle";



export const Statistics = ({data}) => {
    return (
        <Section>
            <StatsTitle text="Upload stats"/> 
            <StatList>
                {data.map(({ id, label, percentage }) =>
                    <Stats key={id} label={label} percentage={percentage} />
                )}
            </StatList>
        </Section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),),
}

