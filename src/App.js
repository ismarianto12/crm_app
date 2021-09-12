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
import Barang from './components/pages/barang/barang_list';
import Kategori from "./components/pages/kategori/kategori";
import Kategoriform from "./components/pages/kategori/kategori_form";


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
  // console.log(children);
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

          {/* reamiato something of the function  */}
          <PrivateRoute path="/barang" exact="barang" component={Barang} />
          <PrivateRoute path="/kategori" exact="kategori" component={Kategori} />
          <PrivateRoute path="/kategori/add" exact="kategori/add" component={Kategoriform} />
          <PrivateRoute path="/kategori/edit/:id" exact="/kategori/edit/:id" component={Kategoriform} />
      
        </Switch>
      </Router>
    );
  }

}

export default App;