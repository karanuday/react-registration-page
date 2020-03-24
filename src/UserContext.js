import React, { Component } from 'react';

const UserContext = React.createContext();

class UserProvider extends Component {
  // Context state
  constructor(props) {
    super(props);
    this.updateUserDetail = this.updateUserDetail.bind(this);
    // this.formSubmit = this.formSubmit.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.state = {
      user: {},
      users: [],
    };
  }

  updateUserDetail(field, val) {
    const user = Object.assign({}, this.state.user, {[field]: val});
    this.setState({
      user,
    });
  }
  // Method to update state
  // formSubmit(username, email, password) {
  //   const newUser = { username, email, password };
  //   this.setState(state => ({
  //     user: newUser,
  //     currentPage: 'userDetail',
  //   }));
  // }

  registerUser() {
    const newUser = Object.assign({}, this.state.user);
    this.setState({
      users: this.state.users.concat([newUser]),
      user: {},
      currentPage: 'usersList',
    });
  }

  render() {
    const { children } = this.props;
    const { user, users } = this.state;
    const { registerUser, updateUserDetail } = this;
    return (
      <UserContext.Provider
        value={{
          user,
          users,
          registerUser,
          updateUserDetail,
        }}
      >
        {children}
      </UserContext.Provider>
    )
  }
}

export default UserContext;

export { UserProvider };