import React from 'react';
import Table from 'react-bootstrap/Table'
import '../styles.css'
import QuickLinks from './QuickLinks';
const TimeTable = () => (
    <div class='float-contanier'>
        <div style={{ marginRight: '15px' }} className="search-results float-child2">
            <h1 style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'red', color: 'white', padding: '5px', }}>Time Table</h1>
            
            <h5 style={{ textDecoration: 'underline red' }}>Cobmined Time Table</h5>
            <ul>
            <a style={{textAlign:'left'}} download href="uploadedFiles\ECE-CCE-Time-Table-ODD-Sem-2018-19.pdf">ODD</a>
            <a style={{textAlign:'left'}} href="#timeTable">EVEN</a>
            </ul>

            <h5 style={{ textDecoration: 'underline red',marginTop:'5px' }}>ECE Time Table</h5>
            <ul>
            <a style={{textAlign:'left'}} download href="uploadedFiles\ECE-Time-Table-ODD-Sem-2018-19.pdf">ODD</a>
            <a style={{textAlign:'left'}} href="#timeTable">EVEN</a>
            </ul>
            
            <h5 style={{ textDecoration: 'underline red',marginTop:'5px' }}>CCE Time Table</h5>
            <ul>
            <a style={{textAlign:'left'}} download href="uploadedFiles\CCE-Time-Table-ODD-Sem-2018-19.pdf">ODD</a>
            <a style={{textAlign:'left'}} href="#timeTable">EVEN</a>
            </ul>

            <h5 style={{ textDecoration: 'underline red',marginTop:'5px' }}>Lab Time Table</h5>
            <ul>
            <a style={{textAlign:'left'}} download href="uploadedFiles\ECE-Department-LAB-Time-Table-ODD-Sem-2018-19.pdf">ODD</a>
            <a style={{textAlign:'left'}} href="#timeTable">EVEN</a>
            </ul>
        </div>
    </div>
);
export default TimeTable