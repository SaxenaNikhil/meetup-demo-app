import { Routes, Route } from 'react-router-dom';

//lets import the other pages in the component folder
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritePage from './pages/Favorite';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} />
        <Route path='/favorites' element={<FavoritePage />} />
      </Routes>
    </div>
  );
}

export default App;
