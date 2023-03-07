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

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({ contacts: [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
