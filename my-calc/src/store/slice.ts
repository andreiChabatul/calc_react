import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initalState, { activeState, appState } from "./initalState";

const sliceApp = createSlice({
    name: 'change_app',
    initialState: initalState,
    reducers: {
        change_state(state: appState, action: PayloadAction<activeState>) {
            state.activeState = action.payload;
            console.log(state.activeState)
        }

    }
})

export default sliceApp.reducer;
export const { change_state } = sliceApp.actions;
