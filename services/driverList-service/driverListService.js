import http from "../http-common";

// getDriver
const getDriverList = () => {
  return http.get('?results=30')
};

const DriverListService = {
  getDriverList
};

export default DriverListService;
