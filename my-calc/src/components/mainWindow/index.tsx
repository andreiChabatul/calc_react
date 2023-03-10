import ControState from '../controlState';
import Logo from '../logo';
import OperandorContainer from '../operandorContainer';
import './index.css';

const MainWindow = () => {

    return (
        <div className='main-container'>
            <Logo />
            <ControState />
            <OperandorContainer />
        </div>
    )

}

export default MainWindow;
