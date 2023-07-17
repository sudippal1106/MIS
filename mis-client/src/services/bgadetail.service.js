import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const getBgaDetails = () => {
  return axios.get(`/api/bgadetails/`);
};

const createBga = (payload) => {
  return axios.post(`/api/bgadetails/`, payload);
};

const bgadetailService = {
  getBgaDetails,
  createBga,
};

export default bgadetailService;
