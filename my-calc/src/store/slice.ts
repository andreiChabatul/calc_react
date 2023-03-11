import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initalState from "./initalState";


const sliceApp = createSlice({
    name: 'change_app',
    initialState: initalState,
    reducers: {

    }
})

export default sliceApp.reducer;
export const { } = sliceApp.actions;
