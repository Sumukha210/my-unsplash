import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Loader from "./component/common/Loader";
import NavBar from "./component/common/NavBar";
import Login from "./component/loginsignup/Login";
import SignUp from "./component/loginsignup/Signup";
import { useSelector } from "react-redux";

const Home = lazy(() => import("./component/Home"));
const UserAccountPage = lazy(() => import("./component/User Account"));
const Gallery = lazy(() => import("./component/gallery/Gallery"));

// const Login = lazy(() => import("./component/loginsignup/Login"));
// const Signup = lazy(() => import("./component/loginsignup/Signup"));

const App = () => {
  const isAuthenticated = useSelector(({ AuthReducer }) => AuthReducer.isAuth);

  console.log(isAuthenticated);

  const PrivateRoute = ({ children, ...rest }) => (
    <Route
      {...rest}
      render={() => (isAuthenticated ? children : <Redirect to="/login" />)}
    />
  );

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Suspense fallback={<Loader />}>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>

            <PrivateRoute exact path="/userAccount">
              <UserAccountPage />
            </PrivateRoute>

            <PrivateRoute exact path="/gallery">
              <Gallery />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>
          </Suspense>
        </Switch>
      </Router>
    </>
  );
};

export default App;
