import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail, isInt } from "validator";
//import { FormControl } from "react-bootstrap";

import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        This field is required!
      </div>
    );
  }
};

const vdistrictname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="invalid-feedback d-block">
        The districtname must be between 3 and 20 characters.
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="invalid-feedback d-block">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="invalid-feedback d-block">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vcontactno = (value) => {
  if( !isInt(value) && value.length <= 10) {
    return (
      <div className="invalid-feedback d-block">
        The contactno is not valid.
      </div>
    );
  }
  else if(value.length < 10) {
    return (
      <div className="invalid-feedback d-block">
        The contactno must be 10 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="invalid-feedback d-block">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const vcpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="invalid-feedback d-block">
        The password must be between 6 and 40 characters.
      </div>
	  
    );
  }
 };

const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  
  const [username, setUsername] = useState("");
  const [contactno, setContactno] = useState("");
  const [email, setEmail] = useState("");
 // const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const roles = 'ROLE_USER';
  const [stateid, setStatename] = useState("");
  const [districtname, setDistrictname] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [passwordNotMatched, setPasswordNotMatched] = useState(false);

  //state
 const [password, setPassword] = React.useState({
    password: ""

})

   const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  
 const onChangeContactno = (e) => {
  //const contactno = e.target.value.replace(/\D/g, "");
   const contactno = e.target.value;
   setContactno(contactno);
   };
  
   const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
	setPassword({
    ...password,
   [e.target.name]: password
 });
	
  };
  const onChangeCPassword = (e) => {
    const cpassword = e.target.value;
	if(e.target.value === password.password){
		setPasswordNotMatched(false)
		setCpassword(cpassword);
	}else{
		setPasswordNotMatched(true)
		setCpassword(cpassword);
	}
    
};
  
  const onChangeStatename = (e) => {
    const stateid = e.target.value;
    setStatename(stateid);
	 };
	 
  const onChangeDistrictname = (e) => {
    const districtname = e.target.value;
    setDistrictname(districtname);
	 };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password.password, roles, stateid, districtname, contactno).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
		  
		   <div>
		   
			   <div className="form-group">
				   <label htmlFor="stateid">Name of State</label>
				   <select className="form-control" value={stateid} onChange={onChangeStatename}  required >
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
			 
			  <div className="form-group">
                <label htmlFor="districtname">Name Of District</label>
                <Input
                  type="text"
                  className="form-control"
                  name="districtname"
                  value={districtname}
				  
                  onChange={onChangeDistrictname}
                  validations={[required, vdistrictname]}
                />
              </div>
		   
		      <div className="form-group">
                <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
				  
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>
			  
			  
			  
			 <div className="form-group">
			  <label htmlFor="contactno">Mobile No</label>
				  <Input
					type="text"
					className="form-control"
					maxLength="10"
					name="contactno"
					value={contactno}
					onChange={onChangeContactno}
					validations={[required, vcontactno]}
				  />
				</div>	

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password.password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>
			  
			  <div className="form-group">
                <label htmlFor="cpassword">Confirm Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="cpassword"
                  value={cpassword}
                  onChange={onChangeCPassword}
                  validations={[required, vcpassword]}
                />
				{passwordNotMatched && <div className="invalid-feedback d-block">
        Password not matched
				</div>}
			  </div>
			  
			 <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;
