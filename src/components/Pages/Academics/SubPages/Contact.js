import React from 'react';
import Table from 'react-bootstrap/Table'
import '../styles.css'
import QuickLinks from './QuickLinks';
const Contact = () => (
    <div class='float-contanier'>
        <div className="float-child1" style={{ marginTop: '10px', width: '200px', position: 'fixed' }}>
            <QuickLinks />
        </div>
        <div style={{ marginRight: '15px' }} className="search-results float-child2">
            <h1 style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'red', color: 'white', padding: '5px', }}>Contact</h1>
            <h3 style={{ textDecoration: 'underline red' }}>Postal Address :</h3>
            <p>
                Head of Department,<br></br>
                <b>Department of Electronics and Communication Engineering</b><br></br>
                The LNM Institute of Information Technology<br></br>
                Rupa ki Nangal, Post-Sumel,<br></br>
                Via-Jamdoli<br></br>
                Jaipur-302031,<br></br>
                (Rajasthan) INDIA<br></br>
            </p>
        </div>
    </div>
);
export default Contact