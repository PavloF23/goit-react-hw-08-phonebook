import { UserMenuWrap, Name, Email, UserBox, LoginBox, Button } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { Filter } from 'components/Filter/Filter';
import { ImExit } from 'react-icons/im';
import { selectUserName, selectUserEmail, selectIsCheckingLogin } from 'redux/auth/auth-selector';

export function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const isCheckingLogin = useSelector(selectIsCheckingLogin);

  return (
    <UserMenuWrap>
      <Filter />
      <UserBox>
        <LoginBox>
          <Name>{userName}</Name>
          <Email>{userEmail}</Email>
        </LoginBox>
        <Button
          type="button"
          onClick={() => dispatch(logOut())}
          disabled={isCheckingLogin}
        >
          {/* Logout */}
          <ImExit />
        </Button>
      </UserBox>
      
    </UserMenuWrap>
  );
}