import React, { Component } from 'react';

const UserContext = React.createContext();

class UserProvider extends Component {
  // Context state
  constructor(props) {
    super(props);
    this.updateUserDetail = this.updateUserDetail.bind(this);
    this.changePage = this.changePage.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.state = {
      user: {},
      users: [],
      currentPage: 'signUp',
    };
  }

  updateUserDetail(field, val) {
    const user = Object.assign({}, this.state.user, {[field]: val});
    this.setState({
      user,
    });
  }

  changePage(currPage) {
    this.setState({currentPage: currPage});
  }
  
  registerUser() {
    const newUser = Object.assign({}, this.state.user);
    this.setState({
      users: this.state.users.concat([newUser]),
      user: {},
      currentPage: 'list',
    });
  }

  render() {
    const { children } = this.props;
    const { user, users, currentPage } = this.state;
    const { registerUser, updateUserDetail, changePage } = this;
    return (
      <UserContext.Provider
        value={{
          user,
          users,
          currentPage,
          registerUser,
          updateUserDetail,
          changePage,
        }}
      >
        {children}
      </UserContext.Provider>
    )
  }
}

export default UserContext;

export { UserProvider };