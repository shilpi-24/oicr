import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {isInt } from "validator";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    rank: '',
    department: '',
    mobileno: '',
    email: '',
    landlineno: '',
    stateid: '',
    district: '',
    policestation: ''
});

  const [errors, setErrors] = useState({});
   const [successMessage, setSuccessMessage] = useState('');
  
useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => {
        setSuccessMessage(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [successMessage]);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    // Get the access token from wherever you have stored it
    const accessToken = JSON.parse(localStorage.getItem("user")).accessToken;

    // Set the headers with the access token
    const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    };

    // Submit the form data using Axios with the headers
    axios.post('http://localhost:8084/oicr/addpoloffdetails', formData, { headers })
      .then((response) => {
        // Handle the response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
	  
	// Clear form inputs
    setFormData({
     name: '',
     rank: '',
     department: '',
     mobileno: '',
     email: '',
     landlineno: '',
     stateid: '',
     district: '',
     policestation: ''
    });
	 // Display success message
    setSuccessMessage('Form submitted successfully!');
  }
  
};
  
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validate each field
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
	
	if (!formData.rank.trim()) {
      errors.rank = 'Rank is required';
      isValid = false;
    }

    if (!formData.department.trim()) {
      errors.department = 'Department is required';
      isValid = false;
    }

    if (!formData.mobileno.trim()) {
      errors.mobileno = 'Mobile No. is required';
      isValid = false;
    } else if ( !isInt(formData.mobileno.trim()) && formData.mobileno.trim().length <= 10) {
		errors.mobileno = 'The contactno is not valid.';
      isValid = false;
	}
	else if(formData.mobileno.trim().length < 10) {
		errors.mobileno = 'The contactno must be 10 characters.';
      isValid = false;
	}
	
	if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    }
	
	if (!formData.landlineno.trim()) {
      errors.landlineno = 'Official Landline No. is required';
      isValid = false;
    }
	else if ( !isInt(formData.landlineno.trim()) && formData.landlineno.trim().length <= 10) {
		errors.landlineno = 'The Official Landline No. is not valid.';
      isValid = false;
	}
	
	if (!formData.stateid.trim()) {
      errors.stateid = 'stateid is required';
      isValid = false;
    }
	
	if (!formData.district.trim()) {
      errors.district = 'District is required';
      isValid = false;
    }
	
	if (!formData.policestation.trim()) {
      errors.policestation = 'Polise Station is required';
      isValid = false;
    }
	
	// ... add validation for other fields

    setErrors(errors);
    return isValid;
  };
  
   return (
  <div>
      
    <form onSubmit={handleSubmit}>
	
	<div className="container">
    <div className="row">
	  <div className="col-md-6">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          className={`form-control ${errors.name && 'is-invalid'}`}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>
	  </div>
	
	  <div className="col-md-6">
	    <div className="form-group">
        <label>Rank:</label>
        <input
          type="text"
          className={`form-control ${errors.rank && 'is-invalid'}`}
          name="rank"
          value={formData.rank}
          onChange={handleChange}
        />
        {errors.rank && <div className="invalid-feedback">{errors.rank}</div>}
      </div>
	  </div>
	</div>
    </div>	
	
	<div className="container">
    <div className="row">
	 <div className="col-md-6">
	   <div className="form-group">
        <label>Department/Organization:</label>
        <input
          type="text"
          className={`form-control ${errors.department && 'is-invalid'}`}
          name="department"
          value={formData.department}
          onChange={handleChange}
        />
        {errors.department && <div className="invalid-feedback">{errors.department}</div>}
      </div>
	  </div>
	  
      <div className="col-md-6">
      <div className="form-group">
        <label>Mobile Number:</label>
        <input
          type="text"
          className={`form-control ${errors.mobileno && 'is-invalid'}`}
          name="mobileno"
		  maxLength="10"
          value={formData.mobileno}
          onChange={handleChange}
        />
        {errors.mobileno && <div className="invalid-feedback">{errors.mobileno}</div>}
      </div>
	  </div>
	  </div>
	  </div>
	  
	  <div className="container">
    <div className="row">
	 <div className="col-md-6">
	   <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className={`form-control ${errors.email && 'is-invalid'}`}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
	  </div>
	  
      <div className="col-md-6">
      <div className="form-group">
        <label>Official Landline No.:</label>
        <input
          type="text"
          className={`form-control ${errors.landlineno && 'is-invalid'}`}
          name="landlineno"
		  value={formData.landlineno}
          onChange={handleChange}
        />
        {errors.landlineno && <div className="invalid-feedback">{errors.landlineno}</div>}
      </div>
	  </div>
	  </div>
	  </div>
	  
	  <div className="container">
        <div className="row">
		<div className="col-md-6">   	
		<div className="form-group">
				   <label htmlFor="stateid">State</label>
				   <select className="form-control" value={formData.stateid} name="stateid" onChange={handleChange} className={`form-control ${errors.stateid && 'is-invalid'}`}>
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
        <label>District:</label>
        <input
          type="text"
          className={`form-control ${errors.district && 'is-invalid'}`}
          name="district"
		  value={formData.district}
          onChange={handleChange}
        />
        {errors.district && <div className="invalid-feedback">{errors.district}</div>}
      </div>
	  </div>
	  </div>
	  </div>
	  
	 <div className="col-md-6">
      <div className="form-group">
        <label>Police Station:</label>
        <input
          type="text"
          className={`form-control ${errors.policestation && 'is-invalid'}`}
          name="policestation"
		  value={formData.policestation}
          onChange={handleChange}
        />
        {errors.policestation && <div className="invalid-feedback">{errors.policestation}</div>}
      </div>
	  </div>

      {/* ... add fields for other form inputs */}
	  
	   <button type="submit" className="btn btn-primary">Submit</button>
    </form>
	{successMessage && <div>{successMessage}</div>}
	 </div>
  );
};

export default MyForm;