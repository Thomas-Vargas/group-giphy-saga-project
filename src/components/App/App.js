import FavoritesItem from '../FavoritesItem/FavoritesItem';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import GifList from '../GifList/GifList';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm';
import FavoritesView from '../FavoritesView/FavoritesList';

function App(props) {

  const dispatch = useDispatch();


  return (
    <>
    <div>
      <h1>Giphy Search!</h1>
    </div>
    <Router>
      <Route path='/' exact>
        <SearchForm />
        <GifList />
      </Route>
      <Route path='/favorites'>
        <FavoritesView />
      </Route>
    </Router>
    </>
  );
}

export default App;