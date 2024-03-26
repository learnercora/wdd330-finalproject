import { loadHeaderFooter } from "./utils.mjs";
import SearchBar from "./searchBar"

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
