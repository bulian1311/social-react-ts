import React from 'react';
import ActivityStore from '../../stores/activity.store';
import { observer } from 'mobx-react-lite';
import { Menu, Container, Button } from 'semantic-ui-react';

const Navbar = () => {
  const activityStore = React.useContext(ActivityStore);
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
          <Button onClick={activityStore.openCreateForm} content="Добавить" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(Navbar);
