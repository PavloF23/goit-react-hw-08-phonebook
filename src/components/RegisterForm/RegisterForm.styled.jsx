import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormRegister = styled(Form)`
    width: 320px;

    
    margin-top: 90px;
    margin-left: auto;
    margin-right: auto;
`;  

export const Input = styled(Field)`
position: absolute;
top: 20px;
left: 0;
width: 100%;
border: 2px solid rgba(33, 33, 33, 0.2);
color: #000;
outline: none;
background: #fff;
padding: 6px;
border-radius: 10px;
font-size: 15px;

&:focus,
&:not(:placeholder-shown) {
    border-color: #010101;
    outline-color: rgba(33, 33, 33, 0.5);
  }
`;
  
export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

export const Span = styled.span`
position: absolute;
top: 0px;
left: 0px;
font-size: 14px;
transition: 0.6s;
color: #5793aad2;
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: -50px;
  left: 15px;
  font-size: 12px;
  color: #ff4500;
`;

export const Button = styled.button`
cursor: pointer;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 4px;
  border: none;
  background-color: #daddc0;
  transition: background-color 250ms linear;
  text-decoration: none;
  color: #212121;
  border: 2px solid rgba(33, 33, 33, 0.2);
  
  :hover,
  :focus {
    background-color: rgb(207, 207, 207);
  }
`;