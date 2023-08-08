import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const getDepartments = () => {
  return axios.get(`/api/departments`);
};

const departmentServices = {
  getDepartments,
};

export default departmentServices;
