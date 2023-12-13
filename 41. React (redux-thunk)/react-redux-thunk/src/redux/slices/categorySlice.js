import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  category: {},
  loading: false,
  error: null,
};

//get all categories
export const fetchData = createAsyncThunk(
  "categories/fetchCategories",
  async (url) => {
    const response = await axios.get(url);
    return response.data;
  }
);
//get category by id
export const fetchByID = createAsyncThunk(
  "categories/fetchByID",
  async (url) => {
    const res = await axios.get(url);
    return res.data;
  }
);

const categorySlice = createSlice({
  initialState,
  name: "category",
  reducers: {
    add_category: (state, action) => {
      state.categories.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    //get all categories
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    //get by id
    builder
      .addCase(fetchByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchByID.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(fetchByID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;
export const { add_category } = categorySlice.actions;
