import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
const AnalogDigital = () => {
    return (
        <div>
            <div style={{ margin: '30px', float: "left" }}>
                <h4 style={{ textDecoration: 'underline red' }}>Digital Communication (ODD)</h4>
                <div className="float-child1" style={{ width: '50%', padding: '20px' }}>
                    <Carousel fade>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="uploadedFiles\Labs/DC/img1.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="uploadedFiles\Labs/DC/img2.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="uploadedFiles\Labs/DC/img3.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="uploadedFiles\Labs/DC/img4.jpg"
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="float-child2" style={{ marginTop: '10px', width: '50%', padding: '20px' }}>
                    <p>The goal of this course is to give students hands-on experience in the design, configuration and evaluation of digital communication systems. The experiments designed have two parts- Hardware and Software (MATLAB based). In Hardware there are 6 experiments and in Software 3 experiments. The experiment cover topics like digital pulse modulation (Delta Modulation), PRBS generation and Line Coding Techniques ( Bipolar NRZ, Uni-polar RZ, Manchester), digital continuous wave modulation techniques ( BPSK, BFSK, ASK), carrier recovery for BPSK. In Software section first experiment is simulation of QAM/QPSK/BPSK modulation and demodulation through Simulink/ MATLAB script. Second one is about simulation of Linear Block Codes/ Repetition coding. Third one is a project based on Conventional coding with Viterbi decoding.</p>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles/Labs/DC/DC_Lab_Experiment_List.pdf">Experiments</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles/Labs/DC/DC_Lab_Schedule_2019.pdf">LAB Schedule</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles/Labs/DC/DC_Lab_Grading_Policy.pdf">Grading-Policy</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles/Labs/DC/CIF_Digital_Communication_Lab.pdf">CIF</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles/Labs/DC/DC_Lab_Handouts.pdf">Handouts</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles/Labs/DC/POLICY-AND-RULES-FOR-LABORATORY-EXERCISES.pdf">Policy and Rules</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles/Labs/DC/Facilities_ADC-Laboratory-Instruments.pdf">Facilities</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles/Labs/DC/Laboratory_Instructors.pdf">Instructors</a>
                    <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles/Labs/DC/ADC_Laboratory_instrument.pdf">ADC Laboratory Instrument</a>
                </div>
                <hr></hr>
            </div>


            <div style={{ margin: '30px', float: "left" }}>
                <h4 style={{ textDecoration: 'underline red' }}>Principles of Communication (EVEN)</h4>
                <div className="float-child1" style={{ width: '50%', padding: '20px' }}>
                    <Carousel fade>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="uploadedFiles\Labs/DC/img1.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="uploadedFiles\Labs/DC/img2.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="uploadedFiles\Labs/DC/img3.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="uploadedFiles\Labs/DC/img4.jpg"
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className="float-child2" style={{ marginTop: '10px', width: '50%', padding: '20px' }}>
                    
                        <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/POC/SSC_Lab_Expriment_List.pdf">Experiments</a>
                        <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/POC/SSC_Lab_Schedule_2020-SSC_Lab_2020-1.pdf">LAB Schedule</a>
                        <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/POC/SSC_Lab_Grading_Policy.pdf">Grading-Policy</a>
                        <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/POC/CIF_Signal_Systems_and_Communication_Lab.pdf">CIF</a>
                        <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/POC/SSC_Lab_Handouts.pdf">Handouts</a>
                        <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/POC/SSC_Laboratory_Instructors.pdf">Instructors</a>
                        <a style={{ width: 'fit-content' }} target="_blank" href="uploadedFiles\Labs/POC/ADC_Laboratory_instrument-1.pdf">Facilities/ADC Laboratory Instrument</a>

                    
                </div>
                <hr></hr>
            </div>
        </div>
    )
};

export default AnalogDigital;