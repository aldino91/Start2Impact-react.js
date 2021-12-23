import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "./slices/ListRecipes";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
