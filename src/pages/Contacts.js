import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container }  from '../components/Container/Container';
// import { AppStyle } from './App.styled';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
// import { Filter } from '../components/Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { getIsLoading, getError } from "redux/contacts/selectors";
// import { useSelector } from 'react-redux';
import  Loader  from  '../components/Loader/Loader'
import { fetchContacts } from 'redux/contacts/operation';
// import { selectLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        {/* <h1>Phonebook</h1> */}
        <ContactForm/>   
        <Toaster position="top-center" reverseOrder={false}/>  
        {/* <h2>Contacts</h2> */}
        {isLoading && !error && <Loader/>}
        <ContactList/>      
      </Container>
    </>
  );
}