import React, {Component} from 'react';

class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: '',
      email: '',
      pwd: '',
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
    const { uname, email, pwd, showPwd } = this.state;
    return (
      <div>
        <h1>Register New User</h1>
        <form onSubmit={() => { this.props.onSubmit(uname, email, pwd) }}>
          <label htmlFor="uname" className="form-label">Username</label><br/>
          <input type="text" id="uname" value={uname} autoComplete="new-password"
            className="form-input" placeholder="Username"
            onChange={e => this.updateField(e, 'uname')}/><br/>
          <label htmlFor="lname" className="form-label">Email</label><br/>
          <input type="email" id="email" value={email}
            className="form-input" placeholder="Email"
            onChange={e => this.updateField(e, 'email')}
          /><br/>
          <label htmlFor="lname" className="form-label">Password</label><br/>
          <input type={showPwd ? 'text' : 'password'} id="password" value={pwd}
            className="password-input" placeholder="Password"
            onChange={e => this.updateField(e, 'pwd')}
          />
          <button onClick={(e) => this.togglePwdVisibility(e)}
            className="pwd-ctrl"
            >
            {showPwd ? 'Hide' : 'Show'} Password
          </button><br/>
          <button type="submit" className="next-btn">Next</button>
        </form>
      </div>
    );
  }
}

export default signUp;