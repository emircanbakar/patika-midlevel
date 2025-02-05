import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: 1,
        title: "learn rtk",
        completed: false,
      },
      {
        id: 2,
        title: "earn",
        completed: true,
      },
    ],
  },
  reducers: {},
});

export default todosSlice.reducer;
