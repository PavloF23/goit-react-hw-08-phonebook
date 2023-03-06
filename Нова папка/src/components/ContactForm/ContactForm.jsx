import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormContact, ContactBox, Label, Span, Input, InputNumber, Button, Error } from './ContactForm.styled';
import { addContact } from 'redux/contacts/operation';
import toast from 'react-hot-toast';
import { getContacts } from "redux/contacts/selectors";


export function ContactForm() {
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      ...values,
    };
    if (
      contacts.find(
        ({ name }) =>
          name.toLowerCase() === newContact.name.trim().toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in your contacts.`);
      resetForm();
      return;
    }
    dispatch(addContact(newContact));
    resetForm();
  };

  const notify = () => toast.error('Name may contain only letters, apostrophe, dash and spaces.');

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        // 'only letters.'
        notify
      )
      .required('Write name, please'),
    number: Yup.string()
      .matches(
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
        'Phone number must be digits'
      )
      .required('This field is required'),
  });  

    return (
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormContact autoComplete="off">
        <ContactBox>
        <Label>          
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder=" "
          />
          <Span>Name</Span>
          <Error component="div" name="name" />
        </Label>        
        <Label>           
          <Input  name="number">
          {({ field }) => (  
            <InputNumber 
           {...field}     
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder=" "
            mask="+99 999 999 9999"
          />
          )}
          </Input>
          <Span>Number</Span>
          <Error component="div" name="number" />
        </Label>
        </ContactBox>
        <Button type="submit">Add contact</Button>
      </FormContact>
      </Formik>
    );
  }