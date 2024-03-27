import { loadHeaderFooter, getElementByQuerySelector } from "./utils.mjs";
import SearchBar from "./searchBar";
import Recipelist from "./recipeList";
import ExternalApi from "./ExternalApi.mjs";

// import TestRecipeApi from "./TestRecipeApi.mjs";
// import {TestRecipeApiById} from "./TestRecipeApi.mjs";

// const testrecipeapi = new TestRecipeApi();
// testrecipeapi.getData();
// testrecipeapi.getNextPage();
// const recipeCard = new TestRecipeApiById();
// recipeCard.getData()

loadHeaderFooter();

const searchBar = new SearchBar();
searchBar.init();

const dataSource = new ExternalApi();
const recipeListElement = getElementByQuerySelector(".recipe-list");

const recipeList = new Recipelist(dataSource, recipeListElement);
recipeList.init();
