import React from 'react';
import { observer } from 'mobx-react-lite';
import { Container } from 'semantic-ui-react';
import Navbar from '../components/navbar';
import Loader from '../components/loader';
import ActivityDashboard from '../components/activity-dashboard';
import ActivityStore from '../stores/activity.store';

const App: React.FC = () => {
  const activitiStore = React.useContext(ActivityStore);

  React.useEffect(() => {
    activitiStore.loadActivities();
  }, [activitiStore]);

  if (activitiStore.loadingInitial) return <Loader content="Загрузка" />

  return (
    <React.Fragment>
      <Navbar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard />
      </Container>
    </React.Fragment>
  );
}

export default observer(App);
