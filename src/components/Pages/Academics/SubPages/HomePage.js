import React from 'react';
import Table from 'react-bootstrap/Table'
import '../styles.css'
import QuickLinks from './QuickLinks';
const Homepage = () => (
    <div class='float-contanier'>
        {/* <div className="float-child1" style={{ marginTop: '10px', width: '200px', position: 'fixed' }}>
            <QuickLinks/>
        </div> */}
        <div style={{ marginRight: '15px'}} className="search-results float-child2">
            <div>
                <h1 style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'red', color: 'white', padding: '5px', }}>Welcome to ECE</h1>
                <hr></hr><br></br>
                <h3 style={{ textDecoration: 'underline red' }}>Vision :</h3>
                
                <p>
                    To become a unique and top-notch Department in the area of Electronics and Communication Engineering in the country, through pioneering excellence in teaching, research and scholarship.
                </p>
                <h3 style={{ textDecoration: 'underline red' }}>Mission :</h3>
                <p>
                    <ul>
                        <li>To impart, both in depth and content, the basic fundamental knowledge and understanding in the area of Electronics and Communication Engineering.</li>
                        <li>To keep students fully tuned to the pace of growth of the modern trends of technology and their applications along with the challenging issues.</li>
                        <li>To motivate students toward developing innovative approaches to learning and toward applying scientific and engineering skills for providing solutions to real-life challenges relevant to the societal and industry needs of the country.</li>
                        <li>To motivate students and faculty to pursue higher research and to become an integral part of the process of conducting collaborative research.</li>
                        <li>To promote life-long learning, and to preserve academic freedom, honesty and justice.</li>
                    </ul>
                </p>
               
                <h3 style={{ textDecoration: 'underline red' }}>Objectives :</h3>
                <p>
                    <ul>
                        <li>To consolidate the Undergraduate (UG) Programme through innovative curriculum planning and advanced laboratory development.</li>
                        <li>To expand and diversify the scope of Post-graduate (PG) Programme.</li>
                        <li>To strengthen the Ph.D. Programme in core and interdisciplinary areas.</li>
                        <li>To strengthen the Faculty Development Programme.</li>
                        <li>To institute rigorous Academic Audit by external/internal agencies.</li>
                        <li>To organize national/international conferences/workshops on a regular basis.</li>
                        <li>To encourage faculty to get more involved in executing sponsored/consultancy projects from Government/industry/other funding agencies.</li>
                        <li>To explore more opportunities for bilateral collaboration with reputed organizations in India and abroad.</li>
                        <li>To nurture and build up a strong and coherent teacher-student relationship within the department.</li>
                        <li>To encourage and enhance the skill development activities for students.</li>
                    </ul>
                </p>
            </div>


            {/* <div id="timeTable">
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
            </div> */}
            {/* <div id="directory">

                <h1 style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'red', color: 'white', padding: '5px', }}>Departmental Directory</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>NAME</th>
                            <th>DESIGNATION</th>
                            <th>CABIN/ BLOCK</th>
                            <th>INTER No.</th>
                            <th>QTR. No.</th>
                            <th>Residence Ext.</th>
                            <th>Domain Email-ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Prof. Raghuvir Tomar</td>
                            <td>Professor</td>
                            <td>1107</td>
                            <td>1201</td>
                            <td></td>
                            <td></td>
                            <td>rtomar@lnmiit.ac.in</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Prof. R. Gangopadhyay</td>
                            <td>Distinguished Professor</td>
                            <td>1112</td>
                            <td>1202</td>
                            <td>C-03</td>
                            <td>5202</td>
                            <td>ranjan@lnmiit.ac.in</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Dr. Soumitra Debnath</td>
                            <td>Associate Professor</td>
                            <td>1114</td>
                            <td>1203</td>
                            <td>C-04</td>
                            <td>5203</td>
                            <td>soumitra@lnmiit.ac.in</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Mr. Sandeep Saini</td>
                            <td>Assistant Professor</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>sandeep.saini@lnmiit.ac.in</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Mr. Purnendu Karmakar	</td>
                            <td>Assistant Professor</td>
                            <td>1043</td>
                            <td>1206</td>
                            <td>St-403</td>
                            <td>5206</td>
                            <td>purnendu.karmakar@lnmiit.ac.in</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Mr. Kapil Jainwal</td>
                            <td>Assistant Professor</td>
                            <td>1105</td>
                            <td>1207</td>
                            <td>St-303</td>
                            <td>5207</td>
                            <td>kapil.jainwal@lnmiit.ac.in</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Dr. Kusum Lata</td>
                            <td>Assistant Professor</td>
                            <td>1046</td>
                            <td>1208</td>
                            <td>St-204</td>
                            <td>5208</td>
                            <td>kusum@lnmiit.ac.in</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Dr. Divyang Rawal</td>
                            <td>Assistant Professor</td>
                            <td>1101</td>
                            <td>1210</td>
                            <td></td>
                            <td></td>
                            <td>divyang.rawal@lnmiit.ac.in</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Dr. Abhishek Sharma</td>
                            <td>Assistant Professor</td>
                            <td>1115</td>
                            <td>1211</td>
                            <td>St-202</td>
                            <td>5211</td>
                            <td>abhisheksharma@lnmiit.ac.in</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Dr. Navneet Upadhyay</td>
                            <td>Assistant Professor</td>
                            <td>1103</td>
                            <td>1216</td>
                            <td></td>
                            <td></td>
                            <td>nupadhyay@lnmiit.ac.in</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Dr Deepak Nair</td>
                            <td>Assistant Professor</td>
                            <td>1045</td>
                            <td>1212</td>
                            <td></td>
                            <td></td>
                            <td>deepak.nair@lnmiit.ac.in</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Dr. Santosh Shah</td>
                            <td>Assistant Professor</td>
                            <td>1102</td>
                            <td>1213</td>
                            <td></td>
                            <td></td>
                            <td>santosh.shah@lnmiit.ac.in</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Dr.Nikhil Sharma</td>
                            <td>Assistant Professor</td>
                            <td>1113</td>
                            <td>1214</td>
                            <td></td>
                            <td></td>
                            <td>nikhil.sharma@lnmiit.ac.in</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Dr.Joyeeta Singha</td>
                            <td>Assistant Professor</td>
                            <td>1106</td>
                            <td>1215</td>
                            <td>St-301</td>
                            <td>5215</td>
                            <td>joyeeta.singha@lnmiit.ac.in</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Dr. Kanjalochan Jena</td>
                            <td>Assistant Professor</td>
                            <td>1106</td>
                            <td>1209</td>
                            <td></td>
                            <td></td>
                            <td>kanjalochan.jena@lnmiit.ac.in</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>Dr. Gaurav Chatterjee</td>
                            <td>Assistant Professor</td>
                            <td>1042</td>
                            <td>1205</td>
                            <td></td>
                            <td></td>
                            <td>gaurav.chatterjee@lnmiit.ac.in</td>
                        </tr>
                    </tbody>
                </Table>
            </div> */}
            {/* <div id="events">
                <h1 style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'red', color: 'white', padding: '5px', }}>Conferences Workshops organized / planned</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title of the event</th>
                            <th>Duration</th>
                            <th>Conference/ Workshop	</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Emerging Technologies for Next-Generation 5G</td>
                            <td>April 2018</td>
                            <td>Workshop</td>
                            <td>National</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Advances in Embedded and VLSI Design</td>
                            <td>29th March to 2nd April 2018</td>
                            <td>Workshop</td>
                            <td>National</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Summer Internship cum Training Programme on VLSI and Embedded Systems Design</td>
                            <td>June 19 to July 14, 2017</td>
                            <td>Workshop</td>
                            <td>National</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>5th International Conference on ‘Advances in Computing, Communications and Informatics’.</td>
                            <td>September 21-24, 2016</td>
                            <td>Conference</td>
                            <td>International</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>ASIC Design Flow Using Mentor Graphics Tools</td>
                            <td>August 30-31, 2016</td>
                            <td>Workshop</td>
                            <td>National</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Summer Internship cum Training Programme on VLSI and Embedded Systems Design</td>
                            <td>June 13 to July 10, 2016	</td>
                            <td>Workshop</td>
                            <td>National</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>IEEE All India Student Young Professionals WIE Congress 2016 (AISYWC)	</td>
                            <td>October 07-09, 2016</td>
                            <td>Conference</td>
                            <td>National</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>VESD 2015</td>
                            <td>April 201826-28 December 2015</td>
                            <td>Workshop</td>
                            <td>National</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Workshop on Modeling, Simulation, and Computational Techniques (WMSC),</td>
                            <td>January 15 – January 17, 2015</td>
                            <td>Conference</td>
                            <td>National</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Workshop on Antennas and RF Systems</td>
                            <td>March 24-25, 2012</td>
                            <td>Workshop</td>
                            <td>National</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Wireless and Personal Media Communication Conference (WPM)</td>
                            <td>December 03-06, 2007</td>
                            <td>Conference</td>
                            <td>National</td>
                        </tr>
                    </tbody>
                </Table>
            </div> */}


            {/* <div id="contact">
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
            </div> */}

        </div>
    </div>
)
export default Homepage;