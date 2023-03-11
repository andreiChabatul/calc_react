import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initalState, { appState } from "./initalState";

const sliceApp = createSlice({
    name: 'change_app',
    initialState: initalState,
    reducers: {
        change_state(state: appState, action: PayloadAction<boolean>) {
            state.IsRuntime = action.payload;
            console.log(state.IsRuntime)
        }

    }
})

export default sliceApp.reducer;
export const { change_state } = sliceApp.actions;
