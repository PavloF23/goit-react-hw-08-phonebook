import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const FormContact = styled(Form)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  width: 500px;
  padding: 20px 40px;
  position: fixed;
  z-index: 1;
  top: 80px;
  background-color: #fff5ee; 
  margin-left: -40px;
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  position: relative;
  display: block;
  width: 300px;
  height: 10px;
  margin-bottom: 35px;
  color: #000;
  font-size: 18px;

  & input:focus ~ span,
  & input:not(:placeholder-shown) ~ span{
    transform: translateX(-10px) translateY(-25px);
    font-size: 10px;
  }
`;

export const Input = styled(Field)`
position: absolute;
top: 0;
left: 0;
width: 100%;
border: 2px solid rgba(33, 33, 33, 0.2);
color: #000;
outline: none;
background: #fff;
padding: 6px;
border-radius: 10px;
font-size: 14px;

&:focus,
&:not(:placeholder-shown) {
    border-color: #010101;
    outline-color: rgba(33, 33, 33, 0.5);
  }
`;

export const InputNumber = styled(InputMask)`
position: absolute;
top: 0;
left: 0;
width: 100%;
border: 2px solid rgba(33, 33, 33, 0.2);
color: #000;
outline: none;
background: #fff;
padding: 6px;
border-radius: 10px;
font-size: 14px;

&:focus,
&:not(:placeholder-shown) {
    border-color: #010101;
    outline-color: rgba(33, 33, 33, 0.5);
  }
`;

export const Span = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 14px;
  transition: 0.6s;
  color: #5793aad2;
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.2s;
  background-color: #daddc0;
  border: 2px solid rgba(33, 33, 33, 0.2);
  margin-bottom: 20px;

  :hover,
  :focus {
    background-color: rgb(207, 207, 207);
  }
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: -35px;
  left: 45px;
  font-size: 12px;
  color: #ff4500;
`;