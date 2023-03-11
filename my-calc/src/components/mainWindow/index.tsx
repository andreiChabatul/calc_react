import { useAppSelector } from '../../store';
import ControState from '../controlState';
import Display from '../display';
import DoneArea from '../doneArea';
import { TypeJSXElement } from '../doneArea/type';
import EqualsContainer from '../equalContainer';
import Logo from '../logo';
import NumberContainer from '../numberContainer';
import OperandorContainer from '../operandorContainer';
import './index.css';

const MainWindow = () => {

    const { dropArr } = useAppSelector(state => state.appState)

    return (
        <div className='main-container'>
            <Logo />
            <ControState />
            <div className='element-constructor'>
                {dropArr.filter(elem => elem.type.name === TypeJSXElement.display).length > 0 && <div className='display_dissable'></div>}
                {dropArr.filter(elem => elem.type.name === TypeJSXElement.buttonOperandor).length > 0 && <div className='operandor_dissable'></div>}
                {dropArr.filter(elem => elem.type.name === TypeJSXElement.buttonNumber).length > 0 && <div className='number_dissable'></div>}
                {dropArr.filter(elem => elem.type.name === TypeJSXElement.equal).length > 0 && <div className='equal_dissable'></div>}
                <Display />
                <OperandorContainer />
                <NumberContainer />
                <EqualsContainer />
            </div>
            <DoneArea />
        </div>
    )

}

export default MainWindow;
