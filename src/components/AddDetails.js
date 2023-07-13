import React, { useState } from "react";
import DetailsDataService from "../services/details.service";
import axios from "axios";


const AddDetails = () => {
	
	const initialDetailsState = {
	id: null,
	name: "",
	rank: "",
	department: "",
	email: "",
	mobileno: "",
	landlineno: "",
	stateid: "",
	district: "",
	policestation: "",
    published: false
	
  };
  const [tutorial, setTutorial] = useState(initialDetailsState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };
 
  
  const saveTutorial = () => {
    var data = {
	  name: tutorial.name,
	  rank: tutorial.rank,
	  department: tutorial.department,
	  email: tutorial.email,
	  mobileno: tutorial.mobileno,
	  landlineno: tutorial.landlineno,
	  stateid: tutorial.stateid,
	  district: tutorial.district,
	  policestation: tutorial.policestation,
     };

    DetailsDataService.create(data)
      .then(response => {
		  console.log(response);
        setTutorial({
          id: response.data.id,
		  name: response.data.name,
		  rank: response.data.rank,
		  department: response.data.department,
		  email: response.data.email,
		  mobileno: response.data.mobileno,
		  landlineno: response.data.landlineno,
		  stateid: response.data.stateid,
		  district: response.data.district,
		  policestation: response.data.policestation,
		 
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialDetailsState);
    setSubmitted(false);
  };

  return (
     <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
	  
	  
	  <div>
		
		
		<div className="container">
        <div className="row">
		<div className="col-md-6">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={tutorial.name}
              onChange={handleInputChange}
              name="name"
            />
			
		  </div>
		  </div>
		  
		 <div className="col-md-6"> 
          <div className="form-group">
            <label htmlFor="rank">Rank</label>
            <input
              type="text"
              className="form-control"
              id="rank"
              required
              value={tutorial.rank}
              onChange={handleInputChange}
              name="rank"
            />
          </div>
		  </div>
		  </div>
		  </div>
		  
		<div className="container">
        <div className="row">
		  <div className="col-md-6"> 
		  <div className="form-group">
            <label htmlFor="department">Department/Organization</label>
            <input
              type="text"
              className="form-control"
              id="department"
              required
              value={tutorial.department}
              onChange={handleInputChange}
              name="department"
            />
          </div>
		  </div>
		 
        <div className="col-md-6">   		 
		<div className="form-group">
			  <label htmlFor="mobileno">Mobile No</label>
				  <input
					type="text"
					className="form-control"
					id="mobileno"
					required
					maxLength="10"
					value={tutorial.mobileno}
					onChange={handleInputChange}
					name="mobileno"
					 />
		</div>	
		</div>
		</div>
		</div>
		

        <div className="container">
        <div className="row">		
	    <div className="col-md-6">   
		<div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
				  id="email"
				  required
                  value={tutorial.email}
                  onChange={handleInputChange}
				  name="email"
            />
			
		</div>
		</div>
		
		<div className="col-md-6">   		 
		<div className="form-group">
			  <label htmlFor="landlineno">Official Landline No.</label>
				  <input
					type="text"
					className="form-control"
					id="landlineno"
					required
					value={tutorial.landlineno}
					onChange={handleInputChange}
					name="landlineno"
					 />
		</div>	
		</div>
		</div>
		</div>
		
		 <div className="container">
        <div className="row">
		<div className="col-md-6">   	
		<div className="form-group">
				   <label htmlFor="stateid">State</label>
				   <select className="form-control" value={tutorial.stateid} name="stateid" onChange={handleInputChange}  required >
				   <option value="" disabled selected>Choose State</option>
				   <option value="0">Andhra Pradesh</option>
				   <option value="1">Arunachal Pradesh</option>
				   <option value="2">Assam</option>
				   <option value="3">Bihar</option>
				   <option value="4">Chhattisgarh</option>
				   <option value="5">Goa</option>
				   <option value="6">Gujarat</option>
				   <option value="7">Haryana</option>
				   <option value="8">Himachal Pradesh</option>
				   <option value="9">Jammu and Kashmir</option>
				   <option value="10">Jharkhand</option>
				   <option value="11">Karnataka</option>
				   <option value="12">Kerala</option>
				   <option value="13">Madhya Pradesh</option>
				   <option value="14">Maharashtra</option>
				   <option value="15">Manipur</option>
				   <option value="16">Meghalaya</option>
				   <option value="17">Mizoram</option>
				   <option value="18">Nagaland</option>
				   <option value="19">Odisha</option>
				   <option value="20">Punjab</option>
				   <option value="21">Rajasthan</option>
				   <option value="22">Sikkim</option>
				   <option value="23">Tamil Nadu</option>
				   <option value="24">Telangana</option>
				   <option value="25">Tripura</option>
				   <option value="26">Uttar Pradesh</option>
				   <option value="27">Uttarakhand</option>
				   <option value="28">West Bengal</option>
			   </select>
			 </div>
			 </div>
			 
			 <div className="col-md-6">   	
			  <div className="form-group">
                <label htmlFor="district">District</label>
                <input
                  type="text"
                  className="form-control"
				  id="district"
				  required
                  value={tutorial.district}
				  name="district"
				  onChange={handleInputChange}
				  />
              </div>
			  </div>
			  </div>
			  </div>
			  
			  <div className="col-md-6">   	
			  <div className="form-group">
                <label htmlFor="policestation">Police Station</label>
                <input
                  type="text"
                  className="form-control"
				  id="policestation"
				  required
                  value={tutorial.policestation}
				  name="policestation"
				  onChange={handleInputChange}
                  />
              </div>
			  </div>
			  
			  <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
		    </div>
		 
      )}
    </div>
	
	
  );
};

export default AddDetails;