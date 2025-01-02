import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { UserList, UserEdit, UserCreate, UserShow } from './modules/users';

const dataProvider = simpleRestProvider('http://localhost:3001');

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
        show={UserShow}
      />
    </Admin>
  );
}

export default App;
