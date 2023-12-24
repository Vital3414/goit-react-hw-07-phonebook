import React from 'react';
import { Contact } from 'components/Contact/Contact';
import { List, ListItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              onDelete={onDeleteContact}
            />
          </ListItem>
        );
      })}
    </List>
  );
};
