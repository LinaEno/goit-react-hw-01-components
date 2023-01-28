import { Profile } from "./Profile/Profile";
import user from './json/user'
import data from './Statistics/data'
import { Statistics } from "./Statistics/Statistics";
import css from './Statistics/Statistics.module.css'
import { StatsTitle } from "./Statistics/StatsTitle";




export const App = () => {
  return (
    <div>
      <Profile key={user.username} username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes} />
        <section className={css.statistics}>
          <StatsTitle text="Upload stats"/>
          <Statistics key={data.id} label={data.label} percentage={ data.percentage} />
        </section>
    </div>
  );
};
