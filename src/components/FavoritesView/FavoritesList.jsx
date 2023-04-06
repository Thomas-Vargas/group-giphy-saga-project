import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import FavoritesItem from "../FavoritesItem/FavoritesItem";

const FavoritesView = () => {
  // useSelector to get favorites list from store
  const favoritesList = useSelector(store => store.favoriteList);
  const dispatch = useDispatch();
  console.log('Favorites list:' ,favoritesList);

  useEffect(() => {
    dispatch({type: 'GET_GIPHY'});
  }, []);

  return (
    <>
      {/* map through favorites list and render to dom with FavoritesItem component */}
      {favoritesList ? 
        favoritesList.map(favorite => (
          <div>
            <h1>{favorite.name}</h1>
          <img src={favorite.url} alt="" />
          </div>
      )) : 
      <div>Loading</div>
    }
    </>
  )
}

export default FavoritesView;