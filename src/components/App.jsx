import { Profile } from "./Profile/Profile";
import user from './json/user'


export const App = () => {
  return (
    <div>
      <Profile key={ user.username} username={user.username} tag={user.tag} location={user.location} avatar = {user.avatar} followers={user.stats.followers} views = {user.stats.views} likes = {user.stats.likes} />
    </div>
  );
};
