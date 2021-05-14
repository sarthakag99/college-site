import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import '../styles.css'
import Contact from './Contact';

const QuickLinks = (props) => {
    function onClick12() {
        props.onClick(true);
    }
    // const [state, setstate] = useState(false);
    // const onClick12 = () => {  
    //     setstate(true); 
    //    }; 
    return(
    <Table striped bordered hover>
                <thead>
                    <tr style={{ backgroundColor: 'red' }}>
                        <th>Quick Links</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <a download href="uploadedFiles/ECE-UG-Curiculum-Y17.xlsx">
                            <td>
                                Courses Offered
                            </td>
                        </a>
                    </tr>
                    <tr>
                        <a href="#timeTable">
                            <td>
                                Time Table
                            </td>
                        </a>

                    </tr>
                    <tr>
                        <a href="#directory">
                            <td>
                                Departmental Directory
                            </td>
                        </a>

                    </tr>
                    <tr>
                        <a href="#events">
                            <td>
                                Events
                            </td>
                        </a>

                    </tr>
                    <tr onClick={onClick12}>
                        <td>
                            Contact
                        </td>
                    </tr>
                    <tr>
                        
                        <a download href="uploadedFiles/CNGCN.pdf">
                            <td>
                                CNGCN Brochure
                            </td>
                        </a>
                    </tr>
                </tbody>
            </Table>
)
    };
export default QuickLinks;