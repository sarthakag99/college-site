import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
const Electronics = () => {
    return (
        <div>
            <div style={{ margin: '30px', float: "left" }}>
                <h4 style={{ textDecoration: 'underline red' }}>Basic Electronics (ODD)</h4>
                <div className="float-child1" style={{ width: '50%', padding: '20px' }}>
                    <Carousel fade>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="uploadedFiles\Labs/BE/img1.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        
                    </Carousel>
                </div>
                <div className="float-child2" style={{ marginTop: '10px', width: '50%', padding: '20px' }}>
                    
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/BE/BE%20Lab%202020%20%20schedule.pdf">Lab Schedule</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/BE/BE%20Lab%20CIF%20(ECE106%20).pdf">CIF</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/BE/BE%20Lab%20Experiment%20list.pdf">Experiments List</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/BE/BE%20Lab%20Facilities.pdf">Facilities</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/BE/BE%20Lab%20Grading%20policy.pdf">Grading Policy</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/BE/BE%20Lab%20Instructors.pdf">Instructors</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/BE/BE%20Lab%20Manual.pdf">Manual</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/BE/BE%20Lab%20Policy%20and%20Guideline.pdf">Policy and Guideline</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/BE/ADC_Laboratory_instrument.pdf">ADC Laboratory Instrument</a>
                </div>
                <hr></hr>
            </div>
            


            <div style={{ margin: '30px', float: "left" }}>
                <h4 style={{ textDecoration: 'underline red' }}>Analog Electronics (EVEN)</h4>
                <div className="float-child1" style={{ width: '50%', padding: '20px' }}>
                    <Carousel fade>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="uploadedFiles\Labs/ANEL/img1.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        
                    </Carousel>
                </div>

                <div className="float-child2" style={{ marginTop: '10px', width: '50%', padding: '20px' }}>
                    
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/ANEL/ANEL%20Lab%20%20CIF.pdf">CIF</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/ANEL/ANEL%20Lab%20Experiment%20list.pdf">Experiment</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/ANEL/ANEL%20Lab%20Facilities.pdf">Facilities</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/ANEL/ANEL%20Lab%20Grading%20policy.pdf">Grading policy</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/ANEL/ANEL%20Lab%20Instructors.pdf">Instructors</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/ANEL/ANEL%20Lab%20Manual.pdf">Manual</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/ANEL/ANEL%20Lab%20Policy%20and%20Guideline.pdf"> Policy and Guideline</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/ANEL/ANEL%20Lab%20Schedule.pdf">Lab Schedule</a>

                </div>
                <hr></hr>
            </div>
        </div>
    )
};

export default Electronics;