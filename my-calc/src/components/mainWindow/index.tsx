import ControState from '../controlState';
import Display from '../display';
import DoneArea from '../doneArea';
import EqualsContainer from '../equalContainer';
import Logo from '../logo';
import NumberContainer from '../numberContainer';
import OperandorContainer from '../operandorContainer';
import './index.css';

const MainWindow = () => {

    return (
        <div className='main-container'>
            <Logo />
            <ControState />
            <div className='element-constructor'>
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
