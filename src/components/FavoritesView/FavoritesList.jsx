import { useSelector } from 'react-redux';

import FavoritesItem from "../FavoritesItem/FavoritesItem";

const FavoritesView = () => {
  // useSelector to get favorites list from store
  const FavoritesList = useSelector(store => store.FavoritesList);
  return (
    <>
      {/* map through favorites list and render to dom with FavoritesItem component */}
      {/* {favoritesList ? 
      favoritesList.map(favorite => (
        <div></div>
      )) : 
      <div>Loading</div>
    } */}
    </>
  )
}

export default FavoritesView;