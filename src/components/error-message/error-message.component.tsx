import React from 'react';
import { AxiosResponse } from 'axios';
import { Message } from 'semantic-ui-react';

interface IProps {
  error: AxiosResponse,
  text?: string
};

const ErrorMessage = ({ error, text }: IProps) => {
  return (
    <Message error>
      <Message.Header>{error.statusText}</Message.Header>
      {text && <Message.Content content={text} />}
    </Message>
  );
};

export default ErrorMessage;
