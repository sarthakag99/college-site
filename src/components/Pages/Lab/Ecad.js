import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
const Ecad = () => {
    return (
        // <div>
        //     <h4 style={{ textDecoration: 'underline red' }}>DCS (ODD)</h4>
        //     <h4 style={{ textDecoration: 'underline red' }}>Design Lab-2 (EVEN)</h4>
        // </div>



        <div>
            <div style={{ margin: '30px', float: "left" }}>
                <h4 style={{ textDecoration: 'underline red' }}>Digital Circuits and Systems (ODD)</h4>
                <div className="float-child1" style={{ width: '50%', padding: '20px' }}>
                    <Carousel fade>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="uploadedFiles\Labs/MP/img1.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="uploadedFiles\Labs/MP/img2.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>

                    </Carousel>
                </div>
                <div className="float-child2" style={{ marginTop: '10px', width: '50%', padding: '20px' }}>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/DCS/ecad_CIF_DCS_LAB.pdf">CIF</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/DCS/ecad_DCS_odd-Lab-List-of-Experiments.pdf">Experiment List</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/DCS/ecad_DCS_A_Brief_Introduction_About_Vivado.pdf">Lab Manual</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/DCS/ECAD_DCS_LAB_FACILITIES.pdf">Facilities</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/DCS/ecad_DCS_Lab_Grading-Policy.pdf">Grading Policy</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/DCS/ecad_DCS_LAB_Schedule.pdf">Schedule</a>
                     

                </div>
                <hr></hr>
            </div>



            <div style={{ margin: '30px', float: "left" }}>
                <h4 style={{ textDecoration: 'underline red' }}>Design Lab-2 (EVEN)</h4>
                <div className="float-child1" style={{ width: '50%', padding: '20px' }}>
                    <Carousel fade>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="uploadedFiles\Labs/DSP/img1.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>

                    </Carousel>
                </div>

                <div className="float-child2" style={{ marginTop: '10px', width: '50%', padding: '20px' }}>

                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/DL2/DL-II%20LIST_EXPERIMENTS.pdf">Experiments</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/DL2/Design%20Lab-2%20lab%20Schedule_2019-20.pdf">Lab Schedule</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/DL2/Designlab2_CIF.pdf">CIF</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/DL2/HANDOUTS%20ALL%20DL-II.pdf">Handouts</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/DL2/DL-II%20LAB%20INSTRUCTORS.pdf">Instructors</a>

                </div>
                <hr></hr>
            </div>

        </div>
    )
};

export default Ecad;