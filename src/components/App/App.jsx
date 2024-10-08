import { AppContainer } from './App.styled.js';
import { Profile } from 'components/Profile/Profile.jsx';
import user from '../../data/user.json';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import statistics from '../../data/statistics.json';
import { FriendList } from 'components/FriendList/FriendList.jsx';
import friends from '../../data/friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory.jsx';
import transactions from '../../data/ transactions.json';

export const App = () => {
  return (
    <AppContainer>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </AppContainer>
  );
};

export default App;
