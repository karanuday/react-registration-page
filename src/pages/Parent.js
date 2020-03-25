import React from 'react';
import {
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import UserContext from '../UserContext';
import Registration from '../pages/Registration';
import UserList from './UserList';
import DashBoard from '../components/DashBoard';

function Parent () {
  return (
    <UserContext.Consumer>
    {
      context => {
        const { changePage, currentPage } = context;
        return (
          <div className="parent">
            <Link to="/register" >
              <button
                onClick={()=> {changePage('signUp')}}
                className={`nav-btn ${currentPage === 'signUp' ? 'active' : 'inactive'}`}>
                Register
              </button>
            </Link>
            <Link to="/list">
              <button
                onClick={()=> {changePage('list')}}
                className={`nav-btn ${currentPage === 'list' ? 'active' : 'inactive'}`}>
                View Registrations
              </button>
            </Link>
            <Link to="/dash">
              <button
                onClick={()=> {changePage('dash')}}
                className={`nav-btn ${currentPage === 'dash' ? 'active' : 'inactive'}`}>
                Dashboard
              </button>
            </Link>
            <div className="main-page">
              <Switch>
                <Route path="/register" component={Registration} />
                <Route exact path="/list" component={UserList} />
                <Route exact path="/dash" component={DashBoard} />
                <Redirect exact from="/" to="/register" />
              </Switch>
            </div>
          </div>
        );
      }
    }
    </UserContext.Consumer>
  );
}

export default Parent;
