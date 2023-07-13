import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import Form from "react-validation/build/form";

import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";



function DistrictList() {
  const [post, setPost] = useState([]);
 
  const form = useRef();
  const checkBtn = useRef();
  const token = JSON.parse(localStorage.getItem("user")).accessToken
	//const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY4NzkzNTc5NywiZXhwIjoxNjg3OTM3Mzk3fQ.ku9FnNxkfcudG95FIKCfToV5JnMIc0NgFZ1oz_qNvnnzZR_2SpmgO7v6MV-z3td_zGXKC6qjFmVUGWfDBoIeqw'
	//console.log(token)
	
	const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

  console.log(config);
  
const get = () => {
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

/* useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
      console.log(data);
      setPost(data?.data);
    });
  }, []);*/
  
  useEffect(() => {
    axios.post('http://localhost:8084/oicr/districts',{data:'null'},config).then(
            (data) => {
						
                     console.log(data?.data);
					// console.log(data);
					 setPost(data?.data);

            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
  }, []);

  return (
    <div className="col-md-12">
      <div className="card card-container">
        
         <Form  ref={form}>
           <div>
		     <div className="form-group">
				   <label htmlFor="districtname">District</label>
		<select
            disabled={false}
            //value={post}
            onChange={(e) => setPost(e.currentTarget.value)}
        >
            {post.map((item,i) => {
            return (<option key={i} value={item?.id}>{item?.districtname}</option>);
			})}
        </select>
			 </div>
		   
		     </div>
      

        <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
  
};


export default DistrictList;
