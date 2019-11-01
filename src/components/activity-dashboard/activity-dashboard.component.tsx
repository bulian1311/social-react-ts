import React from 'react';
import { observer } from 'mobx-react-lite';
import { Grid } from 'semantic-ui-react';
import ActivityStore from '../../stores/activity.store';
import ActivitiesList from '../activities-list';
import ActivityDetails from '../activity-details';
import ActivityForm from '../activity-form';

const ActivityDashboard = () => {
  const activityStore = React.useContext(ActivityStore);
  const { editMode, selectedActivity } = activityStore;
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivitiesList />
      </Grid.Column>
      <Grid.Column width={6}>
        {
          selectedActivity && !editMode &&
          <ActivityDetails />
        }
        {
          editMode &&
          <ActivityForm key={Math.random()} />
        }
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
