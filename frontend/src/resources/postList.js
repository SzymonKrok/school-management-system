import { List, Datagrid, TextField } from 'react-admin';

const PostList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
    </Datagrid>
  </List>
);

export default PostList;
