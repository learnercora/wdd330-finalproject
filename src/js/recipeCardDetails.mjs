import {
  getLocalStorage,
  setLocalStorage,
  updateListBadge,
} from "./utils.mjs";
// import Carousel from "./carousel.mjs";


function recipeContent(id, recipe) {
  return `
    <section class="recipe-detail">
      <div class="recipe-detail__btn">
        <button id="back" onclick="history.back()">Back</button>
        <a href=${recipe.url} download>
          <button id="download" data-id="${id}">DownLoad</button>
        </a>
        <button id="addToList" data-id="${id}">Add to List</button>
      </div>
      <img
        class="divider"
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
    // this.recipeCard = await this.dataSource.showRecipeImageById(this.recipeId);
    this.recipeCard = {
      url: "https://spoonacular.com/recipeCardImages/recipeCard-1711511413999.png", 
      status: "success",
      time: "859ms"
    }
    // console.log(this.recipeCard)
    this.renderRecipeCardDetails("main");
    document
      .getElementById("addToList")
      .addEventListener("click", this.addTolist.bind(this));
    updateListBadge();
  }
  addTolist() {
    let listItems = getLocalStorage("recipe-list");
    console.log(listItems)
    if (!Array.isArray(listItems)) {
      listItems = [];
    }
    if(!listItems.includes(this.recipeId)){
      listItems.push(this.recipeId)
    }
        
    // Add new item to cart
    setLocalStorage("recipe-list", listItems);
    updateListBadge();
  }

  renderRecipeCardDetails(element) {
    let container = document.querySelector(element);
    let productForm = recipeContent(this.recipeId,this.recipeCard);
    container.innerHTML = productForm;
  }
}
