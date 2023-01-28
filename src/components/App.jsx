import { Profile } from "./Profile/Profile";
import user from './json/user'
import data from './Statistics/data'
import { Statistics } from "./Statistics/Statistics";



export const App = () => {
  return (
    <div>
      <Profile key={user.username} username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes} />
      <Statistics/>
    </div>
  );
};
