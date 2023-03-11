import ControState from '../controlState';
import Display from '../display';
import EqualsContainer from '../equalContainer';
import Logo from '../logo';
import OperandorContainer from '../operandorContainer';
import './index.css';

const MainWindow = () => {

    return (
        <div className='main-container'>
            <Logo />
            <ControState />
            <OperandorContainer />
            <EqualsContainer />
            <Display />
        </div>
    )

}

export default MainWindow;
