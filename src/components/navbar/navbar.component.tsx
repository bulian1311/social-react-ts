import React from 'react';
import { observer } from 'mobx-react-lite';
import { Menu, Container, Button, Image, Dropdown } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import { RootStoreContext } from '../../stores/root.store';

const Navbar = () => {
  const rootStore = React.useContext(RootStoreContext);
  const { user, logout } = rootStore.userStore;
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
        {user && (
          <Menu.Item position='right'>
            <Image avatar spaced='right' src={'/img/user.jpg'} />
            <Dropdown pointing='top left' text={user.email}>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to={`/profile/username`}
                  text='My profile'
                  icon='user'
                />
                <Dropdown.Item onClick={logout} text='Logout' icon='power' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        )}
      </Container>
    </Menu>
  );
};

export default observer(Navbar);
