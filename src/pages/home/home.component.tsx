import React from 'react';
import { Container, Segment, Header, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { RootStoreContext } from '../../stores/root.store';

const HomePage = () => {
  const rootStore = React.useContext(RootStoreContext);
  const { isLogin, user } = rootStore.userStore;
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/img/1.jpeg'
            alt='logo'
            style={{ marginBottom: 12 }}
          />
          Reactivities
        </Header>
        {
          isLogin && user ?
            (
              <React.Fragment>
                <Header as='h2' inverted content='С возвращением' />
                <Button as={Link} to='/activities' size='huge' inverted>
                  К постам
                </Button>
              </React.Fragment>
            ) :
            (
              <React.Fragment>
                <Header as='h2' inverted content='Добро пожаловать' />
                <Button as={Link} to='/login' size='huge' inverted>
                  Войти
                </Button>
                <Button as={Link} to='/register' size='huge' inverted>
                  Зарегистрироваться
                </Button>
              </React.Fragment>
            )
        }
      </Container>
    </Segment>
  );
};

export default HomePage;
