import { Phonebook } from './Phonebook/Phonebook';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  filterChange = e => {
    this.setState({ filter: e.target.value });
  };

  nameChange = (name, number) => {
    this.setState({ name: name, number: number });
  };

  contactsChange = () => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: prevState.name, number: prevState.number, id: nanoid() },
      ],
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <Phonebook
        data={this.state}
        nameChange={this.nameChange}
        contactsChange={this.contactsChange}
        filterChange={this.filterChange}
      ></Phonebook>
    );
  }
}
