import React from 'react';
import { Wrapper, ContactInfo, DeleteBtn } from './Contact.styled';

export function Contact({ id, name, number, onDelete }) {
  return (
    <Wrapper>
      <ContactInfo>
        <span>{name} :</span>
        <span>{number}</span>
      </ContactInfo>
      <DeleteBtn type="button" onClick={() => onDelete(id)}>
        Delete
      </DeleteBtn>
    </Wrapper>
  );
}
