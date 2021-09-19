// author @ismarianto 2020  

import React, { useContext, createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Dashbord from "./components/pages/Dasboard";
import Login from "./components/templates/login";
// import notfount from './components/pages/notfount';
import Barangform from './components/pages/barang/barang_form';
import Barang from './components/pages/barang/barang_list';
import Kategori from "./components/pages/kategori/kategori";
import Kategoriform from "./components/pages/kategori/kategori_form";
import Suplier from "./components/pages/suplier/suplier_list";
import Suplierform from "./components/pages/suplier/suplier_form";
import RefTutorial from "./components/pages/tesevent/testevent";
import Listuser from "./components/pages/user/user_list";
import Userform from "./components/pages/user/user_form";


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

function PrivateRoute({ component: Component, handleChildFunc, ...rest }) {
  let auth = localStorage.getItem('token');
  // config  
  return <Route {...rest} render={(props) => (
    auth !== null ? <Component {...props} user={auth} handleChildFunc={handleChildFunc} /> : <Redirect to="/" />
  )}
  />
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


          {/* reamiato something of the function  */}
          <PrivateRoute path="/barang" exact="barang" component={Barang} />
          <PrivateRoute path="/barang/add" exact="barang/add" component={Barangform} />
          <PrivateRoute path="/barang/edit/:id" exact="/barang/edit/:id" component={Barangform} />

          <PrivateRoute path="/suplier" exact="suplier" component={Suplier} />
          <PrivateRoute path="/suplier/add" exact="suplier/add" component={Suplierform} />
          <PrivateRoute path="/suplier/edit/:id" exact="/suplier/edit/:id" component={Suplierform} />


          {/* master data suplier */}
          <PrivateRoute path="/kategori" exact="kategori" component={Kategori} />
          <PrivateRoute path="/kategori/add" exact="kategori/add" component={Kategoriform} />
          <PrivateRoute path="/kategori/edit/:id" exact="/kategori/edit/:id" component={Kategoriform} />


          {/* report purhcahsing data  */}
          {/* <PrivateRoute path="/suplier" exact="suplier" component={Suplier} />
          <PrivateRoute path="/suplier/add" exact="suplier/add" component={Suplierform} />
          <PrivateRoute path="/suplier/edit/:id" exact="/suplier/edit/:id" component={Suplierform} /> */}

          <PrivateRoute path="/event" exact="event" component={RefTutorial} />
          {/* <PrivateRoute path="/suplier/edit/:id" exact="/suplier/edit/:id" component={Suplierform} /> */}

          <PrivateRoute path="/user" exact="user" component={Listuser} />
          <PrivateRoute path="/user/edit/:id" exact="user/edit/:id" component={Userform} />
          <PrivateRoute path="/user/add" exact="user/add" component={Userform} />

        </Switch>
      </Router>
    );
  }

}

export default App;