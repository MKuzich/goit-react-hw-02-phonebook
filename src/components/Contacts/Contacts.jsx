import React from 'react';
import styles from './Contacts.module.css';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, filter, deleteContact }) => {
  return (
    <>
      <ul className={styles.list}>
        {contacts.map(contact => {
          return (
            contact.name.toLowerCase().includes(filter.toLowerCase()) && (
              <li className={styles.contact} key={contact.id}>
                {contact.name}: {contact.number}
                <button
                  className={styles.btn}
                  type="button"
                  onClick={deleteContact}
                  id={contact.id}
                >
                  Delete
                </button>
              </li>
            )
          );
        })}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string,
};