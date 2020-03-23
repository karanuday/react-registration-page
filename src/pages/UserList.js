import React from 'react';

function UsersList(props) {
  let userElements;
  if (props.users.length) {
    userElements = props.users.map((user, idx) => (<li key={idx}>{user.name} ({user.uname})</li>));
  } else {
    userElements = 'No Users registered yet.'
  }
  return (
    <div>
      <h1>Registrations</h1>
      <ul>
        {userElements}
      </ul>
    </div>
  );
}

export default UsersList;