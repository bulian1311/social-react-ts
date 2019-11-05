import React from 'react';
import { Item, Button, Segment, Icon } from 'semantic-ui-react';
import { IActivity } from '../../models/activity';
import { Link } from 'react-router-dom';

interface IProps {
  activity: IActivity
};

const ActivitiesListItem = ({ activity }: IProps) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/img/user.jpg" />
            <Item.Content>
              <Item.Header as='a'>{activity.title}</Item.Header>
              <Item.Description>
                Hosted by Bob
            </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Icon name="clock" />{activity.date}
        <Icon name="marker" />{activity.venue}, {activity.city}
      </Segment>
      <Segment secondary>
        asdasd asdad
        </Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          floated="right"
          content="Посмотреть"
          color="blue"
        />
      </Segment>
    </Segment.Group>
  );
};

export default ActivitiesListItem;
