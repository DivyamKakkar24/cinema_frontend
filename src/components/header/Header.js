import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartMusicCameraBolt } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import Style from './Header.css';


const Header = () => {

	return (
		<Navbar bg = "white" variant = "dark" expand = "lg" className = "nav-width">
			<Container fluid>
				<Navbar.Brand href="/" className = "bar" style={{"color":'black'}}>
                	<FontAwesomeIcon icon={faHeartMusicCameraBolt} className = "fame" />
                	<span className = "heading">Spotlight</span>
            	</Navbar.Brand>
            	<Navbar.Toggle aria-controls="navbarScroll" style={{"background":'#191919', "opacity": "1.0", "fontSize": "15px"}} />
	            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
	                    <NavLink className ="nav-link options" to="/" style={{"color":'black'}}>Home</NavLink>
	                    <NavLink className ="nav-link options op2" to="/watchList">Watch List</NavLink>      
	                </Nav>
	                <Button variant="outline-info" className="me-2 auth-buttons">Login</Button>
	                <Button variant="outline-info" className="auth-buttons">Register</Button>
	            </Navbar.Collapse>

			</Container>
		</Navbar>
	)
}

export default Header;