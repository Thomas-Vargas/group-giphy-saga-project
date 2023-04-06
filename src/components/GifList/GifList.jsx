import GifItem from "../../GifItem/GifItem";
import { useSelector } from "react-redux";

function GifList() {
    //import GifList from reducer
    const gifList = useSelector((store) => store.gifList);
    console.log(gifList);
    
    return (
        <div className="gifList">
            {gifList.data[0].title ? gifList.data.map((item) => (
                <GifItem key={item.id} item={item} />
            )):<div></div>}
        </div>
    )
}

export default GifList;