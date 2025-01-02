import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  ShowButton,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  Show,
  SimpleShowLayout,
  SelectInput,
  DateField,
} from 'react-admin';

// ------------------------------------------------------------------
// LISTA UŻYTKOWNIKÓW
// ------------------------------------------------------------------
export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="firstName" label="Imię" />
      <TextField source="lastName" label="Nazwisko" />
      <EmailField source="email" label="Email" />
      <TextField source="role" label="Rola" />
      <DateField source="createdAt" label="Utworzony" />
      <DateField source="updatedAt" label="Zmodyfikowany" />
      <EditButton />
      <ShowButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// ------------------------------------------------------------------
// EDYCJA UŻYTKOWNIKA
// ------------------------------------------------------------------
export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      {/* Pole ID tylko do odczytu */}
      <TextInput source="id" disabled label="ID" />

      {/* Pola do edycji */}
      <TextInput source="firstName" label="Imię" />
      <TextInput source="lastName" label="Nazwisko" />
      <TextInput source="email" label="Email" />

      {/* Hasło (opcjonalnie) - jeśli chcesz edytować */}
      {/* <TextInput source="password" type="password" label="Hasło" /> */}

      <SelectInput
        source="role"
        label="Rola"
        choices={[
          { id: 'ADMIN', name: 'ADMIN' },
          { id: 'TEACHER', name: 'TEACHER' },
          { id: 'STUDENT', name: 'STUDENT' },
          { id: 'PARENT', name: 'PARENT' },
        ]}
      />

      {/* Pola createdAt i updatedAt zwykle nie edytujemy,
          można je jedynie wyświetlać jako disabled */}
      <TextInput disabled source="createdAt" label="Data utworzenia" />
      <TextInput disabled source="updatedAt" label="Data modyfikacji" />
    </SimpleForm>
  </Edit>
);

// ------------------------------------------------------------------
// TWORZENIE UŻYTKOWNIKA
// ------------------------------------------------------------------
export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstName" label="Imię" />
      <TextInput source="lastName" label="Nazwisko" />
      <TextInput source="email" label="Email" />

      {/* Hasło (opcjonalnie) - zwykle przy tworzeniu może być wskazane */}
      <TextInput source="password" type="password" label="Hasło" />

      <SelectInput
        source="role"
        label="Rola"
        choices={[
          { id: 'ADMIN', name: 'ADMIN' },
          { id: 'TEACHER', name: 'TEACHER' },
          { id: 'STUDENT', name: 'STUDENT' },
          { id: 'PARENT', name: 'PARENT' },
        ]}
        defaultValue="STUDENT" // domyślna rola
      />
    </SimpleForm>
  </Create>
);

// ------------------------------------------------------------------
// PODGLĄD UŻYTKOWNIKA
// ------------------------------------------------------------------
export const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" label="ID" />
      <TextField source="firstName" label="Imię" />
      <TextField source="lastName" label="Nazwisko" />
      <EmailField source="email" label="Email" />
      <TextField source="role" label="Rola" />
      <DateField source="createdAt" label="Utworzony" />
      <DateField source="updatedAt" label="Zmodyfikowany" />
    </SimpleShowLayout>
  </Show>
);
