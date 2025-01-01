import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import PostList from './resources/postList';

const dataProvider = simpleRestProvider('http://localhost:3000');

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} />
    </Admin>
  );
}

export default App;
