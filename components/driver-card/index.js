// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles
import { Card, CardHead, CardHeadInfo , CardBody , CardBodyIcon, CardBodyList} from './driverCard.styles';

const DriverCard = ({id,name,telephone,email,dob}) => {
  return (
    <Card>
      <CardHead>
        <CardHeadInfo>
          <span>Driver ID </span>
          <span>{id}</span>
        </CardHeadInfo>
        <FontAwesomeIcon icon="ellipsis-h" />
      </CardHead>

      <CardBody>
        <CardBodyIcon>
          <FontAwesomeIcon icon="user-circle"  />
        </CardBodyIcon>
        <CardBodyList>
          <p>Nama Driver</p>
          <p>{name}</p>
        </CardBodyList>
        <CardBodyList>
          <p>Telepon</p>
          <p>{telephone}</p>
        </CardBodyList>
        <CardBodyList>
          <p>Email</p>
          <p>{email}</p>
        </CardBodyList>
        <CardBodyList>
          <p>Tanggal Lahir</p>
          <p>{dob}</p>
        </CardBodyList>
      </CardBody>
    </Card>
  )
}

export default DriverCard