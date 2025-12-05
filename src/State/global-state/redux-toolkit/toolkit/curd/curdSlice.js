import { createSlice } from "@reduxjs/toolkit";



let curdSlice = createSlice({
  name: 'curd',
  initialState: {
    noOfCurds: 200
  },
  reducers: {
    buyCurd: (state) => {
      state.noOfCurds -= 1
    }
  }
})

export default curdSlice.reducer

export let {buyCurd} = curdSlice.actions