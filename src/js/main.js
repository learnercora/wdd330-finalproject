import { loadHeaderFooter, setLocalStorage } from "./utils.mjs";
import SearchBar from "./searchBar";
import PageRef from "./pageRef";

loadHeaderFooter();

const searchBar = new SearchBar();
searchBar.init();

// setLocalStorage("page-offset", 0);
// const pageRef = new PageRef();
// pageRef.init();