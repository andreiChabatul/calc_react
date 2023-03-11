

export type appState = {
    IsRuntime: boolean,
    IsDragMonitor: boolean;
    dropArr: JSX.Element[],
}

const initalState: appState = {
    IsRuntime: false,
    IsDragMonitor: false,
    dropArr: [],

}

export default initalState;
