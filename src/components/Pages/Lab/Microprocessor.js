import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
const Microprocessor = () => {
    return (
        // <div>
        //     <h4 style={{ textDecoration: 'underline red' }}>Microprocessor and Interface (ODD)</h4>
        //     <h4 style={{ textDecoration: 'underline red' }}>Embedded Systems (EVEN)</h4>
        //     <h4 style={{ textDecoration: 'underline red' }}>Internet of Things Lab (EVEN)</h4>
        // </div>

        <div>
            <div style={{ margin: '30px', float: "left" }}>
                <h4 style={{ textDecoration: 'underline red' }}>Microprocessor and Interface (ODD)</h4>
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
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/MP/ECE_MICROI_LAB_%20CIF.pdf">CIF</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/MP/Microprocessor_lab_Experiment_list.pdf">Experiment List</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/MP/Microprocessor_LAb_manual_For_8085.pdf">Lab Manual</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/MP/Microprocessor_Laboratory_Facilities.pdf">Facilities</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/MP/Microprocessor_Laboratory_Grading_Policy.pdf">Grading Policy</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/MP/Microprocessor_Laboratory_Instructore.pdf">Instructors</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/MP/Microprocessor_Laboratory_Schedule.pdf">Lab Schedule</a>

                </div>
                <hr></hr>
            </div>



            <div style={{ margin: '30px', float: "left" }}>
                <h4 style={{ textDecoration: 'underline red' }}>Internet of Things Lab (EVEN)</h4>
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

                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/IOT/Internet_of_Things_Laboratory_Experiment_list.pdf">Experiments</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/IOT/Internet_of_Things_Laboratory_Schedule.pdf">Lab Schedule</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/IOT/Internet_of_Things_Laboratory_Grading_Policy.pdf">Grading-Policy</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/IOT/Internet_of_Things_Laboratory_Facilities.pdf">Facilities</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/IOT/Internet_of_Things_Lab_manual.pdf">Lab Manual</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/IOT/Internet_of_Things_Laboratory_Instructore.pdf">Instructors</a>

                </div>
                <hr></hr>
            </div>

        </div>
    )
};

export default Microprocessor;