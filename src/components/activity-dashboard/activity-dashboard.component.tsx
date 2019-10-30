import React from 'react';
import { Grid } from 'semantic-ui-react';
import ActivitiesList from '../activities-list';
import ActivityDetails from '../activity-details';
import ActivityForm from '../activity-form';

import { IActivity } from '../../models/activity';

interface IProps {
  activities: IActivity[],
  selectActivity: (id: string) => void,
  selectedActivity: IActivity | null,
  editMode: boolean,
  setEditMode: (edit: boolean) => void
  setSelectedActivity: (a: IActivity | null) => void
  handleEditActivity: (a: IActivity) => void
  handleCreateActivity: (a: IActivity) => void
  handleDeleteActivity: (id: string) => void
};

const ActivityDashboard = ({
  activities,
  selectActivity,
  selectedActivity,
  editMode,
  setEditMode,
  setSelectedActivity,
  handleCreateActivity,
  handleEditActivity,
  handleDeleteActivity
}: IProps) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivitiesList
          activities={activities}
          selectActivity={selectActivity}
          handleDeleteActivity={handleDeleteActivity}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {
          selectedActivity && !editMode &&
          <ActivityDetails
            selectedActivity={selectedActivity}
            setEditMode={setEditMode}
            setSelectedActivity={setSelectedActivity}
          />
        }
        {
          editMode &&
          <ActivityForm
            key={Math.random()}
            selectedActivity={selectedActivity}
            setEditMode={setEditMode}
            handleCreateActivity={handleCreateActivity}
            handleEditActivity={handleEditActivity}
          />
        }
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
