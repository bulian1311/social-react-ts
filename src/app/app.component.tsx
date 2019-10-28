import React from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import Navbar from '../components/navbar';
import ActivityDashboard from '../components/activity-dashboard';

import IActyvity from '../models/activity';

const App: React.FC = () => {
  const [activities, setActivities] = React.useState<IActyvity[]>([]);
  const [selectedActivity, setSelectedActivity] = React.useState<IActyvity | null>(null);

  const handleSelectActyvity = (id: string) => {
    const activity = activities.filter(act => id === act.id)[0];
    setSelectedActivity(activity);
  }

  React.useEffect(() => {
    axios.get<IActyvity[]>('http://localhost:3030/activities')
      .then(res => setActivities(res.data));
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActyvity}
          selectedActivity={selectedActivity}
        />
      </Container>
    </React.Fragment>
  );
}

export default App;
