import { StatsTitle } from "./StatsTitle"
import { Stats } from "./Stats"
import css from './Statistics.module.css'
import PropTypes from 'prop-types';
import data from './data'

export const Statistics = ({stats}) => {
    return (
        <section className={css.statistics}>
            <StatsTitle text="Upload stats"/>
            {/* {title && <h2>{title}</h2>} */}
            <ul className={css.statList}>
                {/*  */}
                {stats.map(stat =>
                    <Stats key={stat.id} label={stat.label} percentage={stat.percentage} />
                )}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(),
}