import React from 'react';
import ActivityStore from '../../stores/activity.store';
import { observer } from 'mobx-react-lite';
import { Card, Button, Segment } from 'semantic-ui-react';

const ActivityDetails = () => {
  const activityStore = React.useContext(ActivityStore);
  const { selectedActivity, openEditForm, cancelSelectedActivity } = activityStore;
  return (
    <Segment style={{ backgroundColor: 'grey' }}>
      <Card fluid color="grey" style={{ backgroundColor: "grey" }}>
        <Card.Content>
          <Card.Header>{selectedActivity!.title}</Card.Header>
          <Card.Meta>
            <span className='date'>{selectedActivity!.date}</span>
          </Card.Meta>
          <Card.Description>
            {selectedActivity!.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths={2}>
            <Button onClick={() => openEditForm(selectedActivity!.id)} content="Изменить" color="black" />
            <Button onClick={() => cancelSelectedActivity()} content="Отмена" color="red" />
          </Button.Group>
        </Card.Content>
      </Card>
    </Segment>
  );
};

export default observer(ActivityDetails);
