import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import SearchBar from "./searchBar.mjs";

export default class PageRef {
  constructor() {
    this.currentPage = 1;
    this.offset = 0;
  }
  init() {
    setLocalStorage("page-offset", 0);
    this.createRef();
    this.pageRefListener();
    this.displayCurrentPage();
  }
  createRef() {
    const pageRefElement = document.querySelector(".page-ref");
    pageRefElement.innerHTML = `
    <div>Total Data:<span class="total-data"></span></div>
    <div>
      <button class="prev-page-btn"><</button>
      <span class="current-page"></span>
      <button class="next-page-btn">></button>
    </div>`;
  }

  pageRefListener() {
    document.querySelector(".prev-page-btn").addEventListener("click", (e) => {
      e.preventDefault();
      this.pageChange(-10);
      this.changeCurrentPage(-1);
    });
    document.querySelector(".next-page-btn").addEventListener("click", (e) => {
      e.preventDefault();
      this.pageChange(10);
      this.changeCurrentPage(1);
    });
  }
  pageChange(move) {
    this.offset += move;
    setLocalStorage("page-offset", this.offset);
    const searchBar = new SearchBar();
    searchBar.displaySearchList(getLocalStorage("query"));
    this.displayCurrentPage();
  }
  displayCurrentPage() {
    if (this.currentPage > 0) {
      document.querySelector(".current-page").innerHTML =
        this.currentPage.toString();
    }
  }
  changeCurrentPage(move) {
    this.currentPage += move;
    this.currentPage < 1 ? 1 : this.currentPage;
    this.displayCurrentPage();
  }
}
