import React , { useEffect, useState } from 'react';

// Component
import DriverHeader from '../../components/driver-header';
import DriverCard from '../../components/driver-card';

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Actions
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getDriverList, clearState } from '../../store/slices/driverList';

// Styles
import { PageBody, PagePagination } from '../../styles/driver.styles';


// Helper
import moment from 'moment';

const DriverManagement = () => {
  const dispatch = useDispatch();

  const [dataSource, isSuccess] = useSelector((state) => [
    state.driverListSlice.dataSource,
    state.driverListSlice.isSuccess
  ],shallowEqual);

  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const driverPerPage = 5;
  const numberOfdriver = page * driverPerPage;
  const totalPages = Math.ceil(dataSource.length / driverPerPage);

  useEffect(() => {
    dispatch(getDriverList());
  
    return () => {
      dispatch(clearState());
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayEmployees = dataSource
    .slice(
      numberOfdriver,
      numberOfdriver + driverPerPage
    )
    .map((item, i) => {
      return (
        <DriverCard key={i}
          id={item.login.salt}
          name={item.name.first +" " + item.name.last}
          telephone={item.phone}
          email={item.email}
          dob={moment(item.dob.date).format('DD-MMM-yyyy')}
        />
      );
    }
  );

  const displaySearched = searchResults
    .map((item, i) => {
      return (
        <DriverCard key={i}
          id={item.login.salt}
          name={item.name.first +" " + item.name.last}
          email={item.email}
          dob={moment(item.dob.date).format('DD-MMM-yyyy')}
        />
      );
    }
  );

  const onPreviousClick = () => {
    setPage(page - 1);
  };

  const onNextClick = () =>  {
   setPage(page + 1);
  };

  const onTyping = (value) => {
    setSearchTerm(value);

    const results = dataSource
    .filter((item) => {
       return item.name.first.toLowerCase().includes(value)
    });

    setSearchResults(results);
  };

  if(isSuccess)
  return (
    <>
      <DriverHeader onTyping={onTyping} />
      <PageBody>
        {searchTerm === "" ? displayEmployees : displaySearched }
      </PageBody>

      <PagePagination>
        { page === 0 ? (
            <span className="disabled"><FontAwesomeIcon icon="angle-left" />Previous Page</span>
          ) : (
            <span onClick={onPreviousClick}><FontAwesomeIcon icon="angle-left" />Previous Page</span>
          )
        }
        {
          page === totalPages - 1 ? (
            <span className="disabled">Next Page<FontAwesomeIcon icon="angle-right" /></span>
          ) : (
            <span onClick={onNextClick}>Next Page <FontAwesomeIcon icon="angle-right" /></span>
          )
        }
      </PagePagination>
    </>
  )
  return (
    <p>Loading</p>
  )
}
<FontAwesomeIcon icon="fa-solid fa-angle-right" />

export default DriverManagement