import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { cards, savedCards } from '../../utils/cards';

const App = () => {
  return (
    <div className="page">
      <CurrentUserContext.Provider
        value={{
          name: 'ABCDEF',
          email: 'abcde@mail.com',
        }}
      >
        <Routes>
          <Route exact path="/" element={
          <>
            <Header loggedIn={false} />
            <Main />
            <Footer />
            </>
            }
          />
          <Route exact path="/movies" element={
          <>
            <Header loggedIn={true} />
            <Movies cards={cards} />
            <Footer />
            </>
          }
          />
          <Route exact path="/saved-movies" element={
          <>
            <Header loggedIn={true} />
            <SavedMovies cards={savedCards} />
            <Footer />
          </>
          }
          />
          <Route exact path="/profile" element={
          <>
            <Header loggedIn={true} />
            <Profile />
            </>
          }
          />
          <Route exact path="/signin" element={
          <>
            <Login />
          </>
          }
          />
          <Route exact path="/signup" element={
          <>
            <Register />
          </>
          }
          />
          <Route path="*" element={
            <NotFound />
          }/>
        </Routes>
        </CurrentUserContext.Provider>
    </div>
  );
};

export default App;


