import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Contact, Button, Box, EditBtn } from './ContactList.styled';
import { AiFillPhone, AiTwotoneDelete } from "react-icons/ai";
import { deleteContact, fetchContacts } from 'redux/contacts/operation';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { useEffect, useState } from "react";
import { BsPersonCircle } from 'react-icons/bs';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import { MdEdit } from 'react-icons/md';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const [showEditForm, setShowEditForm] = useState(false);

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase()))
}

  return (
    <List>
        {contacts.length ? (
         getVisibleContacts().map(({ id, name, number, foto }) => (
          <Item key={id} >
            <Contact>
              <BsPersonCircle size="40" color={getRandomHexColor()} />
              <Box>
                  <span><AiFillPhone/> {name}:</span>
                  <span>{number}</span>
              </Box>
            </Contact>  
            <div>
            <EditBtn type="button" onClick={toggleEditForm} aria-label="Edit contact">
              <MdEdit size="18" /> Edit
            </EditBtn>  
            <Button type='button' onClick={() => dispatch(deleteContact(id))}><AiTwotoneDelete/> Del</Button>
            </div>
          </Item>
          )) ) : (
            <p>Your phonebook is empty. Please add contact.</p>
          )}
          
    </List>        
  );
}