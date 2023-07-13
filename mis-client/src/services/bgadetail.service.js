import axios from "axios";


const getBgaDetails = () => {
  return axios.get(`/api/bgadetails/`);
};

const createBga = () => {
  console.log("check createBGA")
  return axios.post(`/api/bgadetails/`);
};


const bgadetailService = {
  getBgaDetails,
  createBga

};

export default bgadetailService;
