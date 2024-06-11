import "./search.scss";
import logo from '../../assets/search.svg';

function Search({overlay,setOverlay}) {
  function handleScroll() {
    window.oncroll=()=>{
      
      window.scrollTo(0,0);
      }
    setOverlay(true);
    
  }
  return (
    <button onClick={handleScroll} id="search-input">
        <img id="search-logo" src={logo} alt="" />
        <span>Search</span>
    </button>
  )
}

export default Search;