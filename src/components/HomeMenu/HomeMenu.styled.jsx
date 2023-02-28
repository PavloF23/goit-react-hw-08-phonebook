import styled from 'styled-components';
// import { Container } from 'components/Container/Container';
import { NavLink } from 'react-router-dom';

export const HomeLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color: #169d7d;
  transition: color 250ms linear;
  :hover {
    color: #ffcc00;
  }
`;

export const HomeMenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  align-items: center;
  padding: 0 8px;
  height: 100%;
  background-color: #fff5ee;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonLink = styled(NavLink)`
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