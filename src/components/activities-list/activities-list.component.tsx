import React from 'react';
import { observer } from 'mobx-react-lite';
import { Item, Button, Label, Segment } from 'semantic-ui-react';
import ActivityStore from '../../stores/activity.store';
import { Link } from 'react-router-dom';

const ActivitiesList = () => {
  const activityStore = React.useContext(ActivityStore);
  const { activitiesByDate, deleteActivity, submiting, target } = activityStore;
  return (
    <Segment clearing style={{ background: 'grey' }}>
      <Item.Group divided>
        {
          activitiesByDate.map(activity => (
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
                    as={Link}
                    to={`/activities/${activity.id}`}
                    floated="right"
                    content="Посмотреть"
                    color="black"
                  />
                  <Button
                    name={activity.id}
                    loading={target === activity.id && submiting}
                    onClick={(e) => deleteActivity(e, activity.id)}
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

export default observer(ActivitiesList);
