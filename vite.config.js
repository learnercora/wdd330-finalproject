import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        recipe: resolve(__dirname, "src/recipe_page/index.html"),
        list: resolve(__dirname, "src/list/index.html"),
        // checkout: resolve(__dirname, "src/checkout/index.html"),
        // product: resolve(__dirname, "src/product_pages/index.html"),
        // listing: resolve(__dirname, "src/product_listing/index.html"),
        // search: resolve(__dirname, "src/search_results/index.html"),
        // signup: resolve(__dirname, "src/signup.html"),
        // success: resolve(__dirname, "src/success.html"),
      },
    },
  },
});
