import './App.css';
import { Route, Routes, Navigate, useNavigate} from 'react-router-dom';

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
import { useCallback, useEffect, useState } from 'react';
import { api } from '../../utils/api';
import { auth } from '../../utils/auth';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PopupInfo from '../PopupInfo/PopupInfo';
import { mainApi } from '../../utils/MainApi';
import { URL } from '../../utils/constans';
import { ERROR_TEXT } from '../../utils/constans';
import Preloader from '../Preloader/Preloader';


const App = () => {
    const [savedMovies, setSavedMovies] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupInfo, setPopupInfo] = useState();
    const [currentUser, setCurrentUser] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isTried, setisTried] = useState(false);
    const [errorActive, setErrorActive] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [preloader, setPreloader] = useState(true);
    const { beatfilmMovies } = URL;
    const { catchError } = ERROR_TEXT;
    const getWindowSize = useCallback(() => window.innerWidth, []);
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const navigate = useNavigate();
    const isOpenPopup = isPopupOpen;

    useEffect(() => {
      const handleResize = () => {
        setWindowSize(getWindowSize());
      };
      let resizeTime;
      const resizeMake = () => {
        if (!resizeTime) {
          resizeTime = setTimeout(() => {
            resizeTime = null;
            handleResize();
          }, 1000);
        }
      };
      window.addEventListener('resize', resizeMake, false);
      return () => window.removeEventListener('resize', handleResize);
    }, [getWindowSize]);

    useEffect(() => {
      function closeByEscape(evt) {
        if (evt.key === 'Escape') {
          closeAllPopups();
        }
      }

      if (isOpenPopup) {
        document.addEventListener('keydown', closeByEscape);
        return () => {
          document.removeEventListener('keydown', closeByEscape);
        };
      }
    }, [isOpenPopup]);

    useEffect(() => {
      api
        .getUser()
        .then((res) => {
          if (res._id) {
            setIsLogin(true);
            setCurrentUser(res);
          }
          setErrorMessage('');
          setErrorActive(false);
        })
        .finally(() => setisTried(true))
        .catch((err) => {
          console.log(err);
          if (err) {
            setCurrentUser({
              name: '',
              email: '',
              password: '',
            });
            localStorage.clear();
            setIsLogin(false);
            setisTried(false);
          }
        });
      mainApi
        .getSavedMovies()
        .then((res) => {
          setPreloader(true);
          setSavedMovies(res);
        })
        .finally(() => setPreloader(false))
        .catch((err) => console.log(err));
    }, [navigate, isTried, isLogin]);

    const closeAllPopups = () => {
      setIsPopupOpen(false);
    };

    const onSignOut = () => {
      auth
        .signOut()
        .then(() => {
          setCurrentUser({
            name: '',
            email: '',
            password: '',
          });
          localStorage.clear();
          setIsLogin(false);
          setisTried(false);
          navigate('/');
        })
        .catch((err) => console.log(err));
    };

    const handleLogin = () => {
      setIsLogin(true);
      navigate('/movies');
    };
    const handleLoginSubmit = (data) => {
      auth
        .signIn(data)
        .then((res) => {
          if (res.token) {
            handleLogin();
          }
        })
        .finally(() => setisTried(true))
        .catch((err) => {
          console.log(err);
          setIsPopupOpen(true);
          setPopupInfo(false);
          setPopupMessage(catchError);
        });
    };
    const handleRegisterSubmit = (data) => {
      auth
        .signUp(data)
        .then((res) => {
          if (res.token) {
            handleLogin();
          }
        })
        .finally(() => setisTried(true))
        .catch((err) => {
          console.log(err);
          setIsPopupOpen(true);
          setPopupInfo(false);
          setPopupMessage(catchError);
        });
    };

    const handleUpdateUser = (data) => {
      api
        .editUser(data)
        .then((res) => {
          setCurrentUser(res);
          setPopupInfo(true);
          setPopupMessage('ВАШИ ДАННЫЕ БЫЛИ ИЗМЕНЕНЫ');
        })
        .catch((err) => {
          console.log(err);
          setPopupInfo(false);
          setPopupMessage(catchError);
        })
        .finally(() => {
          setIsPopupOpen(true);
        });
    };

    const handleAddMovie = (movie) => {
      const addMovie = {
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${beatfilmMovies}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${beatfilmMovies}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      };
      mainApi
        .addSavedMovie(addMovie)
        .then((saveMovie) => {
          setSavedMovies([...savedMovies, saveMovie]);
        })
        .catch((err) => console.log(err));
    };

    const handleDeleteMovie = (movie) => {
      mainApi
        .deleteMovie(movie._id)
        .then(() => {
          setSavedMovies((state) => state.filter((c) => c._id !== movie._id));
        })
        .catch((err) => console.log(err));
    };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={
          <>
            <Header loggedIn={isLogin} />
            <Main />
            <Footer />
            </>
            }
          />
          <Route path="/movies" element={
          <>
            <Header loggedIn={isLogin} />
            {isTried ? (
              <ProtectedRoute
                loggedIn={isLogin}
                component={Movies}
                savedMovies={savedMovies}
                onAddMovie={handleAddMovie}
                onDeleteMovie={handleDeleteMovie}
                preloader={preloader}
                setPreloader={setPreloader}
                windowSize={windowSize}
              />
            ) : (
              <Preloader />
            )}
            <Footer />
            </>
          }
          />
          <Route path="/saved-movies" element={
          <>
            <Header loggedIn={isLogin} />
            {isTried ? (
              <ProtectedRoute
                loggedIn={isLogin}
                component={SavedMovies}
                savedMovies={savedMovies}
                onDeleteMovie={handleDeleteMovie}
                windowSize={windowSize}
              />
            ) : (
              <Preloader />
            )}
            <Footer />
          </>
          }
          />
          <Route exact path="/profile" element={
          <>
            <Header loggedIn={isLogin} />
            {isTried ? (
              <ProtectedRoute
                loggedIn={isLogin}
                component={Profile}
                onSignOut={onSignOut}
                onUpdateUser={handleUpdateUser}
              />
            ) : (
              <Preloader />
            )}
            </>
          }
          />
          <Route path="/signin" element={
          <>
            {isTried ? (
              <Navigate to="/movies" replace />
            ) : (
              <Login
                handleLoginSubmit={handleLoginSubmit}
                errorMessage={errorMessage}
                errorActive={errorActive}
              />
            )}
            </>
            }

          />
          <Route path="/signup" element={
          <>
            {isTried ? (
              <Navigate to="/movies" replace/>
            ) : (
              <Register
                handleRegisterSubmit={handleRegisterSubmit}
                errorMessage={errorMessage}
                errorActive={errorActive}
              />
            )}
            </>
          }
          />
          <Route path="*" element={
            <NotFound />
          }/>
        </Routes>
        <PopupInfo
          isOpen={isPopupOpen}
          onClose={closeAllPopups}
          onPopupInfo={popupInfo}
          popupMessage={popupMessage}
        />
        </CurrentUserContext.Provider>
    </div>
  );
};

export default App;


