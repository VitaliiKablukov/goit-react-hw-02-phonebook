import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  onSubmitForm = event => {
    event.preventDefault();
    const nameUser = event.target.elements.name.value;

    this.setState(prevState => ({
      contacts: [
        {
          id: nanoid(),
          name: nameUser,
        },
      ],
    }));
    console.log(this.state);
    event.target.reset();
  };
  render() {
    const { contacts } = this.state;
    return (
      <section>
        <h2>Phonebook</h2>
        <form onSubmit={this.onSubmitForm} action="">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(el => {
            return <li key={el.id}>{el.name}</li>;
          })}
        </ul>
      </section>
    );
  }
}
