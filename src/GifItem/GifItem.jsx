import { useDispatch } from "react-redux";

function GifItem({item}) {
    const dispatch = useDispatch();

    // TODO: add gif to favorites
    const favoriteGif = (item) => {
        console.log('in favoriteGif()');
        // dispatch to sagas with gif (name and url)
        dispatch({
            type: "ADD_TO_FAVORITES",
            payload: item
        });
    }

    return(
        <div>
            <img src={item.url} />
            <button className="favBtn" onClick={() => favoriteGif(item)}>FAVORITE</button>
        </div>
    )
}

export default GifItem;