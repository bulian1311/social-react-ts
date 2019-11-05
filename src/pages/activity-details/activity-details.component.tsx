import React from 'react';
import ActivityStore from '../../stores/activity.store';
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
  match
}) => {
  const activityStore = React.useContext(ActivityStore);
  const { activity, loadActivity, loadingInitial } = activityStore;

  React.useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity, match.params.id]);

  if (loadingInitial || !activity) return <Loader />

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
