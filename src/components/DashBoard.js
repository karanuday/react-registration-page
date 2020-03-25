import React from 'react';
import UserContext from '../UserContext';

export default function DashBoard() {
  return (
    <UserContext.Consumer>
    {
      context => {
        const { users } = context;
        return (
          <span>
            <span className="user-count">{users.length}</span> &nbsp;registered user(s).
          </span>
        )
      }
    }
    </UserContext.Consumer>
  );
}