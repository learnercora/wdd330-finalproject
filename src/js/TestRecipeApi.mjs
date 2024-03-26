const baseURL = import.meta.env.VITE_SERVER_URL;

async function convertToJson(res) {
  const jsonResponse = await res.json();
  if (res.ok) {
    return jsonResponse;
  } else {
    throw { name: "Error", message: jsonResponse };
  }
}

export default class TestRecipeApi {
  constructor() {
    this.query = "egg",
    this.pagenumber = 1
    this.number = 10,
    this.offset = 0,
    this.excludeIngredients = "cheese"

  }
  async getData() {
    const options = {
      method: "GET",
      headers: {
        "x-api-key": "3a992bd79ba44ab7a11ad70f4052f61c",
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(baseURL + `complexSearch?
    query=${this.query}&
    offset=${this.offset}&
    excludeIngredients=${this.excludeIngredients}`
    , options);
    const data = await convertToJson(response);
    console.log("data",data)
    return data;
  }
  async getNextPage() {
    // 增加offset值以獲取下一頁
    this.offset += this.number;
    console.log(this.offset)

    const options = {
      method: "GET",
      headers: {
        "x-api-key": "3a992bd79ba44ab7a11ad70f4052f61c",
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(baseURL + `complexSearch?
      query=${this.query}&
      offset=${this.offset}&
      excludeIngredients=${this.excludeIngredients}`
    , options);

    const data = await convertToJson(response);
    console.log("data", data);
    return data;
  }
}

export class TestRecipeApiById {
  constructor() {
    this.id = 782585
  }
  async getData() {
    const options = {
      method: "GET",
      headers: {
        "x-api-key": "3a992bd79ba44ab7a11ad70f4052f61c",
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(baseURL + `${this.id}/card`, options);
    console.log(response)
    const data = await convertToJson(response);
    console.log("data",data)
    return data;
  }
}
