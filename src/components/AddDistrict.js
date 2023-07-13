import React, { useState } from "react";
import DistrictDataService from "../services/district.service";
import axios from "axios";

const AddDistrict = () => {
	
	const initialDistrictState = {
	id: null,
	districtname: "",
	//orgid: "",
	stateid: "",
    
    published: false
  };
  const [tutorial, setTutorial] = useState(initialDistrictState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
	  districtname: tutorial.districtname,
	  //orgid: tutorial.orgid,
	  stateid: tutorial.stateid,
     };

    DistrictDataService.create(data)
      .then(response => {
		  console.log(response);
        setTutorial({
          id: response.data.id,
		  districtname: response.data.districtname,
		 // orgid: response.data.orgid,
		  stateid: response.data.statename,
		 
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
    setTutorial(initialDistrictState);
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
          <div className="form-group">
            <label htmlFor="districtname">District Name</label>
            <input
              type="text"
              className="form-control"
              id="districtname"
              required
              value={tutorial.districtname}
              onChange={handleInputChange}
              name="districtname"
            />
          </div>

          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddDistrict;