import {
  getLocalStorage,
  renderListWithTemplate,
  removeItemFromList,
} from "./utils.mjs";
import ExternalApi from "./ExternalApi.mjs";

function listItemTemplate(item) {
  const newItem = `
  <li class="recipe-card">
    <img
      src="${item.image}"
      alt="${item.title}"
    />
    <button class="remove-item" data-id="${item.id}">X</button>
    <a href="/recipe_page/?id=${item.id}" id=${item.id}>
      <h2 class="card__name">${item.title}</h2>
    </a>
    
  </li>`;

  return newItem;
}

export default class CollectedList {
  constructor(parent) {
    this.collectedItems = [];
    this.parentElement = parent;
  }

  async init() {
    this.getStoredIdList();
  }

  getStoredIdList() {
    const items = getLocalStorage("recipe-list");
    this.storedIdList = Array.isArray(items) ? items : [];
    this.getRecipeInfo(this.storedIdList);
  }
  async getRecipeInfo(listItems) {
    const dataSource = new ExternalApi();
    this.collectedItems = await Promise.all(
      listItems.map(async (id) => {
        const result = await dataSource.getRecipeInfo(id);
        return result;
      }),
    );
    this.renderCollectedList();
  }

  renderCollectedList() {
    this.parentElement.innerHTML = "";
    renderListWithTemplate(
      listItemTemplate,
      this.parentElement,
      this.collectedItems,
    );
    this.attachRemoveItemListeners();
  }

  attachRemoveItemListeners() {
    const removeButtons = document.querySelectorAll(".remove-item");
    removeButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const id = event.target.dataset.id;
        removeItemFromList(id);
        this.init();
      });
    });
  }
}
