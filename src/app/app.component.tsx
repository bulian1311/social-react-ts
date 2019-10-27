import React from 'react';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react';

const App: React.FC = () => {
  const [items, setItems] = React.useState<any>([]);

  React.useEffect(() => {
    axios.get('http://localhost:3030/test')
      .then(res => setItems(res.data));
  });

  return (
    <div className="App">
      <Header as='h2'>
        <Icon name='users' />
        <Header.Content>Social app</Header.Content>
        <List>
          {
            items.map(
              (item: any) => <List.Item key={item.id}>{item.name}</List.Item>
            )
          }
        </List>
      </Header>
    </div>
  );
}

export default App;
