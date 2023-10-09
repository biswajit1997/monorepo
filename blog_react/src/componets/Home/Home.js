import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from './Navbar';
import Homebody from './Homebody';
const Home = () => {
  const history = useHistory();

  if (localStorage.getItem("token") === null) {
    history.push("/login");
  }

  return (
    <div>
      <Navbar />
      <Homebody />
    </div>
  );
};
export default Home;
