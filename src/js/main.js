import { loadHeaderFooter, setLocalStorage } from "./utils.mjs";
import SearchBar from "./searchBar.mjs";
// import PageRef from "./pageRef.mjs";

loadHeaderFooter();

const searchBar = new SearchBar();
searchBar.init();

// setLocalStorage("page-offset", 0);
// const pageRef = new PageRef();
// pageRef.init();