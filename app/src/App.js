import React, { useCallback } from 'react';
import JokeForm from './components/JokeForm';
import JokeList from './components/JokeList';
import {getData} from './actions/actions';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const jokeData = useSelector(state => state)
  const dispatch = useDispatch()
  const fetchData = useCallback((e)=>dispatch(getData(e)),[dispatch])
  return (
    <div className="App">
      Jokes 
      <JokeForm fetchData={fetchData} isFetchingData={jokeData.isFetchingData} />
      <JokeList jokes={jokeData.jokes}/>
    </div>
  );
}

export default App;
