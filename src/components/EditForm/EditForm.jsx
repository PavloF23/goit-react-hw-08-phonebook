import { MdSave } from 'react-icons/md';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { FormEdit, Box, FormField, InputName, InputNumber, FormBtn, Span, ErrorStyled, } from './EditForm.styled';
import { BsPersonCircle } from 'react-icons/bs';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import { selectEditContact } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { editContact} from 'redux/contacts/operation';
// import { getEditingContact } from 'redux/contacts/contactSlice';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

export function EditForm({ onClose }) {
  const dispatch = useDispatch();
  const { name, number, id } = useSelector(selectEditContact);
  const initialValues = {
    name,
    number,
  };

  const handleChangeContact = (values, { resetForm }) => {
    dispatch(editContact({id, ...values }));
    // dispatch(getEditingContact(null));
    onClose();
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleChangeContact}
      validationSchema={schema}
    >
      <FormEdit>
        <BsPersonCircle size="64" color={getRandomHexColor()} />
        <Box>
          <FormField>
            <InputName type="text" name="name" placeholder=" " />
            <Span>Name</Span>
            <ErrorStyled component="div" name="name" />
          </FormField>
          <FormField>
            <Field name="number">
              {({ field }) => (
                <InputNumber
                  {...field}
                  type="tel"
                  mask="+99 999 999 9999"
                  placeholder=" "
                />
              )}
            </Field>
            <Span>Number</Span>
            <ErrorStyled component="div" name="number" />
          </FormField>
        </Box>
        <FormBtn type="submit" aria-label="Formtact">
          <MdSave size="40" />
        </FormBtn>
      </FormEdit>
    </Formik>
  );
}