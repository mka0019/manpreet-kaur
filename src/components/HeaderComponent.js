import React, { Component }  from 'react';
import { Navbar, Nav,NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);    
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
          isNavOpen: false,
          isModalOpen: false,
          bg: "transparent"
        };
    }

    listenScrollEvent = e => {
        if (window.scrollY > 20) {
          this.setState({ bg: "scroll" });
        } else {
          this.setState({ bg: "transparent" });
        }
      };

    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar className={this.state.bg} fixed="top" expand="md" id="navbar-id">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="#home">Manpreet Kaur</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}  />
                        <Collapse isOpen={this.state.isNavOpen} navbar  className="justify-content-end">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="#about">
                                        <span className="" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="#projects">
                                        <span className="" /> Projects
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="#resume">
                                        <span className="" /> Resume
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="#contact">
                                        <span className="" /> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;

