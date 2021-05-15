import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import '../styles.css'
import Contact from './Contact';

const QuickLinks = (props) => {
    // function onClick12() {
    //     props.onClick(true);
    // }
    // const [state, setstate] = useState(false);
    const onClick9 = (e) => {
        props.parentCallback9(true);
        e.preventDefault();
    }
    const onClick10 = (e) => {
        props.parentCallback10(true);
        e.preventDefault();
    }
    const onClick11 = (e) => {
        props.parentCallback11(true);
        e.preventDefault();
    }
    const onClick12 = (e) => {
        props.parentCallback12(true);
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

                    <a download href="uploadedFiles/ECE-UG-Curiculum-Y17.xlsx">
                        <td>
                            Courses Offered
                            </td>
                    </a>
                </tr>
                <tr>
                    <a href="" onClick={onClick9}>
                        <td>
                            Time Table
                        </td>
                    </a>

                </tr>
                <tr>
                    <a href="" onClick={onClick10}>
                        <td>
                            Departmental Directory
                        </td>
                    </a>

                </tr>
                <tr>
                    <a href="" onClick={onClick11}>
                        <td>
                            Events
                        </td>
                    </a>

                </tr>
                {/* <tr onClick={handleSubmit} >
                    <td>
                        Contact
                    </td>
                </tr> */}
                <tr>
                    <a href="" onClick={onClick12}>
                        <td>
                            Contact
                        </td>
                    </a>

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