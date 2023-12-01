import { ContactListItem } from './ContactListItem-component/ContactListItem';
import { ListOfContacts } from './ContactsList.styled';

export const ContactsList = ({ contacts }) => {
  return (
    <ListOfContacts>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          contactId={id}
          contactName={name}
          contactNumber={number}
        />
      ))}
    </ListOfContacts>
  );
};
