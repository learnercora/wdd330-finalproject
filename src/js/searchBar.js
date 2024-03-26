export default class SearchBar {
    constructor() {
    }
    init() {
      this.SearchBarListerner();
    }
  
    SearchBarListerner() {
      document.querySelector("#search-input").addEventListener("keypress", (e) => {
        // e.preventDefault();
        if(e.key == "Enter"){
            console.log("input",e.target.value)
        }
      });
      document.querySelector("#search-btn").addEventListener("click", (e) => {
        // e.preventDefault();
        const inputValue = e.target.closest("div").querySelector("input").value;
        console.log("inputValue",inputValue);
      });
    }
  }
  