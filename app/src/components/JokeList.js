import React from "react";

const JokeList = props => {
  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.jokes.map(joke => <div>{joke.setup}</div>)
      )}
    </>
  );
};

export default JokeList;
