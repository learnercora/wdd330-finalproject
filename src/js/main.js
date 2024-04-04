import { loadHeaderFooter, setLocalStorage } from "./utils.mjs";
import SearchBar from "./searchBar.mjs";

loadHeaderFooter();

const searchBar = new SearchBar();
searchBar.init();
