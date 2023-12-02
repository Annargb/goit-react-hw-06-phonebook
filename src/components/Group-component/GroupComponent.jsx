import { ContactsList } from 'components/ContactsList-component/ContactsList';
import { Filter } from 'components/Filter-component/Filter';
import { InfoMessage } from 'components/InfoMessage-component/InfoMessage';
import { useSelector } from 'react-redux';
import { getContacts, selectVisibleContacts } from 'redux/selectors';

export const GroupComponent = () => {
  const contacts = useSelector(getContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  const variantOfText = () => {
    if (!contacts.length) {
      return (
        <InfoMessage text="There are no contacts here 😲" $variant="primary" />
      );
    } else if (contacts.length && !visibleContacts.length) {
      return (
        <>
          <Filter />
          <InfoMessage
            text="Sorry, we didn't find any contacts for this request 😢"
            $variant="secondary"
          />
        </>
      );
    } else {
      return (
        <>
          <Filter />
          <ContactsList />
        </>
      );
    }
  };

  return variantOfText();
};
