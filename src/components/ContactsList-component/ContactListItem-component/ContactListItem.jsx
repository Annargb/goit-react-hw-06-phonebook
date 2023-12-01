import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import {
  ContactItem,
  DeleteButton,
  ContactOfPeople,
  PhoneNumber,
  ContactWrapper,
  ContactIcon,
} from './ContactListItem.styled';

export const ContactListItem = ({ contactId, contactName, contactNumber }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <ContactWrapper>
        <ContactIcon />
        <ContactOfPeople>
          {contactName}: <PhoneNumber>{contactNumber}</PhoneNumber>
        </ContactOfPeople>
      </ContactWrapper>
      <DeleteButton
        type="button"
        onClick={() => dispatch(deleteContact(contactId))}
      >
        Delete
      </DeleteButton>
    </ContactItem>
  );
};
