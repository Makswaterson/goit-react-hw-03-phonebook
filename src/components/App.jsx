import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppStyled } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onHandleSubmit = (data, { resetForm }) => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts!`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    resetForm();
  };
  onDeleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  onHandleFilter = evt => {
    this.setState({ filter: evt.target.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const { onHandleSubmit, onHandleFilter } = this;
    const visibleContacts = this.getVisibleContacts();

    return (
      <AppStyled>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onHandleSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={onHandleFilter} />
        {contacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onDelete={this.onDeleteContacts}
          />
        )}
      </AppStyled>
    );
  }
}
