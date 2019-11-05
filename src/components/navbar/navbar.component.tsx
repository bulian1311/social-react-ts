import React from 'react';
import { observer } from 'mobx-react-lite';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Menu color="blue" fixed="top" inverted>
      <Container>
        <Menu.Item header as={NavLink} exact to="/">
          Social app
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/activities"
          name='Посты'
        />
        <Menu.Item as={NavLink} to="/create">
          <Button content="Добавить" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(Navbar);
