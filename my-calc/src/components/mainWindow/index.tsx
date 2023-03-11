import ControState from '../controlState';
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
        </div>
    )

}

export default MainWindow;
