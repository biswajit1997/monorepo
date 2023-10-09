import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

 

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const history = useHistory();
  if (localStorage.getItem("token") === null) {
    history.push("/login");
  }
  return (
    <div>
      <Navbar  style={{backgroundColor:'rgb(210 83 83)'}} expand="md" className="d-flex">
        <NavbarBrand href="/" style={{color:'#fff'}}>Blog</NavbarBrand>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="d-flex justify-content-end">
         <div className="mr-3">{localStorage.getItem('name')}</div>
          <Link style={{color:'#fff'}} to="/logout">Logout</Link>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
