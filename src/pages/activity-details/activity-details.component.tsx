import React from 'react';
import { RootStoreContext } from '../../stores/root.store';
import { observer } from 'mobx-react-lite';
import { Grid } from 'semantic-ui-react';
import { RouteComponentProps } from 'react-router';
import ActivityDetailsHeader from '../../components/activity-details-header';
import ActivityDetailsInfo from '../../components/activity-details-info';
import ActivityDetailsChat from '../../components/activity-details-chat';
import ActivityDetailsSidebar from '../../components/activity-details-sidebar';

import Loader from '../../components/loader';

interface DetailParams {
  id: string
};

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history
}) => {
  const rootStore = React.useContext(RootStoreContext);
  const { activity, loadActivity, loadingInitial } = rootStore.activityStore;

  React.useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity, match.params.id, history]);

  if (loadingInitial) return <Loader />

  if (!activity) return <h3>Не найдено</h3>

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailsHeader activity={activity} />
        <ActivityDetailsInfo activity={activity} />
        <ActivityDetailsChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivityDetailsSidebar />
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDetails);
