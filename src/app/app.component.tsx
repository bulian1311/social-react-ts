import React from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import Navbar from '../components/navbar';
import ActivityDashboard from '../components/activity-dashboard';

import { IActivity } from '../models/activity';

const App: React.FC = () => {
  const [activities, setActivities] = React.useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = React.useState<IActivity | null>(null);
  const [editMode, setEditMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    axios.get<IActivity[]>('http://localhost:3030/activities')
      .then(res => setActivities(res.data));
  }, []);

  const handleSelectActyvity = (id: string) => {
    const activity = activities.filter(act => id === act.id)[0];
    setSelectedActivity(activity);
    setEditMode(false);
  }

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  };

  const handleCreateActivity = (activity: IActivity) => {
    setActivities([...activities, activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  };

  const handleEditActivity = (activity: IActivity) => {
    setActivities([...activities.filter(a => a.id !== activity.id), activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  };

  const handleDeleteActivity = (id: string) => {
    setActivities([...activities.filter(a => a.id !== id)]);
  };

  return (
    <React.Fragment>
      <Navbar handleOpenCreateForm={handleOpenCreateForm} />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActyvity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
          handleCreateActivity={handleCreateActivity}
          handleEditActivity={handleEditActivity}
          handleDeleteActivity={handleDeleteActivity}
        />
      </Container>
    </React.Fragment>
  );
}

export default App;
