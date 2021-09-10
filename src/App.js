import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Dashbord from "./components/pages/Dasboard";
import Login from "./components/templates/login";
import notfount from './components/pages/notfount';
import Barangform from './components/pages/barang/barang_form';


const AuthContext = createContext();
function useAuth() {
  return useContext(AuthContext);
}

function logout({ children, ...rest }) {
  return (
    console.log('logout ya ..'),
    localStorage.clear(),
    <Redirect
      to={{
        pathname: "/",
      }}
    />
  );

}

function PrivateRoute({ children, ...rest }) {
  let auth = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          <Redirect
            to={{
              pathname: "/dashboard"
            }}
          />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact="login" component={Login} />
          <Route path="/logout" exact="logout" component={logout} />
          {/* <Route path="*" exact="404" component={notfount} /> */}
          <PrivateRoute path="/dashboard" exact="dashboard" component={Dashbord} />
          <PrivateRoute path="/barang/add" exact="barang/add" component={Barangform} />
        </Switch>
      </Router>
    );
  }

}

export default App;