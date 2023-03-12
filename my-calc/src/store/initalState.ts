

export type appState = {
    IsRuntime: boolean,
    IsDragMonitor: boolean;
    dropArr: JSX.Element[],
    result: string,
    resultCalc: string,
    IsResultText: boolean,
}

const initalState: appState = {
    IsRuntime: false,
    IsDragMonitor: false,
    dropArr: [],
    result: '0',
    resultCalc: '',
    IsResultText: false,

}

export default initalState;
