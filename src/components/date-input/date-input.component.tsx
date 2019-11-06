import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label } from 'semantic-ui-react';
import { DateTimePicker } from 'react-widgets';

interface IProps extends FieldRenderProps<Date, HTMLInputElement>, FormFieldProps { }

const DateInput = ({ input, width, placeholder, meta: { touched, error }, ...rest }: IProps) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <DateTimePicker
        placeholder={placeholder}
        value={input.value || null}
        onChange={input.onChange}
        {...rest}
      />
      {touched && error && (
        <Label basic color="red">{error}</Label>
      )}
    </Form.Field>
  );
};

export default DateInput;
