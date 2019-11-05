import React from 'react';
import ActivityStore from '../../stores/activity.store';
import { observer } from 'mobx-react-lite';
import { Card, Button, Segment } from 'semantic-ui-react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import Loader from '../loader';

interface DetailParams {
  id: string
};

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history
}) => {
  const activityStore = React.useContext(ActivityStore);
  const { activity, loadActivity, loadingInitial } = activityStore;

  React.useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity, match.params.id]);

  if (loadingInitial || !activity) return <Loader />

  return (
    <Segment style={{ backgroundColor: 'grey' }}>
      <Card fluid color="grey" style={{ backgroundColor: "grey" }}>
        <Card.Content>
          <Card.Header>{activity!.title}</Card.Header>
          <Card.Meta>
            <span className='date'>{activity!.date}</span>
          </Card.Meta>
          <Card.Description>
            {activity!.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths={2}>
            <Button as={Link} to={`/edit/${activity.id}`} content="Изменить" color="black" />
            <Button onClick={() => history.push('/activities')} content="Отмена" color="red" />
          </Button.Group>
        </Card.Content>
      </Card>
    </Segment>
  );
};

export default observer(ActivityDetails);
