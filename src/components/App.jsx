import { ContactsForm } from './ContactsForm-component/ContactsForm';
import { ContactsList } from './ContactsList-component/ContactsList';
import { Filter } from './Filter-component/Filter';
import { GlobalStyle } from './GlobalStyle';
import {
  MainTitle,
  Section,
  ContactsTitle,
  Wrapper,
  AccentMainTitle,
} from './App.styled';
import { InfoMessage } from './InfoMessage-component/InfoMessage';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

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
          <ContactsList contacts={visibleContacts} />
        </>
      );
    }
  };

  return (
    <Wrapper>
      <Section>
        <MainTitle>
          Phone<AccentMainTitle>book</AccentMainTitle>
        </MainTitle>
        <ContactsForm />
      </Section>
      <Section>
        <ContactsTitle>Contacts</ContactsTitle>
        {variantOfText()}
      </Section>
      <GlobalStyle />
    </Wrapper>
  );
};
