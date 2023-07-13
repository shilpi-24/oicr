import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";


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

const vstatename = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="invalid-feedback d-block">
        The statename must be between 3 and 20 characters.
      </div>
    );
  }
};

const vcontactno = (value) => {
  /*if( !(phone.match('[0-9]{10}')) ) {
    return (
      <div className="invalid-feedback d-block">
        The contactno must be 10 characters.
      </div>
    );
  }*/
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
  //const [password, setPassword] = useState("");
   const [cpassword, setCpassword] = useState("");
  const roles = 'user';
  const [statename, setStatename] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [passwordNotMatched, setPasswordNotMatched] = useState(false);
  const [password, setPassword] = React.useState({
    password: ""

  })

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  
   const onChangeContactno = (e) => {
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
	//setMessage(password)
	setPassword({
    ...password,
    [e.target.name]: password
  });
	
  };
  const onChangeCPassword = (e) => {
    const cpassword = e.target.value;
	if(e.target.value == password.password){
		setPasswordNotMatched(false)
		setCpassword(cpassword);
	}else{
		setPasswordNotMatched(true)
		setCpassword(cpassword);
	}
    
};
  
  
  const onChangeStatename = (e) => {
    const statename = e.target.value;
    setStatename(statename);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();
const flag=AuthService.checkPassword(password,cpassword)

if (flag) {
	 setMessage(flag);
    return (
      <div className="invalid-feedback d-block">
        The password must be between 6 and 40 characters.
      </div>
	  
    );
  }
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password, roles, statename, contactno).then(
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
                  type="cpassword"
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
                <label htmlFor="statename">Name of State</label>
                <Input
                  type="text"
                  className="form-control"
                  name="statename"
                  value={statename}
                  onChange={onChangeStatename}
                  validations={[required, vstatename]}
                />
              </div>
			  
			  <div className="form-group">
                <label htmlFor="contactno">Mobile No</label>
                <Input
                  type="text"
                  className="form-control"
                  name="contactno"
                  value={contactno}
                  onChange={onChangeContactno}
                  validations={[required, vcontactno]}
                />
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
