import React from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container style={{ marginTop: '7em' }}>
      <h1 style={{ color: 'white' }}>Home</h1>
      <h3 style={{ color: 'white' }}>Перейти к <Link to="/activities">Постам</Link></h3>
    </Container>
  );
};

export default Home;

