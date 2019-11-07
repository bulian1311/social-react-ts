import React from 'react';
import { observer } from 'mobx-react-lite';
import { Grid } from 'semantic-ui-react';
import ActivitiesList from '../activities-list';
import { RootStoreContext } from '../../stores/root.store';
import Loader from '../loader';

const ActivityDashboard = () => {
  const rootStore = React.useContext(RootStoreContext);
  const { activityStore } = rootStore;

  React.useEffect(() => {
    if (activityStore.activityRegistry.size === 0) {
      activityStore.loadActivities();
    }
  }, [activityStore]);

  if (activityStore.loadingInitial) return <Loader content="Загрузка" />

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivitiesList />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
