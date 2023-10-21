import React, { useState } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [userSign, setUserSign] = useState([{ email: "", password: "" }]);

  const handleChange = (event) => {
    setUserSign({
      ...userSign,
      [event.target.name]: event.target.value,
    });
  };
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://43.204.79.189:8090/api/login", userSign)
      .then(function (response) {
        if (response.data.error) {
          alert("Invalid user id and password");
        } else {
          localStorage.setItem("user", JSON.stringify(userSign));
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("name", response.data.data.name);
          localStorage.setItem("id", response.data.data.id);
          history.push("/home");
        }
      })
      .catch(function (error) {
        console.error(error.message);
      });
  };

  if (localStorage.getItem("token") !== null) {
    history.push("/login");
  }
  return (
    <div>
      <br />
      <Row>
        <Col lg="3"></Col>
        <Col lg="6">
          <Card body className=" mt-5">
            <CardTitle className="text-center">
              <h3>Login Biswajit</h3>
            </CardTitle>
            <CardText>
              <form className="white" onSubmit={handleSubmit}>
                <FormGroup>
                  <Row>
                    <Col lg="2">
                      <Label for="exampleEmail">Email</Label>
                    </Col>
                    <Col>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col lg="2">
                      <Label for="examplePassword">Password</Label>
                    </Col>
                    <Col>
                      <Input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        id="examplePassword"
                        placeholder="Enter your Password"
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <div className="text-center mt-3">
                  <Button color="primary" size="md">
                    Submit
                  </Button>
                </div>
              </form>
            </CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Login;
