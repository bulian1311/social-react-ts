import React from 'react';
import { v4 as uuid } from 'uuid';
import { Segment, Form, Button, Grid } from 'semantic-ui-react';
import { ActivityFormValues } from '../../models/activity';
import { RootStoreContext } from '../../stores/root.store';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import { Form as FinalForm, Field } from 'react-final-form';
import TextInput from '../text-input';
import TextAreaInput from '../text-area-input';
import SelectInput from '../select-input';

interface DetailParams {
  id: string
};

const ActivityForm: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history
}) => {
  const rootStore = React.useContext(RootStoreContext);
  const {
    createActivity,
    editActivity,
    submiting,
    loadActivity
  } = rootStore.activityStore;

  const [selectedActivity, setSelectedActivity] = React.useState(new ActivityFormValues());

  React.useEffect(() => {
    if (match.params.id) {
      loadActivity(match.params.id)
        .then((a) => setSelectedActivity(new ActivityFormValues(a)));
    }
  }, [match.params.id, loadActivity]);

  // const handleFormElementChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.currentTarget;
  //   setSelectedActivity({ ...selectedActivity, [name]: value });
  // }

  const handleFinalFormSubmit = (values: any) => {
    if (!selectedActivity.id) {
      let newActivity = {
        ...values,
        id: uuid()
      }
      createActivity(newActivity);
    } else {
      editActivity({ ...values });
    }
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <Segment clearing>
          <FinalForm
            initialValues={selectedActivity}
            onSubmit={handleFinalFormSubmit}
            render={({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Field
                  name="title"
                  placeholder="Заголовок"
                  value={selectedActivity.title}
                  component={TextInput}
                />
                <Field
                  name="description"
                  placeholder="Описание"
                  rows={3}
                  value={selectedActivity.description}
                  component={TextAreaInput}
                />
                <Field
                  name="category"
                  placeholder="Категория"
                  value={selectedActivity.category}
                  options={[{ key: 'drink', text: 'Drink', value: 'drink' }]}
                  component={SelectInput}
                />
                <Field
                  name="city"
                  placeholder="Город"
                  value={selectedActivity.city}
                  component={TextInput}
                />
                <Field
                  name="venue"
                  placeholder="Место"
                  value={selectedActivity.venue}
                  component={TextInput}
                />
                <Button loading={submiting} positive floated="right" type="submit" content="Отправить" />
                <Button onClick={() => history.push('/activities')} floated="right" type="button" content="Отменить" />
              </Form>
            )}
          />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityForm);
