import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

interface IProps {
  handleOpenCreateForm: () => void
}

const Navbar = ({ handleOpenCreateForm }: IProps) => {
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
          <Button onClick={handleOpenCreateForm} content="Добавить" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;
