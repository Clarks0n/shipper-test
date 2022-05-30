// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import { Container, DriverHeaderTitle, DriverHeaderContainer, DriverHeaderButton, DriverHeaderSearch } from './driverHeader.styles';

const DriverHeader = ({onTyping}) => {
  return (
    <>
      <Container>
        <DriverHeaderTitle>
          <h1>Driver Management</h1>
          <p>Data driver yang bekerja sama dengan Anda</p>
        </DriverHeaderTitle>
        <DriverHeaderContainer>
          <DriverHeaderSearch>
            <input type="text" placeholder="Cari Driver" onChange={(e) => onTyping(e.target.value)} />
            <FontAwesomeIcon icon="search" />
          </DriverHeaderSearch>
          <DriverHeaderButton>
              <button type='button'>
              TAMBAH DRIVER
              <FontAwesomeIcon icon="plus" />
              </button>
          </DriverHeaderButton>
        </DriverHeaderContainer>
      </Container>
    </>
  )
}

export default DriverHeader