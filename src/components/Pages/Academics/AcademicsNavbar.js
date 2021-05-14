import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

import './styles.css';
import Homepage from './SubPages/HomePage';
import UnderGraduate from './SubPages/UnderGraduate';
import PostGraduate from './SubPages/PostGraduate';
import Phd from './SubPages/Phd';
import Faculty from './SubPages/Faculty';
import Staff from './SubPages/Staff';
import Scholar from './SubPages/Scholar';
import AboutUs from './SubPages/AboutUs';
import TimeTable from './SubPages/TimeTable';
import DepartmentalDirectory from './SubPages/DepartmentalDirectory';
import Events from './SubPages/Events';
import Contact from './SubPages/Contact';
import QuickLinks from './SubPages/QuickLinks';
const NavDropdownExample = () => {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    const [homePage, setHomePage] = useState(true); 
    const onClick1 = () => { setHomePage(true); setUnderGraduate(false); setPostGraduate(false); setPhd(false); setFaculty(false); setStaff(false); setScholar(false); setAboutUs(false); setTimeTable(false); setDepartmentalDirectory(false); setEvents(false); setContact(false); }

    const [underGraduate, setUnderGraduate] = useState(false);
    const onClick2 = () => { setHomePage(false); setUnderGraduate(true); setPostGraduate(false); setPhd(false); setFaculty(false); setStaff(false); setScholar(false); setAboutUs(false); setTimeTable(false); setDepartmentalDirectory(false); setEvents(false); setContact(false); }

    const [postGraduate, setPostGraduate] = useState(false);
    const onClick3 = () => { setHomePage(false); setUnderGraduate(false); setPostGraduate(true); setPhd(false); setFaculty(false); setStaff(false); setScholar(false); setAboutUs(false); setTimeTable(false); setDepartmentalDirectory(false); setEvents(false); setContact(false); }

    const [phd, setPhd] = useState(false);
    const onClick4 = () => { setHomePage(false); setUnderGraduate(false); setPostGraduate(false); setPhd(true); setFaculty(false); setStaff(false); setScholar(false); setAboutUs(false); setTimeTable(false); setDepartmentalDirectory(false); setEvents(false); setContact(false); }

    const [faculty, setFaculty] = useState(false);
    const onClick5 = () => { setHomePage(false); setUnderGraduate(false); setPostGraduate(false); setPhd(false); setFaculty(true); setStaff(false); setScholar(false); setAboutUs(false); setTimeTable(false); setDepartmentalDirectory(false); setEvents(false); setContact(false); }

    const [staff, setStaff] = useState(false);
    const onClick6 = () => { setHomePage(false); setUnderGraduate(false); setPostGraduate(false); setPhd(false); setFaculty(false); setStaff(true); setScholar(false); setAboutUs(false); setTimeTable(false); setDepartmentalDirectory(false); setEvents(false); setContact(false); }

    const [scholar, setScholar] = useState(false);
    const onClick7 = () => { setHomePage(false); setUnderGraduate(false); setPostGraduate(false); setPhd(false); setFaculty(false); setStaff(false); setScholar(true); setAboutUs(false); setTimeTable(false); setDepartmentalDirectory(false); setEvents(false); setContact(false); }

    const [aboutUs, setAboutUs] = useState(false);
    const onClick8 = () => { setHomePage(false); setUnderGraduate(false); setPostGraduate(false); setPhd(false); setFaculty(false); setStaff(false); setScholar(false); setAboutUs(true); setTimeTable(false); setDepartmentalDirectory(false); setEvents(false); setContact(false); }

    const [timeTable, setTimeTable] = useState(false);
    const onClick9 = () => { setHomePage(false); setUnderGraduate(false); setPostGraduate(false); setPhd(false); setFaculty(false); setStaff(false); setScholar(false); setAboutUs(false); setTimeTable(true); setDepartmentalDirectory(false); setEvents(false); setContact(false); }

    const [departmentalDirectory, setDepartmentalDirectory] = useState(false);
    const onClick10 = () => { setHomePage(false); setUnderGraduate(false); setPostGraduate(false); setPhd(false); setFaculty(false); setStaff(false); setScholar(false); setAboutUs(false); setTimeTable(false); setDepartmentalDirectory(true); setEvents(false); setContact(false); }

    const [events, setEvents] = useState(false);
    const onClick11 = () => { setHomePage(false); setUnderGraduate(false); setPostGraduate(false); setPhd(false); setFaculty(false); setStaff(false); setScholar(false); setAboutUs(false); setTimeTable(false); setDepartmentalDirectory(false); setEvents(true); setContact(false); }

    const [contact, setContact] = useState(false);
    const onClick12 =()=>{ setHomePage(false); setUnderGraduate(false); setPostGraduate(false); setPhd(false); setFaculty(false); setStaff(false); setScholar(false); setAboutUs(false); setTimeTable(false); setDepartmentalDirectory(false); setEvents(false); setContact(true);}

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
                    {/* <NavDropdown.Item onClick={onClick7} className="drop">Scholars</NavDropdown.Item> */}
                </NavDropdown>
                <Nav.Item className="nav-item">
                    <Nav.Link onClick={onClick8} title="Item">
                        About Us
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="float-child1" style={{ marginTop: '10px', width: '200px', position: 'fixed' }}>
                <QuickLinks 
                    parentCallback9={onClick9}
                    parentCallback10={onClick10}
                    parentCallback11={onClick11}
                    parentCallback12={onClick12}
                />
            </div>
            <div className="main-div">
                
                <div>
                    {homePage ? <Homepage /> : null}
                </div>
                <div>
                    {underGraduate ? <UnderGraduate /> : null}
                </div>
                <div>
                    {postGraduate ? <PostGraduate /> : null}
                </div>
                <div>
                    {phd ? <Phd /> : null}
                </div>
                <div>
                    {faculty ? <Faculty /> : null}
                </div>
                <div>
                    {staff ? <Staff /> : null}
                </div>
                <div>
                    {scholar ? <Scholar /> : null}
                </div>
                <div>
                    {aboutUs ? <AboutUs /> : null}
                </div>
                <div>
                    {timeTable ? <TimeTable /> : null}
                </div>
                <div>
                    {departmentalDirectory ? <DepartmentalDirectory /> : null}
                </div>
                <div>
                    {events ? <Events /> : null}
                </div>
                <div>
                    {contact ? <Contact /> : null}
                   
                </div>
            </div>
        </div>
    );
}

export default NavDropdownExample;