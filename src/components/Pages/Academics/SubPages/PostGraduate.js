import React from 'react';
import Table from 'react-bootstrap/Table'
import '../styles.css'
import QuickLinks from './QuickLinks';
const PostGraduate = () => (
    <div class='float-contanier'>
        <div className="float-child1" style={{ marginTop: '10px', width: '200px', position: 'fixed' }}>
            <QuickLinks />
        </div>
        <div style={{ marginRight: '15px' }} className="search-results float-child2">
            <div>
                <h1 style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'red', color: 'white', padding: '5px', }}>Post Graduate</h1>
                <hr></hr>
                

                <p>
                M. Tech Programme students, irrespective of their discipline, must do a minimum of 32 credits through course work and a minimum of 36 credits through research (thesis) work. M. S. (by Research) Programme students, irrespective of their discipline, must do a minimum of 16 credits through course work and a minimum of 48 credits through research (thesis) work. PG Programme students come to LNMIIT from different institutions across India. Keeping their diversified background in mind LNMIIT PG Programmes offer 3 to 4 mandatory courses that will provide a common and strong foundation to all the students.<br></br>
                <br></br><b>Research work is carried out in the following fields (including but not limited to):</b><br></br>
                Communication and Signal Processing, Optical Communication, RF and Microwave, VLSI Design and Embedded Systems, Wireless Communication, Cognitive Radio, Sensor networks, Distributed systems etc.<br></br><br></br>
                <b>Mandatory Courses for M. Tech students of ECE discipline:</b><br></br>
                A students would be considered worthy of receiving M.Tech in ECE :<br></br>
                <ul>
                <li>He/she fulfills the credits requirements for each category</li>
                <li>He/she can take the PE from any of PE offered by the department.</li>
                <li>A student is free to choose thesis topic from any area of research offered by the department.</li>
                </ul>
                <br></br>
                The students should register for his/her courses in consultation of HoD (ECE)/ thesis supervisor. A student is free to take extra credits in PE and OE categories.
                <br></br><br></br>Structure of M. Tech in ECE Curriculum<br></br>
                <img src="uploadedFiles\ECE-Curriculum.jpg"></img><br></br>
                IC= Institute Core, PC=Programme Core, PE=Programme Elective, OE= Other Elective
                <br></br><br></br>M. Tech in ECE with Specialization Mobile Communication<br></br>
                <img src="uploadedFiles\Mobile-Communication.jpg"></img><br></br>
                <br></br>M. Tech students of ECE discipline can select a minimum of 16 credits from electives related to his / her area of research (thesis) work.
                <b><br></br><br></br>Mandatory Courses for M. S. students of ECE discipline (each 4 credits):<br></br></b><br></br>
                M. S. students of ECE discipline can select a minimum of 8 credits from electives related to his / her area of research (thesis) work. The duration of M.S. by Research is at least 2 years<br></br>
                <img src="uploadedFiles\ECE-discipline.jpg"></img><br></br><br></br>
                <b>Mandatory Courses for M. S. students of CCE discipline (each 4 credits):</b>
                <br></br><br></br>M. S. students of CCE discipline can select a minimum of 8 credits from electives related to his / her area of research (thesis) work. The duration of M.S. by Research is at least 2 years

                <br></br>
                <img src="uploadedFiles\CCE-discipline.jpg"></img><br></br>
                
                </p>
                <a style={{ textAlign: 'left' }} download href="uploadeFiles/ECE_PG_Curriculum_with_CIF.pdf">Semester-Wise Curriculum For PG in ECE Programme</a>    
            </div>
        </div>
    </div>
)

export default PostGraduate;