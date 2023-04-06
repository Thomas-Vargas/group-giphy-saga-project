import React from 'react';
import GifList from '../GifList/GifList';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

function App(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SEARCH_INPUT",
      //add later
    })
  }, [])
  return (
    <>
    <div>
      <h1>Giphy Search!</h1>
    </div>
    <GifList />
    </>
  );
}

export default App;
