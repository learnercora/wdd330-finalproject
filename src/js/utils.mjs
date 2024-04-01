// utils.mjs

export function getLocalStorage(key) {
  console.log(localStorage.getItem(key))
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getRecipeId() {
  const queryString = window.location.search;
  const id = queryString.split("=")[1];
  return id;
}

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false,
) {
  clear ? (parentElement.innerHTML = "") : "";
  const renderString = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, renderString.join(""));
}

export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.insertAdjacentHTML("afterbegin", template);
  if (callback) {
    callback(data);
  }
}

export const loadTemplate = async (path) => {
  let data = await fetch(path).then((res) => res.text());
  return data;
};

export const loadHeaderFooter = async () => {
  let [header, footer] = await Promise.all([
    loadTemplate("/partials/header.html"),
    loadTemplate("/partials/footer.html"),
  ]);
  let parentHeader = document.querySelector("header");
  let parentFooter = document.querySelector("footer");
  renderWithTemplate(header, parentHeader);
  renderWithTemplate(footer, parentFooter);
  updateListBadge();
};

export function updateListBadge() {
  console.log(localStorage.getItem("recipe-list"))
  const listItems = JSON.parse(localStorage.getItem("recipe-list"));
  let listCount = 0;
  if (listItems) {
    listCount = listItems.length;
  }
  const recipeListCount = document.querySelector(".recipe-list-count");
  if (recipeListCount) {
    recipeListCount.innerHTML = listCount;
  }
}

export function removeItemFromList(removeid) {
  let listItems = getLocalStorage("recipe-list") || [];
  listItems = listItems.filter((id) => id !== removeid);
  setLocalStorage("recipe-list", listItems);
  updateListBadge();
}

export function formDataToJSON(formElement) {
  const formData = new FormData(formElement);
  let jsonResult = {};
  formData.forEach((value, key) => (jsonResult[key] = value));
  return jsonResult;
}
