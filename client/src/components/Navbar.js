import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';


export class Navbars extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
  
    render() {
    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
            <Container>
                <NavbarBrand href='/'>Shopping</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink href='https://github.com/mohamedsaad4'>Repo</NavLink>
                        </NavItem>        
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
      </div>
    )
  }
}

export default Navbars;
