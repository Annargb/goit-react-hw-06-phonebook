import { useSelector } from 'react-redux';
import { ContactListItem } from './ContactListItem-component/ContactListItem';
import { ListOfContacts } from './ContactsList.styled';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ListOfContacts>
      {visibleContacts.map(({ id, name, number }) => (
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
