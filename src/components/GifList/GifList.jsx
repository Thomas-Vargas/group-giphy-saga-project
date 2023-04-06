import GifItem from "../../GifItem/GifItem";

function GifList() {
    //import GifList from reducer
    
    return (
        <div className="gifList">
            {GifList.map((item) => {
                <GifItem key={item.id} item={item} />
            })}
        </div>
    )
}

export default GifList;