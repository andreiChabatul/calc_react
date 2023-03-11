
enum activeState {
    constructor = 'constructor',
    runtime = 'runtime'
}

type appState = {
    activeState: activeState,
    displayDrop: boolean,
}

const initalState: appState = {
    activeState: activeState.constructor,
    displayDrop: false,

}

export default initalState;
