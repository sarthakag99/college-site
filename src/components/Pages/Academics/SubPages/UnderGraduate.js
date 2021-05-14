import React from 'react';
import Table from 'react-bootstrap/Table'
import '../styles.css'
import QuickLinks from './QuickLinks';
const UnderGraduate = () => (
    <div class='float-contanier'>
        {/* <div className="float-child1" style={{ marginTop: '10px', width: '200px', position: 'fixed' }}>
            <QuickLinks />
        </div> */}
        <div style={{ marginRight: '15px' }} className="search-results float-child2">
            <div>
                <h1 style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'red', color: 'white', padding: '5px', }}>Under Graduate</h1>
                <hr></hr><br></br>
                <h3 style={{ textDecoration: 'underline red' }}>Department currently offers following Under-graduate Programmes</h3>

                <p>
                    B.Tech. (4 years) <br></br>
                    B.Tech. - M.Tech. Dual degree (5 years)<br></br>
                    The curriculum of each Programme consists of a mixture of well thought out courses in the following broad categories: Language, Mathematics, Science, Engineering Science, Humanities/Social Sciences/Management, Professional Courses, Elective Courses, Laboratory Courses, Project Courses. A semester-wise structure of the curriculum for each Programme, currently being followed, is given in below. However, the semester-wise structure is not followed rigidly. In fact, the students are encouraged to change the structure of their curriculum,to the extent feasible and desirable, to accommodate their own aspirations. The curriculum of every academic Programme is reviewed,periodically, with a view to incorporate the latest advances pertaining to the Programme.
                </p>
                <h3 style={{ textDecoration: 'underline red' }}>Credit Structure</h3>
                <div >
                    
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th></th>
                                <th>B.Tech.ECE (credits)</th>
                                <th>B.Tech.CCE (credits)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Compulsory Core Courses (excluding Englishcourse)</td>
                                <td>47</td>
                                <td>48</td>
                            </tr>
                            <tr>
                                <td>HSS (mostly electives, including English course)</td>
                                <td>12</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Compulsory Technical Coursesn</td>
                                <td>70</td>
                                <td>77</td>
                            </tr>
                            <tr>
                                <td>Programme Electives</td>
                                <td>18</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>Other Electives</td>
                                <td>12</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>BTP</td>
                                <td>6</td>
                                <td>6</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>Total Credits</th>
                                <th>165</th>
                                <th>161</th>
                            </tr>
                        </thead>
                    </Table>
                </div>

                <h3 style={{ textDecoration: 'underline red' }}>Semester Wise Curriculum</h3>
                <ul>
                    <a style={{ textAlign: 'left' }} download href="uploadedFiles\ECE-UG-Curiculum-Y17.xlsx">B.Tech. ECE</a>
                    <a style={{ textAlign: 'left' }} href="uploadedFiles\CCE_UG_Curiculum.xlsx">B.Tech. CCE</a>
                </ul>
            </div>
        </div>
    </div>
)

export default UnderGraduate;