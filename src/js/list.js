import CollectedList from "./collectedList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const parentElement = document.querySelector(".recipe-list");
const collectList = new CollectedList(parentElement);
collectList.init();
