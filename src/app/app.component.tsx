import React from 'react';
import { observer } from 'mobx-react-lite';
import { Container } from 'semantic-ui-react';
import Navbar from '../components/navbar';
import ActivityDashboard from '../components/activity-dashboard';
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import Home from '../pages/home';
import ActivityForm from '../components/activity-form';
import ActivityDetails from '../pages/activity-details';
import NotFound from '../pages/not-found';
import { ToastContainer } from 'react-toastify';

const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <React.Fragment>
      <ToastContainer position="bottom-right" />
      <Route exact path="/" component={Home} />
      <Route path="/(.+)" render={() => (
        <React.Fragment>
          <Navbar />
          <Container style={{ marginTop: '7em' }}>
            <Switch>
              <Route exact path="/activities" component={ActivityDashboard} />
              <Route path="/activities/:id" component={ActivityDetails} />
              <Route key={location.key} path={["/create", "/manage/:id"]} component={ActivityForm} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </React.Fragment>
      )} />
    </React.Fragment>
  );
}

export default withRouter(observer(App));
