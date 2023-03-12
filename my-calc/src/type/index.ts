export type JSXdrop = {
    value?: boolean
}


export type numberControl = number | ',';
export type operandor = '/' | 'х' | '-' | '+';
export type propsNumberControl = {
    value: numberControl,
}
export type propsOperandor = {
    value: operandor,
}

export enum TypeJSXElement {
    display = 'Display',
    equal = 'EqualsContainer',
    buttonNumber = 'NumberContainer',
    buttonOperandor = 'OperandorContainer',
}

export type dropItem = {
    value: TypeJSXElement
}


