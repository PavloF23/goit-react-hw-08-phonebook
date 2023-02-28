import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { FormLogin, Label, Input, LogInBox, Span, Error, Button} from './LoginForm.styled'
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { Formik } from 'formik';

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(7).required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
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
    <FormLogin onSubmit={handleSubmit} autoComplete="off">
      <Label>
      <Span>Email</Span>
        <Input type="email" name="email" />
        <Error component="div" name="number" />
      </Label>
      <Label>
      <Span>Password</Span>
        <Input type="password" name="password" />
        <Error component="div" name="number" />
      </Label>
      <LogInBox>
      <Button type="submit">Log In</Button>
      <span>
        <NavLink  to="/register">Register </NavLink> 
        if you are not registered
      </span>
      </LogInBox>
    </FormLogin>
  </Formik> 
  );
};