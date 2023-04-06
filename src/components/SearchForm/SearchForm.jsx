import { useState } from "react";
import { useDispatch } from "react-redux";

function SearchForm() {
    console.log('SearchForm running');

    // to collect input value
    const [searchInput, setSearchInput] = useState('');

    // dispatch
    const dispatch = useDispatch();

    const handleClick = () => {
        if(searchInput == '') {
            alert('Please enter a search value into the input field');
        } else {
            // send dispatch to Saga
                // payload should be a string which will be added to API call to GIPHY Api
            dispatch({
                type: 'SEARCH_INPUT',
                payload: searchInput
            });
            // to clear inputs
            setSearchInput('');
        }
    }

    return(
        <>
            <input type='text' value={searchInput} onChange={(event) => {setSearchInput(event.target.value)}} />
            <button onClick={handleClick}>Search</button>
        </>
    )
}

export default SearchForm;