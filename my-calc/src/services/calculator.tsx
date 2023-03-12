import { store } from "../store";
import { set_isText, set_result, set_resultCalc } from "../store/slice";
import { evaluate } from 'mathjs';

class Calculator {
    resultString: string;
    actualNumber: string;
    memory: string;

    constructor() {
        this.memory = '';
        this.resultString = '';
        this.actualNumber = '';
    }

    setNumber(value: string) {
        this.memory = '';
        if (value === ',') {
            if (this.actualNumber.length === 0) {
                this.actualNumber = '0,';
            }
            else if (this.actualNumber.includes(',')) {
            } else {
                this.actualNumber += value;
            }
        } else {
            this.actualNumber += value;
        }
        store.dispatch(set_resultCalc(this.actualNumber))
    }

    setOperandor(value: string) {

        if (value === '+' || value === '-' || value === 'х' || value === '/') {
            this.resultString = this.resultString + this.memory;
            this.setResult((this.actualNumber));
            this.actualNumber = '';
            store.dispatch(set_isText(true));

            if (isNaN(Number(this.resultString[this.resultString.length - 1]))) {
                this.resultString = this.resultString.slice(0, -1);
            }
            this.resultString += value;
            if (this.resultString.length === 1) {
                if (this.resultString[0] != '-') {
                    this.resultString = '';
                }
            }
        }
        this.calcResult();
        store.dispatch(set_result(this.resultString))
    }

    setResult(value: string) {
        this.resultString += value;
        store.dispatch(set_result(value))
    }

    calcResult() {
        let calcString = this.resultString.replaceAll("х", ")*").replaceAll(",", ".").replaceAll("/", ")/");
        calcString = '('.repeat(calcString.split(')').length - 1) + calcString;
        if (isNaN(Number(this.resultString[this.resultString.length - 1]))) {
            calcString = calcString.slice(0, -1)
        }

        if (calcString) {
            const result = evaluate(calcString)
            if (isFinite(result)) {
                store.dispatch(set_resultCalc(this.roundNumber(result)));
            } else {
                store.dispatch(set_resultCalc('Не определенно'));
                this.resetCalc();
            }
        }
    }

    egualClick() {
        this.setResult((this.actualNumber));
        this.calcResult();
        this.memory = store.getState().appState.resultCalc;
        this.resetCalc();
    }

    resetCalc() {
        store.dispatch(set_isText(false));
        this.resultString = '';
        this.actualNumber = '';
    }

    roundNumber(value: string) {
        let resultString = String(Number(value).toFixed(10)).replace(/0*$/, "");
        if (resultString[resultString.length - 1] === '.') {
            resultString = resultString.slice(0, -1)
        }
        return resultString;
    }

}
const calculator = new Calculator();
export default calculator;
