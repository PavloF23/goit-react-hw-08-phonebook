import styled from 'styled-components';

export const UserMenuWrap = styled.div`
  width: 500px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  align-items: center;
`;

export const LoginBox = styled.div`
  margin-right: 10px;
`;

export const Name = styled.h4`
  text-transform: capitalize;
  text-align: left;
  font-size: 20px;
  margin: 0;
  color: #000;
`;

export const Email = styled.p`
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  color: #000;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 4px 8px;
  font-size: 30px;
  font-weight: 700;
  height: 35px;
  border-radius: 4px;
  border: none;
  background-color: #808080;
  transition: background-color 250ms linear;
  
  &:hover,
  &:focus {
    background-color: red;
  }
`;