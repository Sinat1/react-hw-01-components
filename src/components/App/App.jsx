import { AppContainer } from './App.styled.js';
import { Profile } from 'components/Profile/Profile.jsx';
import user from '../../data/user.json';

export const App = () => {
  return (
    <AppContainer>
      <Profile user={user} />
    </AppContainer>
  );
};

export default App;
