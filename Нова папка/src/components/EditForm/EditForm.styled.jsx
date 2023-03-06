import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import InputMask from 'react-input-mask';

export const FormEdit = styled(Form)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  width: 500px;
  padding: 20px 40px;
  z-index: 1;
  top: 50%;
  background-color: #fff5ee; 
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 250px;
`;

export const FormField = styled.label`
  position: relative;
  display: block;
  width: 100%;
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

export const InputName = styled(Field)`
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

export const FormBtn = styled.button`
  cursor: pointer;
  padding: 4px 8px;
  font-size: 30px;
  border-radius: 4px;
  border: none;
  background-color: #fff5ee;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #808080;
  }
`;

export const ErrorStyled = styled(ErrorMessage)`
  position: absolute;
  bottom: 0;
  transform: translatey(100%);
  font-size: 10px;
  background-color: white;
  color: #212121;
`;