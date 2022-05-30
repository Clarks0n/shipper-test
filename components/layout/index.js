// Component
import Header from '../header';
import ResponsiveDrawer from '../drawer';

// Styles
import { Container, ContentBody, ContentBlock} from './layout.styles';

const Layout = ({children}) => {
  return (
    <>
      <Container>
        <Header />
        <ContentBlock>
          <ResponsiveDrawer />
            <ContentBody>
              {children}
            </ContentBody>
        </ContentBlock>
      </Container>
    </>
  )
}

export default Layout