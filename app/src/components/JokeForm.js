import React from "react";

const JokeForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.fetchData();
  };
  return (
    <>
      {props.isFetchingData ? (
        <div>we are fetching data</div>
      ) : (
        <button className="buttonGet" onClick={handleGetData}>Get Jokes!</button>
      )}
    </>
  );
};


export default JokeForm
