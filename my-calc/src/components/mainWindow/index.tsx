import ControState from '../controlState';
import Display from '../display';
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
                <Display />
                <OperandorContainer />
                <NumberContainer />
                <EqualsContainer />
            </div>
        </div>
    )

}

export default MainWindow;
