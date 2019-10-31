import React from 'react';
import { Item, Button, Label, Segment } from 'semantic-ui-react';

import { IActivity } from '../../models/activity';

interface IProps {
  activities: IActivity[],
  selectActivity: (id: string) => void,
  handleDeleteActivity: (e: React.SyntheticEvent<HTMLButtonElement>, id: string) => void,
  submiting: boolean,
  target: string
};

const ActivitiesList = ({ target, activities, selectActivity, handleDeleteActivity, submiting }: IProps) => {
  return (
    <Segment clearing style={{ background: 'grey' }}>
      <Item.Group divided>
        {
          activities.map(activity => (
            <Item key={activity.id}>
              <Item.Content>
                <Item.Header as='a'>{activity.title}</Item.Header>
                <Item.Meta>{activity.date}</Item.Meta>
                <Item.Description>
                  <div>{activity.description}</div>
                  <div>Город: {activity.city}</div>
                </Item.Description>
                <Item.Extra>
                  <Button
                    onClick={() => selectActivity(activity.id)}
                    floated="right"
                    content="Посмотреть"
                    color="black"
                  />
                  <Button
                    name={activity.id}
                    loading={target === activity.id && submiting}
                    onClick={(e) => handleDeleteActivity(e, activity.id)}
                    floated="right"
                    content="Удалить"
                    color="red"
                  />
                  <Label basic content={activity.category} />
                </Item.Extra>
              </Item.Content>
            </Item>
          ))
        }
      </Item.Group>
    </Segment>
  );
};

export default ActivitiesList;