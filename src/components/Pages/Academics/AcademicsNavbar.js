import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

import './styles.css';
import Homepage from './SubPages/HomePage';
const NavDropdownExample = () => {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    const [homePage, setHomePage] = useState(false);
    const onClick1 = () => { setHomePage(true); setUnderGraduate(false); setPostGraduate(false); setPhd(false); setFaculty(false); setStaff(false); setScholar(false); setAboutUs(false); }

    const [underGraduate, setUnderGraduate] = useState(false);
    const onClick2 = () => { setHomePage(false); setUnderGraduate(true); setPostGraduate(false); setPhd(false); setFaculty(false); setStaff(false); setScholar(false); setAboutUs(false); }

    const [postGraduate, setPostGraduate] = useState(false);
    const onClick3 = () => { setHomePage(false); setUnderGraduate(false); setPostGraduate(true); setPhd(false); setFaculty(false); setStaff(false); setScholar(false); setAboutUs(false); }

    const [phd, setPhd] = useState(false);
    const onClick4 = () => { setHomePage(false); setUnderGraduate(false); setPostGraduate(false); setPhd(true); setFaculty(false); setStaff(false); setScholar(false); setAboutUs(false); }

    const [faculty, setFaculty] = useState(false);
    const onClick5 = () => { setHomePage(false); setUnderGraduate(false); setPostGraduate(false); setPhd(false); setFaculty(true); setStaff(false); setScholar(false); setAboutUs(false); }

    const [staff, setStaff] = useState(false);
    const onClick6 = () => { setHomePage(false); setUnderGraduate(false); setPostGraduate(false); setPhd(false); setFaculty(false); setStaff(true); setScholar(false); setAboutUs(false); }

    const [scholar, setScholar] = useState(false);
    const onClick7 = () => { setHomePage(false); setUnderGraduate(false); setPostGraduate(false); setPhd(false); setFaculty(false); setStaff(false); setScholar(true); setAboutUs(false); }

    const [aboutUs, setAboutUs] = useState(false);
    const onClick8 = () => { setHomePage(false); setUnderGraduate(false); setPostGraduate(false); setPhd(false); setFaculty(false); setStaff(false); setScholar(false); setAboutUs(true); }
    return (
        <div>
            <Nav className="nav">
                <Nav.Item className="nav-item">
                    <Nav.Link onClick={onClick1}>
                        ECE Homepage
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown className="nav-item1" title="Programmes" id="nav-dropdown">
                    <NavDropdown.Item onClick={onClick2} className="drop">UnderGraduate</NavDropdown.Item>
                    <NavDropdown.Item onClick={onClick3} className="drop">PostGraduate</NavDropdown.Item>
                    <NavDropdown.Item onClick={onClick4} className="drop">Ph.D</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="nav-item1" title="People" id="nav-dropdown">
                    <NavDropdown.Item onClick={onClick5} className="drop">Faculty</NavDropdown.Item>
                    <NavDropdown.Item onClick={onClick6} className="drop">Staff</NavDropdown.Item>
                    <NavDropdown.Item onClick={onClick7} className="drop">Scholars</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item className="nav-item">
                    <Nav.Link onClick={onClick8} title="Item">
                        About Us
                    </Nav.Link>
                </Nav.Item>

            </Nav>
            <div className="main-div">
                
                <div onClick={onClick1}>
                    {homePage ? <Homepage /> : null}
                </div>
                <div onClick={onClick2}>
                    {underGraduate ? <UnderGraduate /> : null}
                </div>
                <div onClick={onClick3}>
                    {postGraduate ? <PostGraduate /> : null}
                </div>
                <div onClick={onClick4}>
                    {phd ? <Phd /> : null}
                </div>
                <div onClick={onClick5}>
                    {faculty ? <Faculty /> : null}
                </div>
                <div onClick={onClick6}>
                    {staff ? <Staff /> : null}
                </div>
                <div onClick={onClick7}>
                    {scholar ? <Scholar /> : null}
                </div>
                <div onClick={onClick8}>
                    {aboutUs ? <AboutUs /> : null}
                </div>
            </div>
        </div>
    );
}


const UnderGraduate = () => (
    <div id="results" className="search-results">
        UnderGraduate
    </div>
)
const PostGraduate = () => (
    <div id="results" className="search-results">
        PostGraduate
    </div>
)
const Phd = () => (
    <div id="results" className="search-results">
        Phd
    </div>
)
const Faculty = () => (
    <div id="results" className="search-results">
        Faculty
    </div>
)
const Staff = () => (
    <div id="results" className="search-results">
        Staff
    </div>
)

const Scholar = () => (
    <div id="results" className="search-results">
        Scholar
    </div>
)
const AboutUs = () => (
    <div id="results" className="search-results">
        AboutUs
    </div>
)






export default NavDropdownExample;