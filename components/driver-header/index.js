// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import { Container, DriverHeaderTitle, DriverHeaderContainer, Wrapper, DriverHeaderSearch } from './driverHeader.styles';

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
              <button type='button'>
              TAMBAH DRIVER
              <FontAwesomeIcon icon="plus" />
              </button>
        </DriverHeaderContainer>
      </Container>
    </>
  )
}

export default DriverHeader