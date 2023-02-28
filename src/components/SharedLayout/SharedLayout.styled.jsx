import styled from 'styled-components';
// import { Container } from 'components/Container/Container';

export const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 84px;
  background: #808080;
  color: #ffffff;
  z-index: 1000;
`;

export const FooterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0 8px;
  height: 100%;
`;

export const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background: #808080;
  color: #ffffff;
  // z-index: 1000;
`;

export const FooterLink = styled.a`
  font-weight: 700;
  color: white;
  text-decoration: none;
  transition: color 250ms linear;
  :hover,
  :focus {
    color: red;
  }
`;