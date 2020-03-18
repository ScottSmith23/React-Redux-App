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
      <div className="jokeCard"><Col >
           <Card className="cardstyle" >
             <CardHeader className="setup">{joke.setup}</CardHeader>
             <CardBody>
             <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem',marginTop:"1rem",backgroundColor:"orange" }}>Show PunchLine</Button>
             <Collapse isOpen={isOpen} style={{color:`KHAKI`}}>
               <CardText>{joke.punchline}</CardText>
               </Collapse>
               </CardBody>
           </Card>
         </Col></div>
    </>
  );
};


export default JokeCard
