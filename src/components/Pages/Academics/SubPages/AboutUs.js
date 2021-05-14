import React from 'react';
import Table from 'react-bootstrap/Table'
import '../styles.css'
import QuickLinks from './QuickLinks';
const Phd = () => (
    <div class='float-contanier'>
        <div className="float-child1" style={{ marginTop: '10px', width: '200px', position: 'fixed' }}>
            <QuickLinks />
        </div>
        <div style={{ marginRight: '15px' }} className="search-results float-child2">
            <div>
                <h1 style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'red', color: 'white', padding: '5px', }}>About Us</h1>
                <hr></hr><br></br>
                <h3 style={{ textDecoration: 'underline red' }}>The ECE discipline was established with the following objectives:</h3>
                <ul>
                <li>To train engineers at UG and PG levels, capable of dealing with real-life challenges in the electronics Industry and in the field of electronic communication.</li>
                <li>To conduct collaborative research focusing on modern communication systems (e.g., digital communication systems, optical communication systems, wireless communication systems, RF and Microwave systems, and satellite communication systems)</li>
                </ul>
                <p>
                The ECE team is a fine blend of renowned as well as young and dynamic faculty members, having education and experience from renowned institutions in India and abroad. Advanced courses and electives in later years enable students to specialise in communications, signal processing, robotics, VLSI, embedded systems, and other streams. The ECE department also offers specialized M.Tech. and Dual Degree Programmes in Communication Systems, Microelectronics, Microwave engineering and VLSI.
                </p>
                
            </div>
        </div>
    </div>
)

export default Phd;