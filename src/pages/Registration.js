import React from 'react';
import SignUp from '../components/SignUp';
import UserDetail from '../components/UserDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const RegistrationPage = () => {
  let {path} = useRouteMatch();

  return (
    <div>
      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${path}/details`}>
          <UserDetail></UserDetail>
        </Route>
        <Route exact path={path}>
          <SignUp></SignUp>
        </Route>
      </Switch>
    </div>
  );
}

export default RegistrationPage;