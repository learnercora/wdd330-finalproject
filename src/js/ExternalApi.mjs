const baseURL = import.meta.env.VITE_SERVER_URL;

async function convertToJson(res) {
  const jsonResponse = await res.json();
  if (res.ok) {
    return jsonResponse;
  } else {
    throw { name: "Error", message: jsonResponse };
  }
}

export default class ExternalApi {
  constructor() {
    (this.query = "egg"), (this.pagenumber = 1);
    (this.number = 10),
      (this.offset = 0),
      (this.excludeIngredients = "cheese"),
      (this.options = {
        method: "GET",
        headers: {
          "x-api-key": "3a992bd79ba44ab7a11ad70f4052f61c",
          "Content-Type": "application/json",
        },
      });
  }

  async getData() {
    const response = await fetch(
      baseURL +
        `complexSearch?
    query=${this.query}&
    offset=${this.offset}&
    excludeIngredients=${this.excludeIngredients}`,
      this.options,
    );
    const data = await convertToJson(response);
    return data.results;
  }
  // async changePage(){

  // }
  async showRecipeImageById(id) {
    const response = await fetch(baseURL + `${id}/card`, this.options);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
    }
  }

  async getRecipeInfo(id) {
    const response = await fetch(baseURL + `${id}/information`, this.options);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  }

  // async checkout(options) {
  //   const response = await fetch(`${baseURL}checkout`, options);
  //   if (response.ok) {
  //     const data = await convertToJson(response);
  //     return data;
  //   } else {
  //     const data = await response.json();
  //     throw data;
  //   }
  // }
}
