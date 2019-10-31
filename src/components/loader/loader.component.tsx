import React from 'react';
import { Dimmer, Loader as Load } from 'semantic-ui-react';

interface IProps {
  inverted?: boolean,
  content?: string
}

const Loader = ({ inverted, content }: IProps) => {
  return (
    <Dimmer active inverted={inverted}>
      <Load content={content} />
    </Dimmer>
  );
};

export default Loader;
