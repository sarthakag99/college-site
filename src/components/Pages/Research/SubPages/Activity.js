import React from 'react';
import Table from 'react-bootstrap/Table'
import '../styles.css'
import activityData from './Data/activityData';
import patentsData from './Data/patentsData';

const Activity = () => {

    return (

        <div class='float-contanier'>
            {/* <div className="float-child1" style={{ marginTop: '10px', width: '200px', position: 'fixed' }}>
            <QuickLinks />
        </div> */}
            <div style={{ marginRight: '15px' }} className="search-results float-child2">
                <div>
                    <h1 style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'red', color: 'white', padding: '5px', }}>Research Activity  </h1>
                    <hr></hr><br></br>
                    <h3 style={{ textDecoration: 'underline red' }}>Workshops, Symposia, and Conferences Organized (In last 4 years)</h3>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Title of the Event</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activityData.map((data) =>

                                <tr>
                                    <td>{data.title}</td>
                                    <td>{data.duration}</td>

                                </tr>
                            )}

                        </tbody>



                    </Table>
                    <h3 style={{ textDecoration: 'underline red' }}>Faculty Research Collaborations</h3>
                    <p>
                        A significant fraction of faculty members has international exposure. Well-known international organizations which are connected to LNMIIT through joint research collaborations include NATEL Engineering Co. Inc. (California, U.S.A.), Scuola Superiore Sant'Anna (SSSUP, Pisa, Italy), CERN (Geneva, Switzerland) and National Ilan University (NIU, Taiwan). On a national level, joint research collaborations with IIT Delhi, IRPE Kolkata, NERIST (Arunachal Pradesh), Physical Research Laboratory (Ahmedabad), VNIT (Nagpur), RRCAT (Indore), and IIT Bombay are in progress.
                </p>
                    <h3 style={{ textDecoration: 'underline red' }}>Patents</h3>
                    <p>The Institute encourage its faculty and financially supports the filing of patents. As of now, 8 patents have been filed by Dr. Somnath Biswas, 4 patents by Prof. Ravi P. Gorthi and 1 patent by Dr. Abhishek Sharma. Three more proposals for filing patent has been submitted to DST, Rajasthan.</p>
                    <div >

                        <Table striped bordered hover size="sm">
                            <tbody>
                                {patentsData.map((data) =>

                                    <tr>
                                        <td>{data.key}</td>
                                        <td>{data.description}</td>

                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activity;