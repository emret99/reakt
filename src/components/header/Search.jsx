import "./search.scss";
import logo from '../../assets/search.svg';

function Search() {
  return (
    <button id="search-input">
        <img id="search-logo" src={logo} alt="" />
        <span>Search</span>
    </button>
  )
}

export default Search;