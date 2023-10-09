import React, { useState} from "react";
import { Container, Row, Col } from 'reactstrap';
import {
  Card,
  Button,
  CardTitle,
  CardText,

  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [userSignUp, setUserSignUp] = useState([{name:"", email: "", password: "" }]);
// console.log(userSignUp)

  const handleChange = (event) => {
    setUserSignUp({
      ...userSignUp,
      [event.target.name]: event.target.value,
    });
  };
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/register", userSignUp)
      .then(function (response) {
        console.log(response.data);
        history.push("/login");
      })
      .catch(function (error) {
        
        console.error(error.message);
      });
  };

 
  return (
    <div>
        <Container>
            <Row> 
                <div className="col-sm-10 offset-sm-2 mt-4">
                    <div className="col-6">
                        <h3 style={{textAlign:'center'}}>Register</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <Col sm="6 text-left">
                        <label>Name</label>
                        <Input type="text" name="name" onChange={handleChange} placeholder="Entrer your name" required></Input>
                    </Col>
                    
                    <Col sm="6 text-left">
                        <label>Email</label>
                        <Input type="text" name="email" onChange={handleChange} placeholder="Entre your email" required></Input>
                    </Col>
                    
                    <Col sm="6 text-left mt-2">
                        <label>Password</label>
                        <Input type="text" name="password" onChange={handleChange} placeholder="Entre your password" required></Input>
                    </Col>
                    <Col sm="6 text-center mt-3">
                        <Input type="submit" name="submit" className="btn btn-primary"></Input>
                    </Col>
                    </form>
                </div>
            </Row>
        </Container>
    </div>
  );
};
export default Login;