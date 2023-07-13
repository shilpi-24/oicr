import axios from "axios";

const API_URL = "http://localhost:8084/oicr/";

const get = () => {
	
	const token = JSON.parse(localStorage.getItem("user")).accessToken
		console.log(token)
	
	const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
        axios.get("http://localhost:8084/api/auth/signin", config).then(
            (data) => {
                        
                   console.log(data);

            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }

const create = (data) => {
	const token = JSON.parse(localStorage.getItem("user")).accessToken
		console.log(token)
	
	const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

  console.log(config);
  return axios.post(API_URL + "adddist", { districtname:data.districtname,stateid:data.statename}, config)
 };



const DistrictDataService = {
  create,
  
}

export default DistrictDataService;
