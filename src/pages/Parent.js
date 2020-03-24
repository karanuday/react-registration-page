import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserProvider } from '../UserContext';
import Registration from '../pages/Registration';
import UserList from './UserList';
import DashBoard from '../components/DashBoard';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: {},
      currentPage: 'signUp',
    };
  }
  
  changePage(newPage) {
    if (['signUp', 'userDetail'].includes(this.state.currentPage)) {
      const changeScreen = prompt("Changes will not be saved, are you sure?", "Yes") || '';
      if (changeScreen.toLowerCase() === 'yes') this.setState({ currentPage: newPage });
    } else {
      this.setState({ currentPage: newPage });
    }
  }

  render() {
    // let currentPageComponent = this.fetchCurrentPage();
    const {currentPage} = this.state;
    return (
      <UserProvider>
        <Router>
          <div className="parent">
            <button
              onClick={()=> {this.changePage('signUp')}}
              className={`nav-btn ${currentPage === 'signUp' ? 'active' : 'inactive'}`}>
              <Link to="/register">Register</Link>
            </button>
            <button
              onClick={()=> {this.changePage('usersList')}}
              className={`nav-btn ${currentPage === 'usersList' ? 'active' : 'inactive'}`}>
              <Link to="/list">View Registrations</Link>
            </button>
            <button
              onClick={()=> {this.changePage('dashboard')}}
              className={`nav-btn ${currentPage === 'dashboard' ? 'active' : 'inactive'}`}>
              <Link to="/dash">Dashboard</Link>
            </button>
            <div className="main-page">
              <Switch>
                <Route exact path="/register">
                  <Registration />
                </Route>
                <Route path="/list">
                  <UserList />
                </Route>
                <Route path="/dash">
                  <DashBoard />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </UserProvider>
    );
  }
}

export default Parent;
