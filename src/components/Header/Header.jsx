// import React from "react";
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// // import { Link } from "react-router-dom";  
// // import { Link, Router } from 'react-router-dom'; // withRouter is higher order componenet which means it takes anaother component as argument
// import {
//     // BrowserRouter as Router,
//     // Switch,
//     // Route,
//     Link
// } from "react-router-dom";
// // import Router from "";
// function Header() {
//     return (
//         <header>
//             <div>
//                 <li>
//                     <Link to="/Login">Login</Link>
//                 </li>
//                 <Navbar expand="lg">
//                     <Navbar.Brand href="#home">LNMIIT</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="mr-auto">
//                             <Nav.Link href="#home">Home</Nav.Link>
//                             <NavDropdown title="Academics" id="basic-nav-dropdown">
//                                 <NavDropdown.Item href="#action/3.1">Computer Science & Engineering</NavDropdown.Item>
//                                 <NavDropdown.Item href="ece.html">Electronics & Communication Engineering</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.1">Communication & Computer Engineering</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.2">Mechanical Engineering</NavDropdown.Item>

//                             </NavDropdown>
//                             <Nav.Link href="achievements.html">Achievements</Nav.Link>
//                             <Nav.Link href="research.html">Research</Nav.Link>
//                             <Nav.Link href="Labs.html">Labs</Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                     <NavDropdown title="Sign In" id="basic-nav-dropdown">
//                         <NavDropdown.Item href="student.html">Student</NavDropdown.Item>
//                         <NavDropdown.Item href="faculty.html">Faculty</NavDropdown.Item>

//                         <li>
//                             <Link to="/Login">Login</Link>
//                         </li>

//                     </NavDropdown>
//                 </Navbar>


//             </div>
//         </header>
//     );
// }

// export default Header;


import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { BrowserRouter as Router } from "react-router-dom";
import './styles.css';
const Header = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <nav className="navbar">
            {/* <Router> */}
                <Link to="/" className="nav-logo">
                    LNMIIT
			    </Link>
            {/* </Router> */}
            <div onClick={handleClick} className="nav-icon">
                {open ? <FiX /> : <FiMenu />}
            </div>
            <ul className={open ? 'nav-links active' : 'nav-links'}>
                
                <li className="nav-item">
                    {/* <Router> */}
                        <Link to="/academics" className="nav-link" onClick={closeMenu}>
                        Academics
					    </Link>
                    {/* </Router> */}
                </li>
                <li className="nav-item">
                    {/* <Router> */}
                        <Link to="/lab" className="nav-link" onClick={closeMenu}>
                            Lab
					    </Link>
                    {/* </Router> */}
                </li>
                <li className="nav-item">
                    {/* <Router> */}
                        <Link to="/achievements" className="nav-link" onClick={closeMenu}>
                            Achievements
					    </Link>
                    {/* </Router> */}
                </li>
                <li className="nav-item">
                    {/* <Router> */}
                        <Link to="/research" className="nav-link" onClick={closeMenu}>
                            Research
					    </Link>

                    {/* </Router> */}
                </li>
                <li className="nav-item">
                    {/* <Router> */}
                        <Link to="/login" className="nav-link" onClick={closeMenu}>
                            Login
					    </Link>
                    {/* </Router> */}
                </li>
            </ul>
        </nav>
    );
};

export default Header;
