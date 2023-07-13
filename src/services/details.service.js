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
  return axios.post(API_URL + "addpoloffdetails", { name:data.name,rank:data.rank,department:data.department,mobileno:data.mobileno,email:data.email,landlineno:data.landlineno,stateid:data.stateid,district:data.district,policestation:data.policestation}, config)
 };



const DetailsDataService = {
  create,
  
}

export default DetailsDataService;
