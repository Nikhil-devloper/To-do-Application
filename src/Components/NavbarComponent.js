import React from 'react';
import { Collapse,  Navbar,  NavbarToggler, Nav,  NavItem,  NavLink} from 'reactstrap';
import { Link } from "react-router-dom";
import Google from './Google.js';
import './NavbarComponent.css'

class NavbarComponent extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <div className="NavbarContainer">

       <Navbar color="light" light expand="md">
         <Link to="/" className="nav-main"> TODO App</Link>
         <NavbarToggler onClick={this.toggle} />

         <Collapse isOpen={this.state.isOpen} navbar>
           <Nav className="ml-auto" navbar>

           <NavItem>
             <Link className="nav-link" to="/Instruction">Instruction</Link>
           </NavItem>

          <NavItem>
              <Link className="nav-link" to="/AboutProj">About Project</Link>
          </NavItem>

           <NavItem className="AboutMeCotainer">
             <NavLink href="http://developer-nikhil.mywebcommunity.org/">About Me</NavLink>
           </NavItem>
   <Google />

           </Nav>
         </Collapse>

       </Navbar>
     </div>
    )
  }
}

export default NavbarComponent;
