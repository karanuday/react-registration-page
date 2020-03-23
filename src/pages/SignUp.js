import React, {Component} from 'react';

class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      showPwd: false,
    };
  }

  updateField(e, field) {
    this.setState({ [field]: e.target.value });
  }

  togglePwdVisibility(e) {
    e.preventDefault();
    this.setState(state => ({ showPwd: !state.showPwd }) );
  }

  render() {
    const { username, email, password, showPwd } = this.state;
    return (
      <div>
        <h1>Register New User</h1>
        <form onSubmit={(e) => { this.props.onSubmit(username, email, password, e) }}>
          <label htmlFor="username" className="form-label">Username</label><br />
          <input type="text" id="username" value={username} autoComplete="new-password"
            className="form-input" placeholder="Username"
            required
            onChange={e => this.updateField(e, 'username')} /><br />

          <label htmlFor="lname" className="form-label">Email</label><br />
          <input type="email" id="email" value={email}
            required
            className="form-input" placeholder="Email"
            onChange={e => this.updateField(e, 'email')}
          /><br />

          <label htmlFor="lname" className="form-label">Password</label><br />
          <input type={showPwd ? 'text' : 'password'} id="password" value={password}
            required
            className="password-input" placeholder="Password"
            onChange={e => this.updateField(e, 'password')}
          />
          <button
            onClick={(e) => this.togglePwdVisibility(e)}
            className="pwd-ctrl">
            {showPwd ? 'Hide' : 'Show'} Password
          </button><br />

          <button type="submit" className="next-btn">Next</button>
        </form>
      </div>
    );
  }
}

export default signUp;