import React from 'react';
import GifList from '../GifList/GifList';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm';

function App(props) {

  const dispatch = useDispatch();


  return (
    <>
    <div>
      <h1>Giphy Search!</h1>
    </div>
    <SearchForm />
    <GifList />
    </>
  );
}

export default App;
