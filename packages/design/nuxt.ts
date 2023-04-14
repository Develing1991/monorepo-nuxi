import { defineNuxtModule } from "@nuxt/kit";
import { join } from "path";
// https://nuxtjs.org/docs/configuration-glossary/configuration-components#library-authors

export default defineNuxtModule({
  hooks: {
    "components:dirs": (dirs) => {
      dirs.push({
        path: join(__dirname, "components"),
      });
    },
  },
});
