import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/Sae301/", // ← remplace par le nom exact de ton repo GitHub
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        account: resolve(__dirname, "pages/account.html"),
        checkout: resolve(__dirname, "pages/checkout.html"),
        enfant: resolve(__dirname, "pages/enfant.html"),
        homme: resolve(__dirname, "pages/homme.html"),
        femme: resolve(__dirname, "pages/femme.html"),
        panier: resolve(__dirname, "pages/panier.html"),
      },
    },
  },
});