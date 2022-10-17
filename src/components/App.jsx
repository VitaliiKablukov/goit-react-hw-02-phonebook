import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  onSubmitForm = data => {
    const user = { id: nanoid(), name: data.name, number: data.number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, user],
    }));
  };
  filterInputText = text => {
    const filterText = text.toLowerCase();
    this.setState(() => ({ filter: filterText }));
  };

  onFilter() {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  }
  render() {
    const visbleContacts = this.onFilter();
    return (
      <section>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.onSubmitForm} />
        <h2>Contacts</h2>
        <Filter filterInputText={this.filterInputText} />
        <ContactList visbleContacts={visbleContacts} />
      </section>
    );
  }
}
