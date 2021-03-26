import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import route from '../../rotes/routes';
import Container from '../../Components/Container/Container';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Filter from '../../Components/Filter/Filter';
import Contacts from '../../Components/Contacts/Contacts';
import style from './Contacts.module.css';
import { getTokenValue } from '../../redux/selectors/contacts-selectors';

const ContactsPage = () => {
  const history = useHistory();
  const token = useSelector(state => getTokenValue(state));

  useEffect(() => {
    token ? history.push(route.contacts) : history.push(route.home);
  }, [token]);
  return (
    <Container>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.title}>Contacts:</h2>
      <Filter />
      <Contacts />
    </Container>
  );
};

export default ContactsPage;
