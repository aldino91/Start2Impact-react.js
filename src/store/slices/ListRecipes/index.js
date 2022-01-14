import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(
  "recipes/getRecipes",
  async (params) => {
    return fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${params}&diet=vegetarian&number=100&apiKey=${process.env.NEXT_PUBLIC_API_KEY_2}`
    )
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((json) => json);
  }
);

export const sliceRecipes = createSlice({
  name: "recipes",
  initialState: {
    loading: "",
    error: "",
    data: [],
  },
  reducers: {},
  extraReducers: {
    [fetchRecipes.pending]: (state) => {
      state.loading = "";
    },
    [fetchRecipes.rejected]: (state, action) => {
      state.loading = "";
      state.error = action.error.messagge;
    },
    [fetchRecipes.fulfilled]: (state, action) => {
      state.loading = "";
      state.data = action.payload;
    },
  },
});

export const recipesReducer = sliceRecipes.reducer;
export const selectData = (state) => state.recipes.data;
