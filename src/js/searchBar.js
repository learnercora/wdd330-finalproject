import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import SearchRecipelist from "./searchRecipeList";
import ExternalApi from "./externalApi.mjs";
import PageRef from "./pageRef";

export default class SearchBar {
  constructor() {
    this.query = getLocalStorage("query") || "";
  }
  init() {
    setLocalStorage("page-offset", 0);
    this.searchBarListener();
    if(this.query !== ""){
        this.displaySearchList(this.query);
        const pageRef = new PageRef();
        pageRef.init();
    }
  }

  searchBarListener() {
    document.querySelector("#search-input").addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            const value = e.target.value;
            this.resetData(value);
            this.displaySearchList(value);
        }
      });
    document.querySelector("#search-btn").addEventListener("click", (e) => {
        const value = e.target.closest("div").querySelector("input").value;
        this.resetData(value);
        this.displaySearchList(value);
    });
  }
  displaySearchList(query){
    const searchRecipeListElement = document.querySelector(".search-recipe-list");
    const dataSource = new ExternalApi();        
    const searchRecipeList = new SearchRecipelist(dataSource, searchRecipeListElement);
    searchRecipeList.init();
  }
  resetData(value){
    setLocalStorage("query", value);
    setLocalStorage("page-offset", 0);
    const pageRef = new PageRef();
    pageRef.init();
  }
  

}
