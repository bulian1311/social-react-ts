import React from 'react';
import { observer } from 'mobx-react-lite';
import { Container } from 'semantic-ui-react';
import Navbar from '../components/navbar';
import ActivityDashboard from '../components/activity-dashboard';
import { Route, withRouter, RouteComponentProps } from 'react-router-dom';
import Home from '../pages/home';
import ActivityForm from '../components/activity-form';
import ActivityDetails from '../pages/activity-details';

const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/(.+)" render={() => (
        <React.Fragment>
          <Navbar />
          <Container style={{ marginTop: '7em' }}>
            <Route exact path="/activities" component={ActivityDashboard} />
            <Route path="/activities/:id" component={ActivityDetails} />
            <Route key={location.key} path={["/create", "/edit/:id"]} component={ActivityForm} />
          </Container>
        </React.Fragment>
      )} />
    </React.Fragment>
  );
}

export default withRouter(observer(App));
