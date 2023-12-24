import { useEffect } from 'react';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';

import {
  getContactAction,
  postContactAction,
  deleteContactAction,
} from '../../redux/contacts/operations';
import { setFilter } from '../../redux/contacts/contactsSlice';
// import { postContact, deleteContact } from 'contacts-api';

import { AddContactForm } from '../AddContactForm/AddContactForm';
import { Filter } from '../Filter/Filter';
import { Bars } from 'react-loader-spinner';
import { ContactList } from '../ContactList/ContactList';

import { Wrapper, Title } from './Phonebook.styled';

export function Phonebook() {
  const { contacts, isLoading, error, filter } = useSelector(
    state => state.phonebook
  );
  const dispatch = useDispatch();

  console.log(contacts);

  useEffect(() => {
    dispatch(getContactAction());
  }, [dispatch]);

  const findContact = contact => {
    return contacts.find(item => item.name === contact.name);
  };

  const handleAddContact = contact => {
    if (findContact(contact)) {
      return alert(`${contact.name} is already in contacts.`);
    }
    contact['id'] = nanoid();

    dispatch(postContactAction(contact));
  };

  const handleRemoveContact = contactId => {
    dispatch(deleteContactAction(contactId));
  };

  const visibleContacts = contacts.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  visibleContacts.sort((prev, next) => prev.name.localeCompare(next.name));

  console.log(error);

  return (
    <Wrapper>
      {error && <h1>{error.message}</h1>}
      <Title>Phonebook</Title>

      <AddContactForm onSubmit={handleAddContact} />

      <Title>Contacts</Title>

      <Filter value={filter} handler={value => dispatch(setFilter(value))} />
      <Bars visible={isLoading} />
      {contacts.length !== 0 && (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={handleRemoveContact}
        />
      )}
    </Wrapper>
  );
}
