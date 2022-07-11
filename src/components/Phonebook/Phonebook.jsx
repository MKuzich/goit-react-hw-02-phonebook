import React from 'react';
import { Section } from '../Section/Section';
import { Contacts } from 'components/Contacts/Contacts';
import { ContactAddForm } from 'components/ContactAddForm/ContactAddForm';

export const Phonebook = ({
  data,
  nameChange,
  contactsChange,
  filterChange,
}) => {
  const { contacts, filter } = data;

  return (
    <>
      <Section title="Phonebook">
        <ContactAddForm
          contacts={contacts}
          nameChange={nameChange}
          contactsChange={contactsChange}
        />
      </Section>
      <Section title="Contacts">
        <Contacts
          contacts={contacts}
          filterChange={filterChange}
          filter={filter}
        />
      </Section>
    </>
  );
};
