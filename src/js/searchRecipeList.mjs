import { renderListWithTemplate, setLocalStorage } from "./utils.mjs";
import PageRef from "./pageRef.mjs";
import PageTotalData from "./pageTotalData.mjs";

function recipeCardTemplate(recipe) {
  return `
  <li class="recipe-card">
    <a href="/recipe_page/?id=${recipe.id}">
      <img
        src="${recipe.image}"
        alt="${recipe.title}" />
      <h2 class="card_title">${recipe.title}</h2>
    </a>
  </li>
`;
}

export default class SearchRecipeList {
  constructor(dataSource, listElement) {
    this.dataSource = dataSource;
    this.listElement = listElement;
  }
  async init() {
    const response = await this.dataSource.getData();
    this.renderList(response.results);
    setLocalStorage("total-data", response.totalResults);
    const pageTotalData = new PageTotalData(response.totalResults);
    pageTotalData.init();
  }
  renderList(list) {
    renderListWithTemplate(recipeCardTemplate, this.listElement, list, "afterbegin", true);
  }
}
