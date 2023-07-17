import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const getTaskDetails = () => {
  return axios.get(`/api/employeetasks/`);
};

const EmployeeTaskService = {
  getTaskDetails,
};

export default EmployeeTaskService;
