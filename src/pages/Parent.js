import React from 'react';
import SignUp from './SignUp';
import UserDetail from './UserDetail';
import UserList from './UserList';

function DashBoard(props) {
  return (<span><span className="user-count">{props.users.length}</span> &nbsp;registered user(s).</span>);
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.state = {
      users: [],
      user: {},
      currentPage: 'signUp',
    };
  }

  formSubmit(username, email, password, e) {
    console.log(e);
    const newUser = { username, email, password };
    this.setState(state => ({
      user: newUser,
      currentPage: 'userDetail',
    }));
  }

  registerUser(name, address, contact) {
    const user = Object.assign({}, { name, address, contact }, this.state.user);
    this.setState({
      users: this.state.users.concat([user]),
      user: {},
      currentPage: 'usersList',
    })
  }

  fetchCurrentPage() {
    const currPage = this.state.currentPage;
    if (currPage === 'signUp') {
      return <SignUp onSubmit={this.formSubmit} userDetail={this.state.user}/>;
    } else if (currPage === 'userDetail') {
      return <UserDetail userDetail={this.state.user} onSubmit={this.registerUser}/>;
    } else if (currPage === 'usersList') {
      return <UserList users={this.state.users} />;
    }
    return <DashBoard users={this.state.users}/>;
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
    let currentPageComponent = this.fetchCurrentPage();
    const {currentPage} = this.state;
    return (
      <div className="parent">
        <button
          onClick={()=> {this.changePage('signUp')}}
          className={`nav-btn ${currentPage === 'signUp' ? 'active' : 'inactive'}`}>
          Sign Up
        </button>
        <button
          onClick={()=> {this.changePage('usersList')}}
          className={`nav-btn ${currentPage === 'usersList' ? 'active' : 'inactive'}`}>
          View Registrations
        </button>
        <button
          onClick={()=> {this.changePage('dashboard')}}
          className={`nav-btn ${currentPage === 'dashboard' ? 'active' : 'inactive'}`}>
          Dashboard
        </button>
        <div className="main-page">
          {currentPageComponent}
        </div>
      </div>
    );
  }
}

export default Parent;
