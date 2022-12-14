import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import MyGarden from '../MyGarden/MyGarden';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Map from '../Map/Map';
import Faq from '../Faq/Faq';
import Gallery from '../Gallery/Gallery';
import PlantList from '../PlantList/PlantList';
import Steps from '../Steps/Steps';
import Installation from '../Installation/Installation';
import Design from '../Design/Design';
import Depth from '../Depth/Depth';
import Size from '../Size/Size';



function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/gallery"
          >
            <Gallery />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/search"
          >
            <PlantList />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows MyGarden else shows LoginPage
            exact
            path="/mygarden"
          >
            <MyGarden />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows MyGarden else shows LoginPage
            exact
            path="/size"
          >
            <Size />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows MyGarden else shows LoginPage
            exact
            path="/design"
          >
            <Design />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows MyGarden else shows LoginPage
            exact
            path="/depth"
          >
            <Depth />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Map else shows LoginPage
            exact
            path="/location"
          >
            <Map />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Map else shows LoginPage
            exact
            path="/steps"
          >
            <Steps />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Map else shows LoginPage
            exact
            path="/installation"
          >
            <Installation />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Map else shows LoginPage
            exact
            path="/faq"
          >
            <Faq />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404- Oops! This page wasn't found.</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
