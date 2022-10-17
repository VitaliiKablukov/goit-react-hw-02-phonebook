export const ContactItem = ({ visbleContacts }) => {
  return visbleContacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}: {number}
      </li>
    );
  });
};
