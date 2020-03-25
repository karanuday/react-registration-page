import React from 'react';
import UserContext from '../UserContext';

function UserList(props) {
  return (
    <UserContext.Consumer>
    {
      context => {
        let userElements;
        if (context.users.length) {
          userElements =
            <ul>
              {context.users.map((user, idx) => (<li key={idx}>{user.name} ({user.username})</li>))}
            </ul>
        } else {
          userElements = <span>No Users registered yet.</span>
        }
        return (
          <div>
            <h1>Registrations</h1>
            {userElements}
          </div>
        );
      }
    }
    </UserContext.Consumer>
  );
}

export default UserList;