import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import '../styles.css'
import { cse, ece, hss, mathematics, physics, me } from './Data/overviewData';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import journalData from './Data/journalData';
import ncData from './Data/ncData';
import icData from './Data/icData';
import nsData from './Data/nsData';
import isData from './Data/isData';
import workshopData from './Data/workshopData';
const Publication = () => {
    const [key, setKey] = useState('journal');

    return (
        <div class='float-contanier'>
            {/* <div className="float-child1" style={{ marginTop: '10px', width: '200px', position: 'fixed' }}>
            <QuickLinks/>
        </div> */}
            <div style={{ marginRight: '15px' }} className="search-results float-child2">
                <div>
                    <h1 style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'red', color: 'white', padding: '5px', }}>Research Publication</h1>
                    <hr></hr><br></br>

                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab eventKey="journal" title="Journal">
                        <br></br>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>S. No.</th>
                                        <th>Year</th>
                                        <th>Month</th>
                                        <th>Department</th>
                                        <th>Faculty</th>
                                        <th>Vol</th>
                                        <th>Issue</th>
                                        <th>Name</th>
                                        <th>Article Name</th>
                                        <th>Author Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {journalData.map((data) =>

                                        <tr>
                                            <td>{data.key}</td>
                                            <td>{data.year}</td>
                                            <td>{data.month}</td>
                                            <td>{data.department}</td>
                                            <td>{data.faculty}</td>
                                            <td>{data.vol}</td>
                                            <td>{data.issue}</td>
                                            <td>{data.name}</td>
                                            <td>{data.articleName}</td>
                                            <td>{data.type}</td>
                                        </tr>
                                    )}

                                </tbody>
                            </Table>
                        </Tab>

                        <Tab eventKey="nc" title="National Conference">
                            <br></br>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>S. No.</th>
                                        <th>Year</th>
                                        <th>Month</th>
                                        <th>Department</th>
                                        <th>Faculty</th>
                                        <th>Date From</th>
                                        <th>Date To</th>
                                        <th>Name</th>
                                        <th>Article Name</th>
                                        <th>Author Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ncData.map((data) =>

                                        <tr>
                                            <td>{data.key}</td>
                                            <td>{data.year}</td>
                                            <td>{data.month}</td>
                                            <td>{data.department}</td>
                                            <td>{data.faculty}</td>
                                            <td>{data.df}</td>
                                            <td>{data.dt}</td>
                                            <td>{data.name}</td>
                                            <td>{data.articleName}</td>
                                            <td>{data.type}</td>
                                        </tr>
                                    )}

                                </tbody>
                            </Table>
                        </Tab>

                        <Tab eventKey="ic" title="International Conference">
                        <br></br>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>S. No.</th>
                                        <th>Year</th>
                                        <th>Month</th>
                                        <th>Department</th>
                                        <th>Faculty</th>
                                        <th>Date From</th>
                                        <th>Date To</th>
                                        <th>Name</th>
                                        <th>Article Name</th>
                                        <th>Author Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {icData.map((data) =>

                                        <tr>
                                            <td>{data.key}</td>
                                            <td>{data.year}</td>
                                            <td>{data.month}</td>
                                            <td>{data.department}</td>
                                            <td>{data.faculty}</td>
                                            <td>{data.df}</td>
                                            <td>{data.dt}</td>
                                            <td>{data.name}</td>
                                            <td>{data.articleName}</td>
                                            <td>{data.type}</td>
                                        </tr>
                                    )}

                                </tbody>
                            </Table>
                        </Tab>

                        <Tab eventKey="ns" title="National Seminar">
                        <br></br>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>S. No.</th>
                                        <th>Year</th>
                                        <th>Month</th>
                                        <th>Department</th>
                                        <th>Faculty</th>
                                        <th>Date From</th>
                                        <th>Date To</th>
                                        <th>Name</th>
                                        <th>Article Name</th>
                                        <th>Author Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {nsData.map((data) =>
                                        <tr>
                                            <td>{data.key}</td>
                                            <td>{data.year}</td>
                                            <td>{data.month}</td>
                                            <td>{data.department}</td>
                                            <td>{data.faculty}</td>
                                            <td>{data.df}</td>
                                            <td>{data.dt}</td>
                                            <td>{data.name}</td>
                                            <td>{data.articleName}</td>
                                            <td>{data.type}</td>
                                        </tr>
                                    )}

                                </tbody>
                            </Table>
                    </Tab>
                        <Tab eventKey="is" title="International Seminar">
                        <br></br>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>S. No.</th>
                                        <th>Year</th>
                                        <th>Month</th>
                                        <th>Department</th>
                                        <th>Faculty</th>
                                        <th>Date From</th>
                                        <th>Date To</th>
                                        <th>Name</th>
                                        <th>Article Name</th>
                                        <th>Author Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {isData.map((data) =>
                                        <tr>
                                            <td>{data.key}</td>
                                            <td>{data.year}</td>
                                            <td>{data.month}</td>
                                            <td>{data.department}</td>
                                            <td>{data.faculty}</td>
                                            <td>{data.df}</td>
                                            <td>{data.dt}</td>
                                            <td>{data.name}</td>
                                            <td>{data.articleName}</td>
                                            <td>{data.type}</td>
                                        </tr>
                                    )}

                                </tbody>
                            </Table>
                    </Tab>
                        <Tab eventKey="workshop" title="Workshop">
                        <br></br>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>S. No.</th>
                                        <th>Year</th>
                                        <th>Month</th>
                                        <th>Department</th>
                                        <th>Faculty</th>
                                        <th>Date From</th>
                                        <th>Date To</th>
                                        <th>Name</th>
                                        <th>Article Name</th>
                                        <th>Author Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {workshopData.map((data) =>
                                        <tr>
                                            <td>{data.key}</td>
                                            <td>{data.year}</td>
                                            <td>{data.month}</td>
                                            <td>{data.department}</td>
                                            <td>{data.faculty}</td>
                                            <td>{data.df}</td>
                                            <td>{data.dt}</td>
                                            <td>{data.name}</td>
                                            <td>{data.articleName}</td>
                                            <td>{data.type}</td>
                                        </tr>
                                    )}

                                </tbody>
                            </Table>
                    </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
};
export default Publication;