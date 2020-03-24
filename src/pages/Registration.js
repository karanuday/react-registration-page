import React from 'react';
import SignUp from '../components/SignUp';
import UserDetail from '../components/UserDetail';
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

const RegistrationPage = () => {
  let {path} = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path} component={SignUp} />
        <Route path={`${path}/details`} component={UserDetail} />
      </Switch>
    </div>
  );
}

export default RegistrationPage;