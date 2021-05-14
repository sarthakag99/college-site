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
                <h1 style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'red', color: 'white', padding: '5px', }}>Phd</h1>
                <hr></hr>
                <h3 style={{ textDecoration: 'underline red' }}>Ph D Programme students with:</h3>

                <p>
                M. Tech degree, irrespective of their discipline, must do a minimum of 16 credits through course work and a minimum of 64 credits through research (thesis) work. <br></br>
                <br></br>MCA degree, must do a minimum of 24 credits through course work and a minimum of 64 credits through research (thesis) work, and B. Tech degree, irrespective of their discipline, must do a minimum of 32 credits through course work and a minimum of 64 credits through research (thesis) work.
                </p>
                <br></br>
                <h3 style={{ textDecoration: 'underline red' }}>Broad areas of research</h3>

                <ul>
                <li>Software Engineering</li>
                <li>Support Vector Machines</li>
                <li>Model-based Software</li>
                <li>Engineering Mobile</li>
                <li>AdHoc Networks</li>
                <li> Datamining</li>
                <li>Image Processing</li>
                <li>Computer Vision</li>
                <li>Machine Learning</li>
                <li>Pattern Recognition</li>
                <li>Speech Recognition</li>

                </ul>
                
            </div>
        </div>
    </div>
)

export default Phd;