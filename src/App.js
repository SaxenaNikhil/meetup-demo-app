import { Routes, Route } from 'react-router-dom';

//lets import the other pages in the component folder
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritePage from './pages/Favorite';
import Layout from './components/layout/Layout';

//here the name of the component should starts with the capital word in the name
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} />
        <Route path='/favorites' element={<FavoritePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
