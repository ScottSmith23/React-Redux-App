import React, { useState } from "react";
import {
    Card,
    Button,
    CardHeader,
    CardBody,
    CardText,
    Col,
    Collapse
  } from "reactstrap";


const JokeCard = ({joke}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div><Col xs="5" md="5" xl="5">
           <Card style={{backgroundColor:`DARKSLATEGREY`,borderRadius:`30px`}} >
             <CardHeader>{joke.setup}</CardHeader>
             <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem',marginTop:"1rem",backgroundColor:"orange" }}>Show PunchLine</Button>
             <Collapse isOpen={isOpen} style={{color:`KHAKI`}}>
               <CardText>{joke.punchline}</CardText>
               </Collapse>
           </Card>
         </Col></div>
    </>
  );
};


export default JokeCard
