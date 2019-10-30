import React from 'react';
import { Card, Button, Segment } from 'semantic-ui-react';

import { IActivity } from '../../models/activity';

interface IProps {
  selectedActivity: IActivity,
  setEditMode: (edit: boolean) => void,
  setSelectedActivity: (a: IActivity | null) => void
}

const ActivityDetails = ({ selectedActivity, setEditMode, setSelectedActivity }: IProps) => {
  return (
    <Segment style={{ backgroundColor: 'grey' }}>
      <Card fluid color="grey" style={{ backgroundColor: "grey" }}>
        <Card.Content>
          <Card.Header>{selectedActivity.title}</Card.Header>
          <Card.Meta>
            <span className='date'>{selectedActivity.date}</span>
          </Card.Meta>
          <Card.Description>
            {selectedActivity.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths={2}>
            <Button onClick={() => setEditMode(true)} content="Изменить" color="black" />
            <Button onClick={() => setSelectedActivity(null)} content="Отмена" color="red" />
          </Button.Group>
        </Card.Content>
      </Card>
    </Segment>
  );
};

export default ActivityDetails;
