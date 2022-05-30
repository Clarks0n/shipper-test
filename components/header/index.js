// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import { HeaderContainer, HeaderUser, HeaderAvatar, HeaderLogo } from './header.styles';

const Header = () => {
  return (
    <>
      <HeaderContainer>  
        <HeaderLogo />
        <HeaderUser>
          <p>Hello, Shipper User</p>
          <HeaderAvatar>
            <FontAwesomeIcon icon="circle-user" />
          </HeaderAvatar>
        </HeaderUser>
      </HeaderContainer>
    </>
  )
}

export default Header