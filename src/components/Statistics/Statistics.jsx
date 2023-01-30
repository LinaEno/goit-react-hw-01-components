import { Stats } from "./Stats"
import css from './Statistics.module.css'
import PropTypes from 'prop-types';
import { StatsTitle } from "./StatsTitle";



export const Statistics = ({data}) => {
    return (
        <section className={css.statistics}>
            <StatsTitle text="Upload stats"/> 
            <ul className={css.statList}>
                {data.map(({ id, label, percentage }) =>
                    <Stats key={id} label={label} percentage={percentage} />
                )}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),),
}

