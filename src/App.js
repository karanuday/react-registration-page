import React from 'react';
import './App.css';
import SignUp from './pages/SignUp';
import UserDetail from './pages/UserDetail';
import UserList from './pages/UserList';

function DashBoard(props) {
  return (<span><span className="user-count">{props.users.length}</span> &nbsp;registered users.</span>);
}

class App extends React.Component {
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

  formSubmit(uname, email, pwd) {
    const newUser = { uname, email, pwd };
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
    this.setState({ currentPage: newPage });
  }

  render() {
    let currentPageComponent = this.fetchCurrentPage();
    const {currentPage} = this.state;
    return (
      <div className="App parent">
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

export default App;
