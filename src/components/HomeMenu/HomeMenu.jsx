import { HomeMenuWrap, HomeLink, ButtonLink } from './HomeMenu.styled';
// import { } from 'components/Button/Button.styled';

export function HomeMenu() {
  return (
    <HomeMenuWrap>
      <HomeLink to="/">Phonebook</HomeLink>
      <ButtonLink to="/login">in login</ButtonLink>
    </HomeMenuWrap>
  );
}