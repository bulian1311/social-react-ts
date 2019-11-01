import React from 'react';
import { v4 as uuid } from 'uuid';
import { Segment, Form, Button } from 'semantic-ui-react';
import { IActivity } from '../../models/activity';
import ActivityStore from '../../stores/activity.store';
import { observer } from 'mobx-react-lite';

const ActivityForm = () => {
  const activityStore = React.useContext(ActivityStore);
  const { selectedActivity, createActivity, editActivity, submiting, cancelOpenForm } = activityStore;

  const initializeForm = (): IActivity => {
    if (selectedActivity) {
      return selectedActivity;
    } else {
      return {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
      }
    }
  };

  const [activity, setActivity] = React.useState<IActivity>(initializeForm());

  const handleSubmit = () => {
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid()
      }
      createActivity(newActivity);
    } else {
      editActivity(activity);
    }
  };

  const handleFormElementChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setActivity({ ...activity, [name]: value });
  }

  return (
    <Segment clearing style={{ backgroundColor: 'grey' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleFormElementChange}
          name="title"
          placeholder="Заголовок"
          value={activity.title}
        />
        <Form.TextArea
          onChange={handleFormElementChange}
          name="description"
          rows={2}
          placeholder="Описание"
          value={activity.description}
        />
        <Form.Input
          onChange={handleFormElementChange}
          name="category"
          placeholder="Категория"
          value={activity.category}
        />
        <Form.Input
          onChange={handleFormElementChange}
          name="date"
          type="datetime-local"
          placeholder="Дата"
          value={activity.date}
        />
        <Form.Input
          onChange={handleFormElementChange}
          name="city"
          placeholder="Город"
          value={activity.city}
        />
        <Form.Input
          onChange={handleFormElementChange}
          name="venue"
          placeholder="Место"
          value={activity.venue}
        />
        <Button loading={submiting} positive floated="right" type="submit" content="Отправить" />
        <Button onClick={() => cancelOpenForm()} floated="right" type="button" content="Отменить" />
      </Form>
    </Segment>
  );
};

export default observer(ActivityForm);
