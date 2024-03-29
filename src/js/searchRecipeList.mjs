import { renderListWithTemplate } from "./utils.mjs";

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
    const list = await this.dataSource.getData();
    this.renderList(list);
  }
  renderList(list) {
    renderListWithTemplate(recipeCardTemplate, this.listElement, list, "afterbegin", true);
  }
}
