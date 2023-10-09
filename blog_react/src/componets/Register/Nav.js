
import React, {useState} from 'react';

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
  
} from 'reactstrap';


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



  return (
    <div>
      <Navbar style={{ backgroundColor: 'rgb(210 83 83)' }} expand="md">
        <NavbarBrand href="/" style={{ color: '#fff' }}>Blog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          
          </Nav>
          <UncontrolledDropdown inNavbar>
            <DropdownToggle nav caret>

            </DropdownToggle>
            <DropdownMenu right>
            <DropdownItem>
               <NavLink href="/login">Login</NavLink> 
               </DropdownItem>
                <DropdownItem> 
                 <NavLink href="/register">Register</NavLink> 
                 </DropdownItem>
             
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  
   
    
  );
}

export default Example;