import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Explore from './pages/Explore/Explore/Explore';
import Purchase from './pages/Explore/Purchase/Purchase/Purchase';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AddProduct from './pages/AddProduct/AddProduct';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import MyOrder from './pages/Dashboard/MyOrder/MyOrder';
import Payment from './pages/Dashboard/Payment/Payment';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders/ManageAllOrders';
import AddReview from './pages/Dashboard/AddReview/AddReview';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/addProduct">
              <AddProduct />
            </Route>
            <Route path="/myorder">
              <MyOrder />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/manageallorder">
              <ManageAllOrders />
            </Route>
            <Route path="/addreview">
              <AddReview />
            </Route>
            <PrivateRoute path="/purchase/:productId">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
