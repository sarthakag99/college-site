import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

import './styles.css';
import QuickLinks from './SubPages/QuickLinks';
import Overview from './SubPages/Overview';
import Publication from './SubPages/Publication';
import Activity from './SubPages/Activity';
import Grants from './SubPages/Grants';
import Centers from './SubPages/Centers';
import Cngcn from './SubPages/Cngcn';
const NavDropdownExample = () => {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    const [overview, setOverview] = useState(true);
    const onClick1 = () => { setOverview(true); setPublication(false); setActivity(false); setGrants(false); setCenters(false); setCngcn(false)}

    const [publication, setPublication] = useState(false);
    const onClick2 = () => { setOverview(false); setPublication(true); setActivity(false); setGrants(false); setCenters(false); setCngcn(false)}

    const [activity, setActivity] = useState(false);
    const onClick3 = () => { setOverview(false); setPublication(false); setActivity(true); setGrants(false); setCenters(false); setCngcn(false)}

    const [grants, setGrants] = useState(false);
    const onClick4 = () => { setOverview(false); setPublication(false); setActivity(false); setGrants(true); setCenters(false); setCngcn(false)}

    const [centers, setCenters] = useState(false);
    const onClick5 = () => { setOverview(false); setPublication(false); setActivity(false); setGrants(false); setCenters(true); setCngcn(false)}

    const [cngcn, setCngcn] = useState(false);
    const onClicked = () => { setOverview(false); setPublication(false); setActivity(false); setGrants(false); setCenters(false); setCngcn(true)}
    return (
        <div>
            <Nav className="nav">
                <Nav.Item className="nav-item">
                    <Nav.Link onClick={onClick1}>
                        Overview
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                    <Nav.Link onClick={onClick2}>
                        Research Publication
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                    <Nav.Link onClick={onClick3}>
                        Research Activity
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                    <Nav.Link onClick={onClick4}>
                        Research Grants
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                    <Nav.Link onClick={onClick5}>
                        Specialized Research Centres
                    </Nav.Link>
                </Nav.Item>

            </Nav>
            <div className="float-child1" style={{ marginTop: '10px', width: '200px', position: 'fixed' }}>
                <QuickLinks 
                    parentCallback={onClicked}
                />
            </div>
            <div className="main-div">

                <div>
                    {overview ? <Overview /> : null}
                </div>
                <div>
                    {publication ? <Publication /> : null}
                </div>
                <div>
                    {activity ? <Activity /> : null}
                </div>
                <div>
                    {grants ? <Grants /> : null}
                </div>
                <div>
                    {centers ? <Centers /> : null}
                </div>
                <div>
                    {cngcn ? <Cngcn /> : null}
                   
                </div>

            </div>
        </div>
    );
}

export default NavDropdownExample;