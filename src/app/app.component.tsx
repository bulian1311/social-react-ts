import React from 'react';
import agent from '../api/agent';
import { Container } from 'semantic-ui-react';
import Navbar from '../components/navbar';
import Loader from '../components/loader';
import ActivityDashboard from '../components/activity-dashboard';

import { IActivity } from '../models/activity';

const App: React.FC = () => {
  const [activities, setActivities] = React.useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = React.useState<IActivity | null>(null);
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [submiting, setSubmiting] = React.useState<boolean>(false);
  const [target, setTarget] = React.useState<string>('');

  React.useEffect(() => {
    agent.Activities.list()
      .then(activities => setActivities(activities))
      .then(() => setLoading(false));
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
    setSubmiting(true);
    agent.Activities.create(activity)
      .then(() => {
        setActivities([...activities, activity]);
        setSelectedActivity(activity);
        setEditMode(false);
      })
      .then(() => setSubmiting(false));
  };

  const handleEditActivity = (activity: IActivity) => {
    setSubmiting(true);
    agent.Activities.update(activity)
      .then(() => {
        setActivities([...activities.filter(a => a.id !== activity.id), activity]);
        setSelectedActivity(activity);
        setEditMode(false);
      })
      .then(() => setSubmiting(false));
  };

  const handleDeleteActivity = (e: React.SyntheticEvent<HTMLButtonElement>, id: string) => {
    setSubmiting(true);
    setTarget(e.currentTarget.name);
    agent.Activities.delete(id)
      .then(() => {
        setActivities([...activities.filter(a => a.id !== id)]);
      })
      .then(() => setSubmiting(false));
  };

  if (loading) return <Loader content="Загрузка" />

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
          submiting={submiting}
          target={target}
        />
      </Container>
    </React.Fragment>
  );
}

export default App;
