import { HashRouter as Router, Route, Link } from "react-router-dom";
import GifList from "../GifList/GifList";
import SearchForm from "../SearchForm/SearchForm";
import FavoritesView from "../FavoritesView/FavoritesList";

function App(props) {
  return (
    <>
      <div>
        <h1>Giphy Search!</h1>
        <Router>
          <Link to="/favorites">Favorites</Link>
        </Router>
        <Router>
          <Link to="/">Home</Link>
        </Router>
      </div>
      <Router>
        <Route path="/" exact>
          <SearchForm />
          <GifList />
        </Route>
        <Route path="/favorites">
          <FavoritesView />
        </Route>
      </Router>
    </>
  );
}

export default App;
