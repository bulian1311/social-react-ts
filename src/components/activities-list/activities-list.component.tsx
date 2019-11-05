import React from 'react';
import { observer } from 'mobx-react-lite';
import { Item, Segment } from 'semantic-ui-react';
import ActivityStore from '../../stores/activity.store';
import ActivitiesListItem from '../activities-list-item';

const ActivitiesList = () => {
  const activityStore = React.useContext(ActivityStore);
  const { activitiesByDate } = activityStore;
  return (
    <Segment clearing>
      <Item.Group divided>
        {
          activitiesByDate.map(activity => (
            <ActivitiesListItem key={activity.id} activity={activity} />
          ))
        }
      </Item.Group>
    </Segment>
  );
};

export default observer(ActivitiesList);
