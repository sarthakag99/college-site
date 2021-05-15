import React from 'react';
import Table from 'react-bootstrap/Table'
import '../styles.css'
import QuickLinks from './QuickLinks';
const Cngcn = () => (
    <div class='float-contanier'>
        {/* <div className="float-child1" style={{ marginTop: '10px', width: '200px', position: 'fixed' }}>
            <QuickLinks />
        </div> */}
        <div style={{ marginRight: '15px' }} className="search-results float-child2">
            <h1 style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'red', color: 'white', padding: '5px', }}>Cngcn</h1>
            <hr></hr><br></br>
            
            <p>
            Welcome to the newly formed Centre for Next Generation Communication and Networking (C-NGCN) in the Department of Electronics and Communication Engineering at The LNM Institute of Information Technology, Jaipur.
            <br></br><br></br>
            In the near-term research strategy, the centre would focus its activities in the following major areas:
            <br></br><br></br>
            <ul>
                <li>Device-to-Device Communication: Algorithms, Protocols and Resource Optimization</li>
                <li>Signal Processing for 5G: Beamforming, Precoding and Multi-user Scheduling</li>
                <li>Ultra-reliable and Low-latency Communication</li>
                <li>Optical Wireless Backhauling and UAV Assisted Communication in 5G</li>
                <li>Data Analytics for 5G Wireless Network Design and Optimization</li>
                <li>SDN and NFV Technologies for Sat-Com Integration into 5G Ecosystem</li>
            </ul>

            <h3 style={{ textDecoration: 'underline red' }}>Contact </h3>
            
                <b>Contact Address</b><br></br>The LNM Institute of Information Technology, Rupa ki Nangal, Post-Sumel, Via Jamdoli, Jaipur-302 031(Rajasthan)
                <br></br><br></br>
                <b>Contact Information</b><br></br><b>Email:</b> ranjan@lnmiit.ac.in, nikhil.sharma@lnmiit.ac.in
                <br></br><br></br>
            
            </p>
        </div>
    </div>
);
export default Cngcn