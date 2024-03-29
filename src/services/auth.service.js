import axios from "axios";

//const API_URL = "https://api.jhpolice.gov.in/api/auth/";
const API_URL = "http://localhost:8084/api/auth/";

const register = (username, email, password, roles, stateid, districtname, contactno) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
	roles,
	stateid,
	districtname,
	contactno,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
	  console.log(response.data)
/*if (response.data.accesstoken) {
        localStorage.setItem("accesstoken", JSON.stringify(response.data));
      }*/
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};





const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
 
 }

export default AuthService;
