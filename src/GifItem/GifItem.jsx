import { useDispatch } from "react-redux";
import { useState } from "react";

function GifItem({item}) {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState();
    console.log(item);
    // TODO: add gif to favorites
    const favoriteGif = (item) => {
        console.log('in favoriteGif()');
        setToggle(true);
        // dispatch to sagas with gif (name and url)
        dispatch({
            type: "ADD_TO_FAVORITES",
            payload: item
        });
    }

    return(
        <div>
            <img src={item.images.original.url} />
            <button className="favBtn" onClick={() => favoriteGif(item)}>FAVORITE</button>
        </div>
    )
}

export default GifItem;
