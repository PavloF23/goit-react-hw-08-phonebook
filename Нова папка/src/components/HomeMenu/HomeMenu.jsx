import { HomeMenuWrap, HomeLink, ButtonLink } from './HomeMenu.styled';

export function HomeMenu() {
  return (
    <HomeMenuWrap>
      <HomeLink to="/">Phonebook</HomeLink>
      <ButtonLink to="/login">in login</ButtonLink>
    </HomeMenuWrap>
  );
}