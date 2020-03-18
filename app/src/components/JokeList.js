import React from "react";
import JokeCard from './JokeCard'

const JokeList = props => {


  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.jokes.map(joke =>
             <JokeCard joke={joke}/>
             )
      )}
    </>
  );
};

export default JokeList;
