import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import '../styles.css'


const QuickLinks = (props) => {
    const onClicked = (e) => {
        props.parentCallback(true);
        e.preventDefault();
    }

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr style={{ backgroundColor: 'red' }}>
                    <th>Quick Links</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <a  style={{ textAlign: 'left' }} download href="http://www.cognitive.radio.lnmiit.ac.in/" target="_blank">
                        <td>
                            Cognitive Radio (CR)
                        </td>
                    </a>
                </tr>

                <tr>
                    <a  style={{ textAlign: 'left' }} href="http://csp.lnmiit.ac.in/" target="_blank">
                        <td>
                            Communication and Signal Processing (CSP)
                        </td>
                    </a>
                </tr>

                <tr>
                    <a  style={{ textAlign: 'left' }} download href="http://vesd.lnmiit.ac.in/" target="_blank">
                        <td>
                        VLSI and Embedded System Design (VESD)
                        </td>
                    </a>
                </tr>

                <tr>
                    <a  style={{ textAlign: 'left' }} href="http://rfm.lnmiit.ac.in/" target="_blank">
                        <td>
                            RF and Microwave (RFM)
                        </td>
                    </a>
                </tr>
            
                <tr>
                    <a  style={{ textAlign: 'left' }} href="" onClick={onClicked}>
                        <td>
                            CNGCN
                        </td>
                    </a>

                </tr>
                
            </tbody>
        </Table>
    )
};
export default QuickLinks;