import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <Menu color="grey" fixed="top" inverted>
      <Container>
        <Menu.Item header>
          Social app
        </Menu.Item>
        <Menu.Item
          name='сообщения'
        />
        <Menu.Item>
          <Button content="Добавить" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;
