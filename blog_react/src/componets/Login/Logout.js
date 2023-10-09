import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  if (localStorage.getItem("token") !== null) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    history.push("/login");
  } else {
    history.push("/login");
  }
  return <div>Logged Out successfully.</div>;
};

export default Logout;
