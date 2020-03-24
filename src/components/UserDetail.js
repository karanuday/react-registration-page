import React from 'react';
import UserContext from '../UserContext';
import { useHistory } from 'react-router-dom';

const UserDetail = () => {
  let history = useHistory();
  return (
    <UserContext.Consumer>
    {
      context => {
        const { username, email, name, address, contact } = context.user;
        function submitForm(e) {
          e.preventDefault();
          context.registerUser();
          history.push('/list') ;
        }
        return (
          <div>
            <h1>Registration Details</h1>
            <form onSubmit={submitForm}>
              <label htmlFor="username" className="form-label">Username</label><br />
              <input type="text" id="username" value={username} autoComplete="off"
                disabled
                className="form-input" placeholder="Username"                  
              /><br />

              <label htmlFor="lname" className="form-label">Email</label><br />
              <input type="email" id="email" value={email}
                disabled
                className="form-input" placeholder="Email"
              /><br />

              <label htmlFor="name" className="form-label">Name</label><br />
              <input type="text" id="name" value={name} autoComplete="off"
                className="form-input" placeholder="Name"
                required
                onChange={e => context.updateUserDetail('name', e.target.value)}
              /><br />

              <label htmlFor="address" className="form-label">Address</label><br />
              <textarea id="address" value={address}
                required
                className="form-input" placeholder="Address"
                onChange={e => context.updateUserDetail('address', e.target.value)}
              /><br />

              <label htmlFor="contact" className="form-label">Contact</label><br />
              <input type="text" id="contact" value={contact}
                required
                className="form-input" placeholder="Contact"
                onChange={e => context.updateUserDetail('contact', e.target.value)}
              />

              <button type="submit" className="next-btn">
                Register
              </button>
            </form>
          </div>
        )
      }
    }
    </UserContext.Consumer>
  )
}

export default UserDetail;