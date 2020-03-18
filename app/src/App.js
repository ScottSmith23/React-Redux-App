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
      <div class="wrapper">
  <div class="sliding-background"></div>
      <h1 className="headerTitle">😆Jokes🤣 </h1>
      <JokeForm fetchData={fetchData} isFetchingData={jokeData.isFetchingData} />
      <JokeList jokes={jokeData.jokes}/>
    </div>
    </div>
  );
}

export default App;
