import React from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { Form, Button } from 'semantic-ui-react';
import TextInput from '../text-input';
import { RootStoreContext } from '../../stores/root.store';
import { IUserFormValues } from '../../models/user';
import { FORM_ERROR } from 'final-form';
import ErrorMessage from '../error-message';

const LoginForm = () => {
  const rootStore = React.useContext(RootStoreContext);
  const { login } = rootStore.userStore;

  const handleSubmit = (values: IUserFormValues) => {
    login(values).catch(error => ({
      [FORM_ERROR]: error
    }));
  };

  return (
    <FinalForm
      onSubmit={handleSubmit}
      render={({ handleSubmit, submitting, submitError }) => (
        <Form onSubmit={handleSubmit} error>
          <h3>Войти</h3>
          <Field
            name="email"
            component={TextInput}
            placeholder="email"
            type="email"
          />
          <Field
            name="password"
            component={TextInput}
            placeholder="password"
            type="password"
          />
          <Button
            loading={submitting}
            positive
            content="Войти"
          />
          <br />
          {submitError && <ErrorMessage error={submitError} text="Неверный email или пароль" />}
        </Form>
      )}
    />
  )
}

export default LoginForm
