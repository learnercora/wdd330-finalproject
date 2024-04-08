import { getLocalStorage, setLocalStorage, updateListBadge } from "./utils.mjs";

function recipeContent(id, recipe) {
  return `
    <section class="recipe-detail">
      <div class="recipe-detail__btn">
        <button id="back" onclick="history.back()">Back</button>
        <a href=${recipe.url} download="image_of_id_${id}" class="download-btn">
          <button id="download" data-id="${id}">DownLoad</button>
        </a>
        <button id="addToList" data-id="${id}">Add to Pocket</button>
      </div>
      <img
        src="${recipe.url}"
        alt="Recipe of id ${id}"
      />
    </section>
  `;
}

export default class recipeCardDetails {
  constructor(recipeId, dataSource) {
    this.recipeId = recipeId;
    this.dataSource = dataSource;
    this.recipeCard = {};
  }
  async init() {
    this.recipeCard = await this.dataSource.showRecipeImageById(this.recipeId);
    if (this.recipeCard) {
      this.renderRecipeCardDetails("main");
      document
        .getElementById("addToList")
        .addEventListener("click", this.addTolist.bind(this));
      updateListBadge();
    } else {
      history.back();
    }
  }
  addTolist() {
    let listItems = getLocalStorage("recipe-list");
    if (!Array.isArray(listItems)) {
      listItems = [];
    }
    if (!listItems.includes(this.recipeId)) {
      listItems.push(this.recipeId);
    }

    // Add new item to cart
    setLocalStorage("recipe-list", listItems);
    updateListBadge();
  }

  renderRecipeCardDetails(element) {
    let container = document.querySelector(element);
    let productForm = recipeContent(this.recipeId, this.recipeCard);
    container.innerHTML = productForm;
  }
}
