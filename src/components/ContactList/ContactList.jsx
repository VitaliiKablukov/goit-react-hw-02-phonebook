import { ContactItem } from './ContactItem/ContactItem';

export const ContactList = ({ visbleContacts }) => {
  return (
    <ul>
      <ContactItem visbleContacts={visbleContacts} />
    </ul>
  );
};
