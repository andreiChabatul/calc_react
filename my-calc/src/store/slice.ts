import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeJSXElement } from './../type';
import initalState, { appState } from "./initalState";

const sliceApp = createSlice({
    name: 'change_app',
    initialState: initalState,
    reducers: {
        change_state(state: appState, action: PayloadAction<boolean>) {
            state.IsRuntime = action.payload;
            state.resultCalc = '';
        },
        drag_monitor(state: appState, action: PayloadAction<boolean>) {
            state.IsDragMonitor = action.payload;
        },
        drop_add(state: appState, action: PayloadAction<JSX.Element>) {
            state.dropArr.push(action.payload);
            for (let i = 0; i < state.dropArr.length; i++) {
                if (state.dropArr[i].type.name === TypeJSXElement.display) {
                    [state.dropArr[0], state.dropArr[i]] = [state.dropArr[i], state.dropArr[0]]
                }
            }
        },
        delete_element(state: appState, action: PayloadAction<JSX.Element>) {
            state.dropArr = state.dropArr.filter(element => element.type.name !== action.payload.type.name);
        },
        set_result(state: appState, action: PayloadAction<string>) {
            state.result = action.payload;
        },
        set_isText(state: appState, action: PayloadAction<boolean>) {
            state.IsResultText = action.payload;
        },
        set_resultCalc(state: appState, action: PayloadAction<string>) {
            state.resultCalc = action.payload;
        },
    }
})

export default sliceApp.reducer;
export const { change_state, drag_monitor, drop_add, delete_element, set_result, set_isText, set_resultCalc } = sliceApp.actions;
