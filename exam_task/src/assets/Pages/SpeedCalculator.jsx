import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
export default function SpeedCalculator() {

    const [distance,setDistance]=useState(0)
    const [time,setTime]=useState(0)
    const [speed,setSpeed]=useState(0)
    const calculateSpeed=()=>{
        const t=parseFloat(distance)
        const d=parseFloat(time)
        if(t>0){
          setSpeed(speed=d/t)
        }
        else{
          setSpeed(0)
        }
        
    }
  return (
    <div>
      <Form >
      <Row>
        <Col>
          <Form.Control onChange={(e)=>setDistance(e.target.value)} placeholder="Enter Distance " />
        </Col>
        <Col>
          <Form.Control onChange={(e)=>setTime(e.target.value)} placeholder="Enter Time" />
        </Col>
        <Col>
          <Button variant="primary" onClick={calculateSpeed}>
        Calculate
      </Button>
        </Col>
      </Row>
    </Form>
    <div className="mt-3">
      <h3>Speed: {speed}</h3>
    </div>
    </div>
  )
}
