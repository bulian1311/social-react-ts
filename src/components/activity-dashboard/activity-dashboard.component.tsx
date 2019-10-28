import React from 'react';
import { Grid } from 'semantic-ui-react';
import ActivitiesList from '../activities-list';
import ActivityDetails from '../activity-details';
import ActivityForm from '../activity-form';

import IActivity from '../../models/activity';

interface IProps {
  activities: IActivity[],
  selectActivity: (id: string) => void,
  selectedActivity: IActivity | null
};

const ActivityDashboard = ({ activities, selectActivity, selectedActivity }: IProps) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivitiesList activities={activities} selectActivity={selectActivity} />
      </Grid.Column>
      <Grid.Column width={6}>
        {
          selectedActivity && <ActivityDetails selectedActivity={selectedActivity} />
        }
        <ActivityForm />
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
