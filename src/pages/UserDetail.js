import React, {Component} from 'react';

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      contact: '',
    }
  }
  updateField(e, field) {
    this.setState({ [field]: e.target.value });
  }

  render() {
    const { username, email } = this.props.userDetail;
    const { name, address, contact } = this.state;
    return (
      <div>
        <h1>Registration Details</h1>
        <form onSubmit={() => this.props.onSubmit(name, address, contact)}>
          <label htmlFor="username" className="form-label">Username</label><br />
          <input type="text" id="username" value={username} autoComplete="off"
            disabled
            className="form-input" placeholder="Username"
            onChange={e => this.updateField(e, 'username')} /><br />

          <label htmlFor="lname" className="form-label">Email</label><br />
          <input type="email" id="email" value={email}
            disabled
            className="form-input" placeholder="Email"
            onChange={e => this.updateField(e, 'email')}
          /><br />

          <label htmlFor="name" className="form-label">Name</label><br />
          <input type="text" id="name" value={name} autoComplete="off"
            className="form-input" placeholder="Name"
            required
            onChange={e => this.updateField(e, 'name')} /><br />

          <label htmlFor="address" className="form-label">Address</label><br />
          <textarea id="address" value={address}
            required
            className="form-input" placeholder="Address"
            onChange={e => this.updateField(e, 'address')}
          /><br />

          <label htmlFor="contact" className="form-label">Contact</label><br />
          <input type="text" id="contact" value={contact}
            required
            className="form-input" placeholder="Contact"
            onChange={e => this.updateField(e, 'contact')}
          />

          <button type="submit" className="next-btn">
            Register
          </button>
        </form>
      </div>
    )
  }
}

export default UserDetail;