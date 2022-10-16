import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  onSubmitForm = (nameUser, phoneUser) => {
    const user = { id: nanoid(), name: nameUser, number: phoneUser };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, user],
    }));
  };
  filterInputText = event => {
    const filterText = event.target.value.toLowerCase();
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
        <input type="text" name="filter" onChange={this.filterInputText} />
        <ul>
          {visbleContacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name}: {number}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
