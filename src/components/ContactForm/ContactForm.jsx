import { Component } from 'react';

export class ContactForm extends Component {
  state = { name: '', number: '' };
  changeNameNumber = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onSubmit } = this.props;
    const nameUser = e.target.elements.name.value;
    const phoneUser = e.target.elements.number.value;
    this.setState(() => ({
      name: nameUser,
      number: phoneUser,
    }));
    onSubmit(name, number);
    e.target.reset();
  };
  render() {
    return (
      <form onSubmit={this.changeNameNumber}>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label for="number">Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
