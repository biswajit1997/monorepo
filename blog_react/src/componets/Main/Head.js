import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ backgroundColor: "rgb(210 83 83)" }} expand="md">
        <NavbarBrand href="/" style={{ color: "#fff" }}>
          Blog
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar></Nav>
          <NavLink href="/login" style={{ color: "#fff" }}>
            Login
          </NavLink>
          /
          <NavLink href="/register" style={{ color: "#fff" }}>
            Register
          </NavLink>
        </Collapse>
      </Navbar>
      <div
        className="text-center"
        style={{ marginTop: "180px", color: "rgb(210, 83, 83)" }}
      >
        <h1>Welcome Blog</h1>
      </div>
    </div>
  );
};

export default Example;
