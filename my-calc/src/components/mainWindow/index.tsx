import ControState from '../controlState';
import Logo from '../logo';
import './index.css';

const MainWindow = () => {

    return (
        <div className='main-container'>
            <Logo />
            <ControState />
        </div>
    )

}

export default MainWindow;
