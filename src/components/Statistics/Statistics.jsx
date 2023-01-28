import { Stats } from "./Stats"
import css from './Statistics.module.css'
import PropTypes from 'prop-types';


export const Statistics = ({stats}) => {
    return (
        
            <ul className={css.statList}>
            {stats.map(({ id, label, percentage }) =>

                    <Stats key={id} label={label} percentage={percentage} />

                )}
            </ul>

    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf( PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),),
}

