import { Profile } from "../Profile/Profile";
import user from '../Profile/user'
import data from '../Statistics/data'
import { Statistics } from "../Statistics/Statistics/Statistics";
import { FriendList } from "../FriendList/FriendList";
import friends from '../FriendList/friends'
import { TransactionHistory } from "../Transaction/TransactionHistory/TransactionHistory";
import transactions from '../Transaction/transactions'
import { Container } from "./App.styled";




export const App = () => {
  return (
    <Container>
      <Profile key={user.username} username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes} />
      <Statistics data={ data } />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
