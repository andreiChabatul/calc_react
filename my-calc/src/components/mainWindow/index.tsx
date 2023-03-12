import { useAppSelector } from '../../store';
import ControState from '../controlState';
import Display from '../display';
import DoneArea from '../doneArea';
import EqualsContainer from '../equalContainer';
import Logo from '../logo';
import NumberContainer from '../numberContainer';
import OperandorContainer from '../operandorContainer';
import './index.css';

const MainWindow = () => {

    const { IsRuntime } = useAppSelector(state => state.appState)

    return (
        <div className='main-container'>
            <Logo />
            <ControState />
            <div className={`element-constructor ${IsRuntime ? 'element-constructor__disable' : ''}`}>
                <Display value={true} />
                <OperandorContainer value={true} />
                <NumberContainer value={true} />
                <EqualsContainer value={true} />
            </div>
            <DoneArea />
        </div>
    )

}

export default MainWindow;
