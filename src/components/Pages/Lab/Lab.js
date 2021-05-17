import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import AnalogDigital from './AnalogDigital';
import Ecad from './Ecad';
import Microwave from './Microwave';
import Microprocessor from './Microprocessor';
import Dsp from './Dsp';
import Electronics from './Electronics';
const Lab = () => {
    const [key, setKey] = useState('analogdigital');
    return (
        <div style={{ padding: "30px" }}>
            <h1 style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: 'red', color: 'white', padding: '5px', }}>Labs</h1>
            <hr></hr><br></br>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >

                <Tab eventKey="analogdigital" title="Analog and Digital Communication"><br></br>
                    <AnalogDigital />
                </Tab>
                <Tab eventKey="electonics" title="Electronics"><br></br>
                    <Electronics />
                </Tab>
                <Tab eventKey="dsp" title="Digital Signal Processing"><br></br>
                    <Dsp />
                </Tab>
                <Tab eventKey="microprocessor" title="Microprocessor"><br></br>
                    <Microprocessor />
                </Tab>
                <Tab eventKey="microwave" title="Microwave and RF"><br></br>
                    <Microwave />
                </Tab>
                <Tab eventKey="ecad" title="E-CAD"><br></br>
                    <Ecad />
                </Tab>
            </Tabs>


        </div>
    )
}

export default Lab;
