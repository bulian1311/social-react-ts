import React from 'react';
import { v4 as uuid } from 'uuid';
import { Segment, Form, Button, Grid } from 'semantic-ui-react';
import { IActivity } from '../../models/activity';
import ActivityStore from '../../stores/activity.store';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';

interface DetailParams {
  id: string
};

const ActivityForm: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history
}) => {
  const activityStore = React.useContext(ActivityStore);
  const {
    activity,
    createActivity,
    editActivity,
    submiting,
    loadActivity,
    clearActivity
  } = activityStore;

  const [selectedActivity, setSelectedActivity] = React.useState<IActivity>({
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  });

  React.useEffect(() => {
    if (match.params.id && selectedActivity.id.length === 0) {
      loadActivity(match.params.id)
        .then(() => activity && setSelectedActivity(activity));
    }
    return () => clearActivity();
  }, [match.params.id, loadActivity, clearActivity, activity, selectedActivity.id.length]);

  const handleSubmit = () => {
    if (selectedActivity.id.length === 0) {
      let newActivity = {
        ...selectedActivity,
        id: uuid()
      }
      createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`));
    } else {
      editActivity(selectedActivity).then(() => history.push(`/activities/${selectedActivity.id}`));
    }
  };

  const handleFormElementChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setSelectedActivity({ ...selectedActivity, [name]: value });
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <Segment clearing>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              onChange={handleFormElementChange}
              name="title"
              placeholder="Заголовок"
              value={selectedActivity.title}
            />
            <Form.TextArea
              onChange={handleFormElementChange}
              name="description"
              rows={2}
              placeholder="Описание"
              value={selectedActivity.description}
            />
            <Form.Input
              onChange={handleFormElementChange}
              name="category"
              placeholder="Категория"
              value={selectedActivity.category}
            />
            <Form.Input
              onChange={handleFormElementChange}
              name="date"
              type="datetime-local"
              placeholder="Дата"
              value={selectedActivity.date}
            />
            <Form.Input
              onChange={handleFormElementChange}
              name="city"
              placeholder="Город"
              value={selectedActivity.city}
            />
            <Form.Input
              onChange={handleFormElementChange}
              name="venue"
              placeholder="Место"
              value={selectedActivity.venue}
            />
            <Button loading={submiting} positive floated="right" type="submit" content="Отправить" />
            <Button onClick={() => history.push('/activities')} floated="right" type="button" content="Отменить" />
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityForm);
