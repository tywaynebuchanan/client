import axios from "axios";

const token = localStorage.getItem("token");
const axiosInstance = axios.create({
  headers: {
    "Authorization": `Bearer ${token}`,
  },
  baseUrL:"https://brynks-api.vercel.app"
});

export default axiosInstance;