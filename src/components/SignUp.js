import React, {Fragment, useState} from 'react';
import UserContext from '../UserContext';
import { useHistory } from 'react-router-dom';

const SignUp = (props) => {
  let history = useHistory();
  let [showPwd, toggleShowPwd] = useState(false);

  const togglePwdVisibility = (e) => {
    e.preventDefault();
    toggleShowPwd(!showPwd);
  };

  return (
    <UserContext.Consumer>
    {
      context => {
        const { username, email, password } = context.user;
        return (
          <div>
            <h1>Register New User</h1>
            <form onSubmit={(e) => { e.preventDefault(); history.push('/register/details');}}>
              <label htmlFor="username" className="form-label">Username</label><br />
              <input type="text" id="username" value={username} autoComplete="new-password"
                className="form-input" placeholder="Username"
                required
                onChange={e => context.updateUserDetail('username', e.target.value)} /><br />

              <label htmlFor="lname" className="form-label">Email</label><br />
              <input type="email" id="email" value={email}
                required
                className="form-input" placeholder="Email"
                onChange={e => context.updateUserDetail('email', e.target.value)}
              /><br />

              <label htmlFor="lname" className="form-label">Password</label><br />
              <input type={showPwd ? 'text' : 'password'} id="password" value={password}
                required
                className="password-input" placeholder="Password"
                onChange={e => context.updateUserDetail('password', e.target.value)}
              />
              <button
                onClick={(e) => togglePwdVisibility(e)}
                className="pwd-ctrl">
                {showPwd ? 'Hide' : 'Show'} Password
              </button><br />

              <button type="submit" className="next-btn">Next</button>
            </form>
        </div>
        );
      }
    }
    </UserContext.Consumer>
  );
}

export default SignUp;