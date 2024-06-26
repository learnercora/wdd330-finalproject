import { getRecipeId, loadHeaderFooter } from "./utils.mjs";
import ExternalApi from "./ExternalApi.mjs";
import recipeCardDetails from "./recipeCardDetails.mjs";

loadHeaderFooter();

const recipeId = getRecipeId();
const dataSource = new ExternalApi();

const recipeCard = new recipeCardDetails(recipeId, dataSource);
recipeCard.init();
