import React from 'react';

import { Segment, Form } from 'semantic-ui-react';

const ActivityForm = () => {
  return (
    <Segment style={{ backgroundColor: 'grey' }}>
      <Form>
        <Form.Input placeholder="Заголовок" />
        <Form.TextArea rows={2} placeholder="Описание" />
        <Form.Input placeholder="Категория" />
        <Form.Input type="date" placeholder="Дата" />
        <Form.Input placeholder="Город" />
        <Form.Input placeholder="Место" />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
