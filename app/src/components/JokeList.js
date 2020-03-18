import React from "react";
import JokeCard from './JokeCard'

const JokeList = props => {


  return (
    <><div className="jokes">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.jokes.map(joke =>
             <JokeCard joke={joke}/>
             )
      )}
   </div> </>
  );
};

export default JokeList;
