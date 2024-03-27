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

export default class RecipeList {
    constructor(dataSource, listElement) {
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    async init() {
        // const list = await this.dataSource.getData();
        // console.log(list)
        const list = [
            { 
                id: 782585, 
                title: "Cannellini Bean and Asparagus Salad with Mushrooms", 
                image: "https://img.spoonacular.com/recipes/782585-312x231.jpg" 
            },
            {
                id: 715497,
                image: "https://img.spoonacular.com/recipes/715497-312x231.jpg",
                title: "Berry Banana Breakfast Smoothie"
            }
        ]
        // console.log(list)
        this.renderList(list);
    }
    renderList(list) {
        renderListWithTemplate(recipeCardTemplate, this.listElement, list);
    }
}
  