import React from 'react';
import { observer } from 'mobx-react-lite';
import { Item, Segment } from 'semantic-ui-react';
import ActivitiesListItem from '../activities-list-item';
import { RootStoreContext } from '../../stores/root.store';

const ActivitiesList = () => {
  const rootStore = React.useContext(RootStoreContext);
  const { activitiesByDate } = rootStore.activityStore;
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
