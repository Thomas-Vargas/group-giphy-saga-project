import { useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";

function GifItem({ item }) {
  const dispatch = useDispatch();
  // add gif to favorites
  const favoriteGif = (item) => {
    console.log("in favoriteGif()");
    // dispatch to sagas with gif (name and url)
    dispatch({
      type: "ADD_TO_FAVORITES",
      payload: item,
    });
  };

  return (
    <div>
      <img src={item.images.original.url} />
      <FavoriteIcon className="favBtn" color="danger" onClick={() => favoriteGif(item)}>
        FAVORITE
      </FavoriteIcon>
    </div>
  );
}

export default GifItem;
