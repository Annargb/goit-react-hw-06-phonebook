import { ContactsForm } from './ContactsForm-component/ContactsForm';
import { GlobalStyle } from './GlobalStyle';
import {
  MainTitle,
  Section,
  ContactsTitle,
  Wrapper,
  AccentMainTitle,
} from './App.styled';
import { GroupComponent } from './Group-component/GroupComponent';

export const App = () => {
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
        <GroupComponent />
      </Section>
      <GlobalStyle />
    </Wrapper>
  );
};
