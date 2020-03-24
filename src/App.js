import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from './UserContext';
import './App.css';
import Parent from './pages/Parent';

function App (props) {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Parent/>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
