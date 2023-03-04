import { MdSave } from 'react-icons/md';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { FormStyled, Box, FormField, InputName, InputNumber, FormBtn, ErrorStyled,} from './EditForm.styled';
import { BsPersonCircle } from 'react-icons/bs';
import { getRandomHexColor } from 'utils/getRandomHexColor';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

export function EditForm({ onFormSubmit, nameToUpdate, numberToUpdate }) {
  const updateContact = (values) => {
    onFormSubmit(values);
  };

  return (
    <Formik
      onSubmit={updateContact}
      initialValues={{
        name: nameToUpdate,
        number: numberToUpdate,
      }}
      validationSchema={schema}
    >
      <FormStyled>
        <BsPersonCircle size="64" color={getRandomHexColor()} />

        <div
          // display="flex"
          // alignItems="center"
          // justifyContent="space-between"
          // mt={4}
        >
          <Box>
            <FormField>
              <InputName type="text" name="name" placeholder="Name" />
              <ErrorStyled component="div" name="name" />
            </FormField>

            <FormField>
              <Field name="number">
                {({ field }) => (
                  <InputNumber
                    {...field}
                    type="tel"
                    mask="+99 999 999 9999"
                    placeholder="number"
                  />
                )}
              </Field>
              <ErrorStyled component="div" name="number" />
            </FormField>
          </Box>

          <FormBtn type="submit" aria-label="Formtact">
            <MdSave size="40" />
          </FormBtn>
        </div>
      </FormStyled>
    </Formik>
  );
}