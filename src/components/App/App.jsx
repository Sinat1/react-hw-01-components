import { AppContainer } from './App.styled.js';
import { Profile } from 'components/Profile/Profile.jsx';
import user from '../../data/user.json';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import statistics from '../../data/statistics.json';

export const App = () => {
  return (
    <AppContainer>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statistics} />
    </AppContainer>
  );
};

export default App;
