// Router
import ActiveLink from '../../utils/active-link';

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import { Container, ListIcon } from './drawer.styles';

const ResponsiveDrawer = () => {
  return (
    <>
      <Container>
        <ActiveLink href="/">
          <ListIcon><FontAwesomeIcon icon="home" /></ListIcon>
          Beranda
        </ActiveLink>

        <ActiveLink href="/driver-management">
          <ListIcon><FontAwesomeIcon icon="circle-user" /></ListIcon>
          Driver Management
        </ActiveLink>

        <ActiveLink href="/pickup">
          <ListIcon><FontAwesomeIcon icon="calendar" /></ListIcon>
          Pickup
        </ActiveLink>
      </Container>
    </>
  )
}

export default ResponsiveDrawer