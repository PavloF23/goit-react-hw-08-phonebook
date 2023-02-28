import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { FormRegister, Label, Input, Button, Span} from './RegisterForm.styled'
import * as yup from 'yup';
import { Formik } from 'formik';
import { selectIsCheckingLogin } from 'redux/auth/auth-selector';

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(7).required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isCheckingLogin = useSelector(selectIsCheckingLogin);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
    onSubmit={handleSubmit}
    initialValues={{
      name: '',
      email: '',
      password: '',
    }}
    validationSchema={schema}
  >
    <FormRegister autoComplete="off">
      <Label>
        <Span>Username</Span>
        <Input type="text" name="name" />
      </Label>
      <Label>
        <Span>Email</Span>
        <Input type="email" name="email" />
      </Label>
      <Label>
        <Span>Password</Span>
        <Input type="password" name="password" />
      </Label>
      <Button type="submit" disabled={isCheckingLogin}>Register</Button>
    </FormRegister>
  </Formik>
  );
};